import {
  faCommentDots,
  faEllipsis,
  faFolderClosed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        {props.status === "high" && (
          <span className="status high-status">High</span>
        )}
        {props.status === "done" && (
          <span className="status completed-status">Completed</span>
        )}
        {props.status === "low" && (
          <span className="status low-status">Low</span>
        )}
        <i>
          <FontAwesomeIcon icon={faEllipsis} />
        </i>
      </div>
      <div>
        <div className="card-title">{props.title}</div>
        {props.description && (
          <div className="card-description">{props.description}</div>
        )}
        {props.images && (
          <div
            className={
              props.images.length > 1 ? "multiple card-images" : "card-images"
            }
          >
            {props.images.map(
              (image, index) =>
                index < 2 && <img key={index} src={image} alt="image" />
            )}
          </div>
        )}
      </div>
      <div className="card-footer">
        <div className="user-images">
          {props.userImages.map(
            (image, index) =>
              index < 3 && (
                <div key={index}>
                  <img src={image} alt="user" />
                </div>
              )
          )}
        </div>
        <div className="flex" style={{ gap: "10px" }}>
          <div>
            <i>
              <FontAwesomeIcon icon={faCommentDots} />
            </i>{" "}
            {props.comments} Comments
          </div>
          <div>
            <i>
              <FontAwesomeIcon icon={faFolderClosed} />
            </i>{" "}
            {props.files} Files
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
