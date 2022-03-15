import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }
    fetchData();
  }, []);

  console.log(people);
  const swiped = (nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outofFrame = (name) => {
    console.log(name + " left the screen");
  };
  return (
    <div className="tinderCards">
      {/* callback function */}
      <div className="tinderCards_cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outofFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
              >
                <h2>{person.name}</h2>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
