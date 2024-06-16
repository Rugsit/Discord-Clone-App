import NavBar from "../component/NavBar";
import './DownLoadPage.css';
import Footer from "../component/Footer.js";
import { useRef, useState, useEffect } from "react";

function DownloadPage() {
  const [isShowTarget, setIsShowTarget] = useState(false);
  const options = {
    threshold: 0.3
  }
  const target = useRef(null);
  const observer = new IntersectionObserver((item) => {
    if (item[0].isIntersecting) {
      setIsShowTarget(true);

      observer.unobserve(target.current);
    }
  }, options);

  useEffect(() => {
    observer.observe(target.current);
  }, [target]);

  return (
    <div>
      <NavBar />
      <div className="section1-container" ref={target}>
        <div className={"content-section1-container " + (isShowTarget ? 'show' : '')}>
          <div className="text-content-section1-container">
            <p className="title-section1">GET DISCORD FOR ANY DEVICE</p>
            <p className="text-section1">
              An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.
            </p>
            <div className="button-section1-container">
              <button className="download-button-section1">
                <p className="text-download">Download for Windows</p>
              </button>
              <p>Windows 10 or higher</p>
            </div>
          </div>
          <div className="img-section1-container">
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582bf5c02e1d4067ddb99c9_window.svg" className="img-section1" />
          </div>
        </div>
      </div>

      <div className="section2-container">
        <div className="content-section2-container">
          <div className="ios">
            <p className="title-content-section2">IOS</p>
            <button className="download-button-downloadpage">Download</button>
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582acf11352f8fe846a56c3_downloads-device-ios.svg"/>
          </div>
          <div className="android">
            <p className="title-content-section2">Android</p>
            <button className="download-button-downloadpage">Download</button>
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582ad41729189e29e03ee1b_downloads-device-android-1%201.svg" />
          </div>
          <div className="linux">
            <p className="title-content-section2">Linux</p>
            <button className="download-button-downloadpage">Download</button>
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582bf1bfda01c6891c3931d_linux.svg" />
          </div>
          <div className="mac">
            <p className="title-content-section2">Mac</p>
            <button className="download-button-downloadpage">Download</button>
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582bed9ac055daeab0fd7d9_Mac-2.svg" />
          </div>
          <div className="experimental">
            <p className="title-experimental-section2">Feeling experimental?</p>
            <p className="text-experimental-section2">Try our Public Test Build and test new features before they launch.</p>
            <button className="download-public-button">
              Download Public Test Build
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.692 17.18 3.823 9.393c-.43-.453-.43-1.146 0-1.573.431-.427 1.132-.427 1.59 0l7.087 7.013 7.087-7.013a1.147 1.147 0 0 1 1.59 0c.43.427.43 1.12 0 1.573L13.28 17.18c-.43.427-1.131.427-1.59 0Z" fill="CurrentColor"></path></svg>
            </button>
          </div>
          <div className="archives">
            <p className="title-archives-section2">From the archives:</p>
            <p className="text-archives-section2">Windows 7/8/8.1 and Windows 32-bit users can download official, but unsupported clients here.</p>
            <button className="download-archives-section2">
              Download
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.692 17.18 3.823 9.393c-.43-.453-.43-1.146 0-1.573.431-.427 1.132-.427 1.59 0l7.087 7.013 7.087-7.013a1.147 1.147 0 0 1 1.59 0c.43.427.43 1.12 0 1.573L13.28 17.18c-.43.427-1.131.427-1.59 0Z" fill="CurrentColor"></path></svg>
            </button>
          </div>
        </div>
      </div>






    <Footer />
    </div>
  );
}

export default DownloadPage;