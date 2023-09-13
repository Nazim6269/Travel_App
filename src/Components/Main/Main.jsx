import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import "./main.css";

const data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Machu Picchu stands 2,430 m above sea-level, in the middle of a tropical mountain forest, in an extraordinarily beautiful setting. It was probably the most amazing urban creation of the Inca Empire at its height; its giant walls, terraces and ramps seem as if they have been cut naturally in the continuous rock escarpments. The natural setting, on the eastern slopes of the Andes, encompasses the upper Amazon basin with its rich diversity of flora and fauna.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Machu Picchu stands 2,430 m above sea-level, in the middle of a tropical mountain forest, in an extraordinarily beautiful setting. It was probably the most amazing urban creation of the Inca Empire at its height; its giant walls, terraces and ramps seem as if they have been cut naturally in the continuous rock escarpments. The natural setting, on the eastern slopes of the Andes, encompasses the upper Amazon basin with its rich diversity of flora and fauna.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the worlds largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc. It also holds great scientific interest as the habitat of species such as the dugong (sea cow) and the large green turtle, which are threatened with extinction.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Cappadocia is a beautiful region in central Turkey famous for its fairytale scenery, cave dwellings, remarkable rock formations, and, of course, the hundreds of hot air balloons that soar in the sky during sunrise each morning. There is also so much awesome hiking in Cappadocia, that it will take you at least a week to explore all of the diverse hiking trails in the region. I spent ten days in Cappadocia adventuring on all of the hiking trails, exploring the ancient valleys and of course, being mesmerized by the hot air balloons. I’ve created this list of all the top things to do in Cappadocia to help you explore this beautiful region. ",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Founded by the Spanish in the early 16th century, Guanajuato became the world's leading silver-extraction centre in the 18th century. This past can be seen in its 'subterranean streets' and the 'Boca del Inferno', a mineshaft that plunges a breathtaking 600 m. The town's fine Baroque and neoclassical buildings, resulting from the prosperity of the mines, have influenced buildings throughout central Mexico. The churches of La Compañía and La Valenciana are considered to be among the most beautiful examples of Baroque architecture in Central and South America. Guanajuato was also witness to events which changed the history of the country.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Tucked between Genoa and Pisa, along a mountainous and seductive six-mile stretch of the Italian Riviera, lie the Cinque Terre — five (cinque) traffic-free villages carving a good life out of difficult terrain. Each village fills a ravine with a lazy hive of human activity. Calloused locals and sunburned travelers enjoy the area's unique mix of Italian culture and nature. There isn't a Fiat or museum in sight — just sun, sea, sand (well, pebbles), wine, and pure, unadulterated Italy. While the region is now well-discovered and can get jam-packed, I've never seen happier, more relaxed tourists.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Combodia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Angkor is one of the most important archaeological sites in South-East Asia. Stretching over some 400 km2, including forested area, Angkor Archaeological Park contains the magnificent remains of the different capitals of the Khmer Empire, from the 9th to the 15th century. They include the famous Temple of Angkor Wat and, at Angkor Thom, the Bayon Temple with its countless sculptural decorations. UNESCO has set up a wide-ranging programme to safeguard this symbolic site and its surroundings.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh. It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD, with the mosque, the guest house and the main gateway on the south, the outer courtyard and its cloisters were added subsequently and completed in 1653 AD. The existence of several historical and Quaranic inscriptions in Arabic script have facilitated setting the chronology of Taj Mahal. ",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Fujinomiya",
    location: "Japan",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Fujinomiya is between Tokyo and Kyoto and is the closest city to the majestic Mount Fuji. Fujinomiya city is a short drive from Shin-Fuji station, which takes just over an hour from Tokyo station on the bullet train. Use your JR rail pass to visit for a day or even stay the night at the foot of Japan’s most enduring icon!",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      {/* Section Title */}
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          most visited destinations
        </h3>
      </div>

      {/* section Content */}
      <div className="secContent grid">
        {data.map(
          ({ id, imgSrc, grade, destTitle, description, fees, location }) => {
            return (
              // single Destination
              <div key={id} data-aos="fade-up" className="singleDestination">
                {/* image div */}
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                {/* Card information */}
                <div className="cardInfo">
                  <h4 className="desTitle">{destTitle}</h4>
                  <div className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </div>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />{" "}
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
