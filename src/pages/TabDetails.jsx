import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
// import ReactPlayer from "react-player";

const TabDetails = () => {
  const { tabId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchTab = async () => {
      const ref = doc(db, "study_materials", tabId);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setData(snap.data());
      } else {
        setData("notfound");
      }
    };
    fetchTab();
  }, [tabId]);

  if (data === "notfound") {
    return <div className="p-4 text-center text-red-600">No Data Found!</div>;
  }

  if (!data) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>

      {data.videos?.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Videos</h3>
          {data.videos.map((video, idx) => (
            <div key={idx} className="my-2">
              {/* <ReactPlayer url={video} controls width="100%" /> */}
            </div>
          ))}
        </div>
      )}

      {data.pdfs?.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg">PDFs</h3>
          <ul className="list-disc pl-5">
            {data.pdfs.map((pdf, idx) => (
              <li key={idx}>
                <a href={pdf} className="text-blue-600 underline" target="_blank" rel="noreferrer">
                  View PDF {idx + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.images?.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Images</h3>
          <div className="grid grid-cols-2 gap-4">
            {data.images.map((img, idx) => (
              <img key={idx} src={img} alt={`Image ${idx + 1}`} className="rounded-lg shadow" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TabDetails;
