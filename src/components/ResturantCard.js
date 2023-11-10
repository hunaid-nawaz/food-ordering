import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.card?.card?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Rs.{costForTwo / 100} for two</h4>
      <h4>{sla.deliveryTime} minuts</h4>
    </div>
  );
};

export default ResturantCard;
