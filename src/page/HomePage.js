import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { useState, useEffect, useRef } from "react";


function HomePage() {
  const [stateShow, setStateShow] = useState({});
  const options = {
    threshold: 0.3
  }
  const target = useRef([]);
  const observer = new IntersectionObserver(showTarget, options);

  function addTarget(item) {
    target.current.push(item);
  }

  function showTarget(items) {
    items.forEach((item) => {
      if (item.isIntersecting) {
        const number = String(item.target.className).slice(7, 8);
        setStateShow((state) => {
          switch (number) {
            case '2':
                return {...state, 2: true};
            case '3':
              return {...state, 3: true};
            case '4':
              return {...state, 4: true};
            case '5':
              return {...state, 5: true};
            default: return state;
          }
        });
        observer.unobserve(item.target);
      }
    });
    
  }
  useEffect(() => {
    console.log(stateShow);
  }, [stateShow])

  useEffect(() => {
    
    target.current.forEach((item) => {
      observer.observe(item);
    });
  }, [target])
  return (
    <div>
      <NavBar />
      <div className="intro-container">
        <div className="text-intro-container">
          <p className="title-intro">IMAGINE A PLACE</p>
          <p className="text-intro">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          <div className="button-intro-container">
            <button className="download-button">
              <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2tQ9Jt"><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg> 
              <span>Download for Windows</span></button>
            <button className="opendis-button">Open Discord in your browser</button>
          </div>
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4db9ca0a124b73d4b7_c40c84ca18d84633a9d86b4046a91437.svg" className="image-right"></img>
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4df2dc8d7a9a081ebd_8a8375ab7908384e1fd6efe408284203.svg" className="image-left"></img>
        </div>
      </div>

      <div className="section2-container content" ref={addTarget}>
        <div className={`section2-container-grid ` + (stateShow['2'] ? "show-content" : '')}>
          <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c18a9cff186bd3731704_Create%20an%20invite-only%20place%20where%20you%20belong.svg"  className="img-section2"/>
          <div className="text-container">
            <p className="title-section2">
              Create an invite-only place where you belong
            </p>
            <p className="text-section2">
            Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
            </p>
          </div>
        </div>
      </div>

      <div className="section3-container content" ref={addTarget}>
        <div className={"section3-container-grid " + (stateShow['3'] ? "show-content" : '')}>
          <div className="text-container">
            <p className="title-section3">
              Where hanging out is easy
            </p>
            <p className="text-section3">
            Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
            </p>
          </div>
          <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c1b717efff2306ef179e_Where%20hanging%20out%20is%20easy.svg" className="img-section3" />
        </div>
      </div>

      <div className="section4-container content" ref={addTarget}>
        <div className={"section4-container-grid " + (stateShow['4'] ? "show-content" : '')}>
          <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c1d8348e5c81ca608138_From%20few%20to%20a%20fandom.svg"  className="img-section4"/>
          <div className="text-container">
            <p className="title-section4">
            From few to a fandom
            </p>
            <p className="text-section4">
            Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="section5-container content" ref={addTarget}>
        <div className={"section5-container-flex " + (stateShow['5'] ? "show-content" : '')}>
          <p className="title-section5">
            RELIABLE TECH FOR STAYING CLOSE
          </p>
          <p className="text-section5">
            Low-latency voice and video feels like you’re in the  same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
          </p>
          <div className="img-section5-container">
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c202770f02752be44796_RELIABLE%20TECH%20FOR%20STAYING%20CLOSE.svg" className="img-section5"></img>
          </div>
          <div className="ready-container">
            <div className="ready-to-start">
              <p>Ready to start your journey?</p>
              <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/625bd8c9aab9924849ad9c5e_a188414ce83f2454b9d71a47c3d95909%20(3).svg" className="img-up"/>
            </div>
            <button className="download-button-section5">
            <p className="text-download">Download for Windows</p>
            </button>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default HomePage;