import React from "react";
import { useState } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState("");
  return (
    <div>
      <h1 className="text-4xl mb-4">AboutUs</h1>

      <div className="bg-white m-2 p-2">
        <h1 className="text-2xl">Our mission</h1>
        {isVisible === "Our mission" ? (
          <>
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              consectetur porro praesentium, facilis ea in accusantium sequi
              accusamus? Eveniet quasi cupiditate officia alias pariatur commodi
              dolores mollitia provident, rerum deleniti? Esse, voluptatum
              tempore? Quam eius ea rem dolor nam eum qui fugiat ducimus tenetur
              unde debitis commodi magni harum rerum quis laboriosam dignissimos
              illum temporibus omnis error, aliquam nihil! Distinctio.
            </p>
            <button
              onClick={() => setIsVisible(false)}
              className="bg-gray-400 m-2 px-2 py-1 rounded"
            >
              Hide
            </button>
          </>
        ) : (
          <>
            {" "}
            
            <button
              onClick={() => setIsVisible("Our mission")}
              className="bg-gray-400 m-2 px-2 py-1 rounded"
            >
              Show
            </button>
          </>
        )}
      </div>

      <div className="bg-white m-2 p-2">
        <h1 className="text-2xl">Careers</h1>
        {isVisible === "Careers" ? (
          <>
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              consectetur porro praesentium, facilis ea in accusantium sequi
              accusamus? Eveniet quasi cupiditate officia alias pariatur commodi
              dolores mollitia provident, rerum deleniti? Esse, voluptatum
              tempore? Quam eius ea rem dolor nam eum qui fugiat ducimus tenetur
              unde debitis commodi magni harum rerum quis laboriosam dignissimos
              illum temporibus omnis error, aliquam nihil! Distinctio.
            </p>
            <button
              onClick={() => setIsVisible(false)}
              className="bg-gray-400 m-2 px-2 py-1 rounded"
            >
              Hide
            </button>
          </>
        ) : (
          <>
            {" "}
            
            <button
              onClick={() => setIsVisible("Careers")}
              className="bg-gray-400 m-2 px-2 py-1 rounded"
            >
              Show
            </button>
          </>
        )}
      </div>

      <div className="bg-white m-2 p-2">
        <h1 className="text-2xl">Contact Information</h1>
        {isVisible === "Contact Information" ? (
          <>
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              consectetur porro praesentium, facilis ea in accusantium sequi
              accusamus? Eveniet quasi cupiditate officia alias pariatur commodi
              dolores mollitia provident, rerum deleniti? Esse, voluptatum
              tempore? Quam eius ea rem dolor nam eum qui fugiat ducimus tenetur
              unde debitis commodi magni harum rerum quis laboriosam dignissimos
              illum temporibus omnis error, aliquam nihil! Distinctio.
            </p>
            <button
              onClick={() => setIsVisible(false)}
              className="bg-gray-400 m-2 px-2 py-1 rounded"
            >
              Hide
            </button>
          </>
        ) : (
          <>
            {" "}
            
            <button
              onClick={() => setIsVisible("Contact Information")}
              className="bg-gray-400 m-2 px-2 py-1 rounded"
            >
              Show
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
