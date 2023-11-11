import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.949756&lng=77.6997624&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();

    const filteredData = json.data.cards.filter((d) => {
      return d?.card?.card?.info;
    });
    setListOfRestaurants(filteredData);
  };

  if (listOfRestaurants.length === 0) {
    return <h1>Loading................</h1>;
  }

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
