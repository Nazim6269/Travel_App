import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import video2 from "../../assets/video2.mp4";
import "./footer.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video muted loop autoPlay src={video2} type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>keep in tuoch</small>
            <h2>travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email or Adress"
              name=""
              id=""
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              send <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                travel
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque quas deserunt obcaecati sapiente iure suscipit?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">our agency</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                payment
              </li>
            </div>

            {/* Group Two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">partners</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                hostelworld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                tripadvior
              </li>
            </div>

            {/* Group Three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">last minute</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                japan
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                california
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                mexico
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                turkey
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>best travel website theme</small>
            <small>copyright reserved by nazim uddin 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
