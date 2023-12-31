import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { SiTripadvisor } from "react-icons/si";
import { TbApps } from "react-icons/tb";
import video from "../../assets/video.mp4";
import "./home.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home container">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            our packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            search your holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">search your destination:</label>
            <div className="input flex">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Name here...."
              />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">select your date:</label>
            <div className="input flex">
              <input type="date" placeholder="Enter Name here...." />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>more filters</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
