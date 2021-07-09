import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from './firebase';
import "./TinderCards.css";

function TinderCards() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const unsubscribe = database.collection("profiles").onSnapshot(snapshot => (
        setProfiles(snapshot.docs.map(doc => doc.data()))
      ));

      return () => {
        /* This is the cleanup, detaching the listener if the dependency [] 
        was instead [profiles] */
        unsubscribe();
      }

      // const req = await axios.get("/tinder/cards");
      // setProfiles(req.data);
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
