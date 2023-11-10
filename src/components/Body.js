import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logics

            filteredResturants = listOfRestaurants.filter((res) => {
              return res.card.card.info.avgRating > 4;
            });
            setListOfRestaurants(filteredResturants);
            console.log(filteredResturants);
          }}
        >
          {" "}
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resturant) => (
          <ResturantCard
            key={resturant.card.card.info.id}
            resData={resturant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
