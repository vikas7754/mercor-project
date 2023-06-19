import "./Sidebar.scss";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faCircle,
  faCommentDots,
  faEllipsis,
  faGear,
  faHome,
  faLightbulb,
  faListCheck,
  faPlusSquare,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function Sidebar() {
  const [active, setActive] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!toggle && window && window.innerWidth < 860) setToggle(true);
  }, []);
  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth < 860) {
        setToggle(true);
      }
    };
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <>
      <div
        className="toggle-left"
        onClick={() => setToggle(false)}
        style={{ display: !toggle ? "none" : "block" }}
      >
        <FontAwesomeIcon icon={faAnglesRight} />
      </div>
      <div
        className="sidebar"
        style={{
          left: width < 860 && toggle ? "-200px" : 0,
          display: toggle ? "none" : "block",
        }}
      >
        <div className="top">
          <div className="logo flex-center">
            <img src={logo} alt="logo" />
            <span>Project M.</span>
          </div>
          <div className="toggle" onClick={() => setToggle(true)}>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </div>
        </div>
        <div className="menu">
          <ul className="ul-1">
            <li>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faHome} />
                </i>{" "}
                Home
              </a>
            </li>
            <li>
              <a href="">
                <i>
                  <FontAwesomeIcon icon={faCommentDots} />
                </i>{" "}
                Messages
              </a>
            </li>
            <li>
              <a href="">
                <i>
                  <FontAwesomeIcon icon={faListCheck} />
                </i>{" "}
                Tasks
              </a>
            </li>
            <li>
              <a href="">
                <i>
                  <FontAwesomeIcon icon={faUsers} />
                </i>{" "}
                Members
              </a>
            </li>
            <li>
              <a href="">
                <i>
                  <FontAwesomeIcon icon={faGear} />
                </i>{" "}
                Settings
              </a>
            </li>
          </ul>
          <div className="ul-2">
            <div className="project-title">
              <span>My Project</span>
              <i>
                <FontAwesomeIcon icon={faPlusSquare} />
              </i>
            </div>
            <ul>
              <li>
                <button
                  onClick={() => setActive(0)}
                  className={active === 0 ? "active" : ""}
                >
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  Mobile App
                  {active === 0 && (
                    <i className="active-icon">
                      <FontAwesomeIcon icon={faEllipsis} />
                    </i>
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActive(1)}
                  className={active === 1 ? "active" : ""}
                >
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  Website Redesign
                  {active === 1 && (
                    <i className="active-icon">
                      <FontAwesomeIcon icon={faEllipsis} />
                    </i>
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActive(2)}
                  className={active === 2 ? "active" : ""}
                >
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  Design System
                  {active === 2 && (
                    <i className="active-icon">
                      <FontAwesomeIcon icon={faEllipsis} />
                    </i>
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActive(3)}
                  className={active === 3 ? "active" : ""}
                >
                  <i>
                    <FontAwesomeIcon icon={faCircle} />
                  </i>{" "}
                  Wireframes
                  {active === 3 && (
                    <i className="active-icon">
                      <FontAwesomeIcon icon={faEllipsis} />
                    </i>
                  )}
                </button>
              </li>
            </ul>
          </div>
          <div className="contact">
            <div>
              <i>
                <FontAwesomeIcon icon={faLightbulb} />
              </i>
            </div>
            <div>Thought Time</div>
            <p>
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <div>
              <button className="btn">Write a message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
