import React from "react";
import { manropeFont } from "@/utils/fonts";
export default function All() {
  const amenitiesLeft = [
    "Entrance Plaza",
    "Club Drop-off",
    "Entrance Plaza Commercial",
    "Waterbody",
    "Feature Wall",
    "Tower A Drop-off",
    "Driveway",
    "Pathway",
    "Parking",
    "Banquet Lawn",
    "Tower B Drop-off",
    "To/From Basement Ramp",
    "Tower C Drop-off",
    "Reflexology",
    "Mini Golf",
    "Sculpture Court",
    "Open Gym",
    "Deck",
    "Wooden Deck",
  ];

  const amenitiesRight = [
    "Main Pool",
    "Kids Pool",
    "Shallow Pool",
    "Party Deck",
    "Party Pool",
    "Lawn",
    "OAT (Open Air Theatre)",
    "Skywalk",
    "Tree Court",
    "Skating Rink",
    "Kid's Play Area",
    "Tod-Lot",
    "Badminton Court",
    "Pickleball Court",
    "Cricket Pitch",
    "Multi-purpose Court",
    "Sit-out",
    "Jogging Track",
  ];

  return (
    <div className="bg-secondary h-full relative text-primary py-16 px-6 lg:px-24 z-100 mt-[400px]">
     
      <h1 className="text-[56px] lg:text-[72px] font-boskaMedium text-primary mb-12">
        All Amenities
      </h1>


      <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-[20px] leading-relaxed ${manropeFont.className}`}>
        <ol className={`list-decimal list-inside space-y-2 ${manropeFont.className}`}>
          {amenitiesLeft.map((item, index) => (
            <li key={index} className={`text-[#F5ECDC] font-light ${manropeFont.className}`}>
              {item}
            </li>
          ))}
        </ol>

        <ol
          className={`list-decimal list-inside space-y-2 ${manropeFont.className}`}
          start={amenitiesLeft.length + 1}
        >
          {amenitiesRight.map((item, index) => (
            <li key={index} className={`text-[#F5ECDC] font-light ${manropeFont.className}`}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
