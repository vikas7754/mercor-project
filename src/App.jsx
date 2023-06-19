import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.scss";
import HeaderBar from "./components/HeaderBar";
import Sidebar from "./components/Sidebar";
import {
  faCalendar,
  faChevronDown,
  faCircle,
  faFilter,
  faLink,
  faList,
  faPen,
  faPlusSquare,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";
import { Fragment } from "react";

const images = [
  "https://images.freeimages.com/vhq/images/previews/4e1/female-user-icon-clip-art-92637.png",
  "https://images.freeimages.com/vhq/images/previews/4e1/female-user-icon-clip-art-92637.png",
  "https://images.freeimages.com/vhq/images/previews/4e1/female-user-icon-clip-art-92637.png",
  "https://images.freeimages.com/vhq/images/previews/4e1/female-user-icon-clip-art-92637.png",
  "https://images.freeimages.com/vhq/images/previews/4e1/female-user-icon-clip-art-92637.png",
  "https://images.freeimages.com/vhq/images/previews/4e1/female-user-icon-clip-art-92637.png",
  "https://images.freeimages.com/vhq/images/previews/4e1/female-user-icon-clip-art-92637.png",
  "https://images.freeimages.com/vhq/images/previews/4e1/female-user-icon-clip-art-92637.png",
];

const todos = [
  {
    title: "Brainstorming",
    description:
      "Brainstorming brings team members' diverse experience into play.",
    status: "low",
    userImages: [...images],
    comments: 12,
    files: 0,
  },
  {
    title: "Research",
    description:
      "User research helps you to create an optimal product for users.",
    status: "high",
    userImages: [...images],
    comments: 10,
    files: 3,
  },
  {
    title: "Wireframes",
    description:
      "Low fidelity wireframes include the most basic content and visuals.",
    status: "high",
    userImages: [...images],
    comments: 14,
    files: 10,
  },
  {
    title: "Onboarding Illustrations ",
    images: [
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    ],
    status: "low",
    userImages: [...images],
    comments: 14,
    files: 10,
  },
];

const inProgress = [
  {
    title: "Onboarding Illustrations ",
    images: [
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    ],
    status: "low",
    userImages: [...images],
    comments: 14,
    files: 10,
  },
  {
    title: "Moodboard",
    images: [
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    ],
    status: "low",
    userImages: [...images],
    comments: 14,
    files: 10,
  },
  {
    title: "Onboarding Illustrations ",
    images: [
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    ],
    status: "low",
    userImages: [...images],
    comments: 14,
    files: 10,
  },
];

const completed = [
  {
    title: "Mobile App Design",
    images: [
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    ],
    status: "done",
    userImages: [...images],
    comments: 12,
    files: 15,
  },
  {
    title: "Design System",
    description: "It just needs to adapt the UI from what you did before ",
    status: "done",
    userImages: [...images],
    comments: 12,
    files: 15,
  },
  {
    title: "Mobile App Design",
    images: [
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    ],
    status: "done",
    userImages: [...images],
    comments: 12,
    files: 15,
  },
];

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div>
        <HeaderBar />
        <div className="main-container">
          <div className="header">
            <div className="title">
              <div>
                <h1>Mobile App</h1>
              </div>
              <button>
                <i>
                  <FontAwesomeIcon icon={faPen} />
                </i>
              </button>
              <button>
                <i>
                  <FontAwesomeIcon icon={faLink} />
                </i>
              </button>
            </div>
            <div className="users">
              <div>
                <i>
                  <FontAwesomeIcon icon={faPlusSquare} />
                </i>
                Invite
              </div>
              <div className="user-imgs">
                {images.map((image, index) => (
                  <Fragment key={index}>
                    {index < 4 && (
                      <div>
                        <img src={image} alt="user" />
                      </div>
                    )}
                    {index === 4 && (
                      <div className="flex-center">+{images.length - 4}</div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="filter">
            <div>
              <button>
                <i>
                  <FontAwesomeIcon icon={faFilter} />
                </i>
                Filter
                <i>
                  <FontAwesomeIcon icon={faChevronDown} />
                </i>
              </button>
              <button>
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                Today
                <i>
                  <FontAwesomeIcon icon={faChevronDown} />
                </i>
              </button>
            </div>
            <div>
              <button>
                <i>
                  <FontAwesomeIcon icon={faUsers} />
                </i>
                Share
              </button>
              <span className="devider"></span>
              <button className="active">
                <i>
                  <FontAwesomeIcon icon={faList} />
                </i>
              </button>
              <button>
                <i>
                  <FontAwesomeIcon icon={faList} />
                </i>
              </button>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="column-header">
                <div>
                  <i className="dot">
                    <FontAwesomeIcon icon={faCircle} />
                  </i>
                  <div>To Do</div>
                  <span>{todos.length}</span>
                </div>
                <div>
                  <i>
                    <FontAwesomeIcon icon={faPlusSquare} />
                  </i>
                </div>
              </div>
              <div className="card-container">
                {todos.map((todo, index) => (
                  <Card {...todo} />
                ))}
              </div>
            </div>
            <div className="column">
              <div className="column-header">
                <div>
                  <i className="dot">
                    <FontAwesomeIcon icon={faCircle} />
                  </i>
                  <div>On Progress</div>
                  <span>{inProgress.length}</span>
                </div>
              </div>
              <div className="card-container">
                {inProgress.map((todo, index) => (
                  <Card {...todo} />
                ))}
              </div>
            </div>
            <div className="column">
              <div className="column-header">
                <div>
                  <i className="dot">
                    <FontAwesomeIcon icon={faCircle} />
                  </i>
                  <div>Done</div>
                  <span>{completed.length}</span>
                </div>
              </div>
              <div className="card-container">
                {completed.map((todo, index) => (
                  <Card {...todo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
