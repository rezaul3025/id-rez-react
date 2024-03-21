import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [tipOfTheDay, setTipOfTheDay] = useState("Loading...");

  const URL = "https://api.adviceslip.com/advice";

  const getTipOfTheDay = () => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setTipOfTheDay(data.slip.advice);
      })
      .catch(function (error) {
        console.log("Error while fetching tip: " + error);
      });

    return true;
  };

  useEffect(() => {
    getTipOfTheDay();
  }, []);

  return (
    <div className="space-y-4 max-w-4xl mx-auto text-center pt-20">
      <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
        <p className="text-4xl italic font-medium leading-relaxed text-gray-500 dark:text-white">
          "{tipOfTheDay}"
        </p>
      </blockquote>
    </div>
  );
};

export default Home;
