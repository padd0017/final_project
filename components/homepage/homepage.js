"use client";
import { useEffect, useState } from "react";
import Button from "./Button"

const Homepage = () => {
  // const [state, setState]= useState("");
  // const [distance, setDistance]= useState("")
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  return (
    <div>
      <form method="GET" action="/crap" className="searchForm">
        <div>
          <label>Search for some crap</label>
          <input
            type="text"
            name="keyword"
            placeholder="search...."
            minLength="3"
          ></input>

          <label>Select a distance</label>
          <select name="distance">
            <option value="" disabled>
              Select distance
            </option>

            <option value="10000">10 km</option>
            <option value="30000">30 km</option>
            <option value="50000">50 km</option>
          </select>

          <label>Please provide long</label>
          <input type="decimal" name="long" placeholder="78.9629"></input>

          <label>Please provide lat</label>
          <input type="decimal" name="lat" placeholder="20.5937"></input>

          <button type="submit">Submit</button>
        </div>
      </form>
      <Button/>
    </div>
  );
};

export default Homepage;
