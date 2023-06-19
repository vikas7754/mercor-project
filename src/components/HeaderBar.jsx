import "./HeaderBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faChevronDown,
  faCircleQuestion,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
function HeaderBar() {
  return (
    <div className="header-bar-container">
      <div className="search">
        <form action="">
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="text" placeholder="Search for anything..." />
        </form>
      </div>
      <div className="side-details">
        <div className="buttons">
          <button>
            <FontAwesomeIcon icon={faCalendar} />
          </button>
          <button>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </button>
          <button className="bell">
            <FontAwesomeIcon icon={faBell} />
            <span></span>
          </button>
        </div>
        <div style={{ cursor: "pointer" }}>
          <div className="flex-center">
            <div className="user-detail">
              <div>Anima Agrawal</div>
              <div>Agra</div>
            </div>
            <div className="user-img">
              <img
                src="https://funkylife.in/wp-content/uploads/2023/02/cute-girl-pic-2-1024x1024.jpg"
                alt="user image"
              />
            </div>
            <div>
              <i>
                <FontAwesomeIcon icon={faChevronDown} />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
