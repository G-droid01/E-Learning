import { useParams } from "react-router-dom";
// import ReactPlayer from "react-player";

const mockTabDetails = {
  "youtube": {
    title: "YouTube Resources",
    videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
    pdfs: ["https://example.com/sample.pdf"],
    images: ["https://via.placeholder.com/300"]
  },
  "degree-i-year": {
    title: "Degree I Year Content",
    videos: [],
    pdfs: ["https://example.com/degree1.pdf"],
    images: []
  },
  // Add more tabs as needed
};

const TabDetails = () => {
  const { tabId } = useParams();
  const data = mockTabDetails[tabId];

  if (!data) {
    return <div className="p-4 text-center text-red-600">No Data Found!</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>

      {data.videos.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Videos</h3>
          {data.videos.map((video, idx) => (
            <div key={idx} className="my-2">
              {/* <ReactPlayer url={video} controls width="100%" /> */}
            </div>
          ))}
        </div>
      )}

      {data.pdfs.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg">PDFs</h3>
          <ul className="list-disc pl-5">
            {data.pdfs.map((pdf, idx) => (
              <li key={idx}>
                <a className="text-blue-600 underline" href={pdf} target="_blank" rel="noopener noreferrer">
                  View PDF {idx + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.images.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Images</h3>
          <div className="grid grid-cols-2 gap-4">
            {data.images.map((img, idx) => (
              <img key={idx} src={img} alt={`Content ${idx + 1}`} className="rounded-lg shadow" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TabDetails;
