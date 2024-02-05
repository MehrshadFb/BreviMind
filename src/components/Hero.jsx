import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="brevimind_logo" className="w-14 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/MehrshadFb/BreviMind", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Grasp More, Read Less with <br className="max-md:hidden" />
        <span className="orange_gradient">BreviMind</span>
      </h1>
      <h2 className="desc">
        Leveraging AI, we quickly turn long articles into simple summaries,
        providing you with the essential information in seconds. It's an
        efficient way to grasp complex information without investing too much
        time.
      </h2>
    </header>
  );
};

export default Hero;
