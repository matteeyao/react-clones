import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "./axios";
import "./TinderCards.css";

function TinderCards() {
  const [profiles, setProfiles] = useState([
    {
      name: "Steve Jobs",
      imgUrl: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-startupgrind/events/steve-jobs.jpg"
    },
    {
      name: "Mark Zuckerberg",
      imgUrl: "https://pbs.twimg.com/profile_images/2271292852/Markszuckerberg.jpg"
    },    
  ]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setProfiles(req.data);
    }
    fetchData();
  }, []);

  console.log(profiles);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {profiles.map((profile) => (
          <TinderCard
            className="swipe"
            key={profile.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, profile.name)}
            onCardLeftScreen={() => outOfFrame(profile.name)}
          >
            <div
              style={{ backgroundImage: `url(${profile.imgUrl})` }}
              className="card">
              <h3>{profile.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
