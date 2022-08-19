import profileImage from "../../assets/profile.png";
import "./card.css";
const Card = () => {
  return (
    <>
      <div className="card">
        <div className="cardContent">
          <div className="image">
            <img src={profileImage} />
          </div>
          <div className="details">
            <span className="price">12,000</span>
            <span className="title">Table Fan</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
