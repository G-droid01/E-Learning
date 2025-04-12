import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const userRole = "admin"; // change to "user" to test visibility

const Tabs = () => {
  const [tabData, setTabData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTab, setNewTab] = useState({
    title: "",
    color: "bg-blue-500",
    link: "",
    role: "all",
  });

  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "study_materials"));
        const tabsArray = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.role === "all" || userRole === "admin") {
            tabsArray.push({ id: doc.id, ...data });
          }
        });
        setTabData(tabsArray);
      } catch (error) {
        console.error("Error fetching tabs: ", error);
      }
    };

    fetchTabs();
  }, [showModal]); // refresh list when modal closes after add

  const handleAddTab = async () => {
    try {
      await addDoc(collection(db, "study_materials"), newTab);
      setShowModal(false);
      setNewTab({ title: "", color: "bg-blue-500", link: "", role: "all" });
    } catch (err) {
      console.error("Failed to add tab:", err);
    }
  };

  return (
    <div className="p-4">
      {userRole === "admin" && (
        <button
          onClick={() => setShowModal(true)}
          className="mb-4 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          + Add New Tab
        </button>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {tabData.map((tab) => (
          <Link
            key={tab.id}
            to={`/tab/${tab.id}`}
            className={`text-white text-center rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300 ${tab.color}`}
          >
            {tab.title}
          </Link>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Add New Tab</h2>
            <input
              type="text"
              placeholder="Title"
              value={newTab.title}
              onChange={(e) => setNewTab({ ...newTab, title: e.target.value })}
              className="w-full mb-2 px-3 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Link (e.g., tab/youtube)"
              value={newTab.link}
              onChange={(e) => setNewTab({ ...newTab, link: e.target.value })}
              className="w-full mb-2 px-3 py-2 border rounded"
            />
            <select
              value={newTab.color}
              onChange={(e) => setNewTab({ ...newTab, color: e.target.value })}
              className="w-full mb-2 px-3 py-2 border rounded"
            >
              <option value="bg-blue-500">Blue</option>
              <option value="bg-green-500">Green</option>
              <option value="bg-red-500">Red</option>
              <option value="bg-purple-500">Purple</option>
              <option value="bg-orange-500">Orange</option>
              <option value="bg-gray-600">Gray</option>
              <option value="bg-teal-500">Teal</option>
            </select>
            <select
              value={newTab.role}
              onChange={(e) => setNewTab({ ...newTab, role: e.target.value })}
              className="w-full mb-4 px-3 py-2 border rounded"
            >
              <option value="all">All Users</option>
              <option value="admin">Admin Only</option>
            </select>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTab}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
