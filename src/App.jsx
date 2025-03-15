import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/1740487219078.jpg';
import MenuIcon from './components/MenuIcon';
import CloseIcon from './components/CloseIcon';
import Option from './components/Option';
import Howto from "./components/Howto";
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

function App() {
  const [input, setInput] = useState("");
  const [vsrc, setSrc] = useState();
  const [showvideo, setShowvideo] = useState("none");
  const [showp, setShowp] = useState("none");
  const [downloadLink, setDownloadLink] = useState('');
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [videoName, setVideoName] = useState("")

  useEffect(() => {
    // Update body class and localStorage when theme changes
    document.body.classList.toggle('dark-theme', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

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
        console.log(data);
        setShowvideo("block");
        setSrc(data.videoUrl);
        setVideoName(data.title)
        setDownloadLink(data.videoUrl);
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
      a.download = videoName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }
  
  const [menuDisplay, setMenuDisplay] = useState("block");
  const [closeDisplay, setCloseDisplay] = useState("none");
  
  const ToggleMenu = () => {
    setMenuDisplay(menuDisplay === "none" ? "block" : "none");
    setCloseDisplay(closeDisplay === "block" ? "none" : "block");
  }
  
  return (
    <div className={`app-container ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <nav>
        <div className="nav-content">
          <img src={logo} alt="DownWee Logo" className="logo" />
          <div className="nav-controls">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            <div className="menu-toggle" onClick={ToggleMenu}>
              <MenuIcon menuDisplay={menuDisplay} />
              <CloseIcon closeDisplay={closeDisplay} />
            </div>
          </div>
        </div>
        <Option closeDisplay={closeDisplay} />
      </nav>
      
      <main id="home">
        <h1>DownWee <br /><span className="highlight">All Downloader</span></h1>
        
        <div className="input-container">
          <input
            type="text"
            placeholder="Paste Your Link Here"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="link-input"
          />
          <button onClick={handleSrc} className="submit-btn">Submit</button>
        </div>

        <video 
          controls 
          src={vsrc} 
          style={{ display: showvideo }}
          className="video-player"
        ></video>

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
          <button onClick={handleDownload} className="download-btn">Download</button>
        )}
      </main>
      {/* <Howto /> */ }
      <Footer />
    </div>
  )
}

export default App;
