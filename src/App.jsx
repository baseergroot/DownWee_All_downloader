import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [vsrc, setSrc] = useState();
  const [showvideo, setShowvideo] = useState("none");
  const [showp, setShowp] = useState("none");
  const [downloadLink, setDownloadLink] = useState('');

  const handleSrc = () => {
    setShowvideo("none");
    setShowp("block");

    fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: input }),
    })
      .then(response => response.json())
      .then((data) => {
        setShowp("none");
        console.log("text: ", data);
        setShowvideo("block");
        setSrc(data.data.videoUrl);
        setDownloadLink(data.data.videoUrl);
      })
      .catch((error) => {
        setShowp("none");
        console.error("Error fetching video:", error);
      });
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(downloadLink);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'video.mp4';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }

  return (
    <>
      <h1>DownWee <br /> All Downloader</h1>
      <main>
        <input
          type="text"
          placeholder="Paste Your Link Here"
          onChange={(e) => {
            setInput(e.target.value)
          }}
          value={input}
        />

        <button onClick={handleSrc}>Submit</button>

        <video controls src={vsrc} style={{ display: showvideo }}></video>

        <div className="loading" style={{ display: showp }}>
          <div className="loading-text">
            <span className="loading-text-words">L</span>
            <span className="loading-text-words">O</span>
            <span className="loading-text-words">A</span>
            <span className="loading-text-words">D</span>
            <span className="loading-text-words">I</span>
            <span className="loading-text-words">N</span>
            <span className="loading-text-words">G</span>
          </div>
        </div>

        {downloadLink && (
          <button onClick={handleDownload}>Download</button>
        )}
      </main>
    </>
  )
}

export default App;