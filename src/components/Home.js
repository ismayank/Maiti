import React, { useState,useEffect } from "react";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imageSrc from "../Images/Image1.jpg";
import imageSrc2 from "../Images/Image2.jpeg";
import imageSrc3 from "../Images/Image3.jpg";
import imageSrc4 from "../Images/init1.jpg";
import imageSrc5 from "../Images/init2.jpg";

import logo from "../Images/logo.jpg";

import image1_1 from "../Images/stan.png";
import image1_2 from "../Images/rv.png";
import image2_1 from "../Images/iis.jpg";
import image2_2 from "../Images/iit.jpg";
import image3_1 from "../Images/ram.jpg";
import image3_2 from "../Images/bits.jpg";

function Home() {

   


  const [message, setMessage] = useState("");

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image1Url: image1_1, image2Url: image1_2 },
    { id: 2, image1Url: image2_1, image2Url: image2_2 },
    { id: 3, image1Url: image3_1, image2Url: image3_2 },
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const content = [
    {
      text: "Youth-Led & Global",
      subtext:
        "We are a global youth-led Non-Profit Organization committed to tackling the pressing climate crisis through our innovative community-first approach.",
      image: imageSrc,
    },
    {
      text: "Tech Driven Action",
      subtext:
        "Powerful technology products, specifically cutting-edge news sites, that empower users to raise their voices and contribute to climate action.",
      image: imageSrc2,
    },
    {
      text: "Inclusivity through Translations",
      subtext:
        "Breaking down barriers through advanced artificial intelligence translations. Our content is accessible and readable in any language.",
      image: imageSrc3,
    },
  ];

  return (
    <div className="mar">
      <section id="home">
        <div className="centered">
          <p className="bold-green">
            The Voice Of Planet Earth in Every
            <br />
            Language!
          </p>
          <h2 className="below">Global youth-led Non-Profit Organization</h2>
          <div className="buttons">
            <button className="join-button">Join Us</button>
            <button className="portal-button1">Awareness Portal</button>
          </div>
          <p className="description">
            We are a Non-Profit Youth-Led Org fostering{" "}
            <span className="climate-action">Climate Action</span> by making
            information accessible in every language possible. 🌱
          </p>
        </div>
      </section>
      <div className="aboutpage">
        <section id="about">
          <h2 className="headabout">About Us</h2>

          {content.map((item, index) => {
            if (index % 2 === 1) {
              return (
                <div key={index} className="container-left">
                  <div className="textl">
                    <h2>{item.text}</h2>
                    <p>{item.subtext}</p>
                  </div>
                  <div className="imagel">
                    <img src={item.image} alt={`Image ${index + 1}`} />
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="container-right">
                  <div className="text">
                    <h2>{item.text}</h2>
                    <p>{item.subtext}</p>
                  </div>
                  <div className="image">
                    <img src={item.image} alt={`Image ${index + 1}`} />
                  </div>
                </div>
              );
            }
          })}

          <h2 className="init">Our Initiative</h2>
          <div className="box-container1">
            <div className="line"></div>
            <div className="content1">
              <div className="left1">
                <img src={imageSrc4} alt="Image 1" />
                <p1>Awareness Portal</p1>
                <p2>Climate Information in Every Language</p2>
                <a href="#">Learn More &gt;</a>
              </div>
              <div className="right1">
                <img src={imageSrc5} alt="Image 2" />
                <p1>GreenBit</p1>
                <p2>Compressing data, Expanding Futures</p2>
                <a href="#">Learn More &gt;</a>
              </div>
            </div>
          </div>
        </section>
        <button className="button2">More</button>
      </div>
      

      <section id="community">
        <div className="initial">
        <h2 className="init1">
          Our Community Members Come from ❤️</h2>

          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
    <div className="row no-gutters ">
    <div class="col-md-6">
      <img src={image1_1} class="d-block my-10 w-10" alt="image1"/>
      </div>
      <div class="col-md-6">
      <img src={image1_2} class="d-block w-100" alt="image1"/>
      </div>
      </div>
      
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
    <div className="row no-gutters">
    <div class="col-md-6">
    <img src={image2_1} class="d-block w-100" alt="image1"/>
    </div>
    <div class="col-md-6"><img src={image2_2} class="d-block w-100 rounded" alt="image1"/></div>
    </div>
      
      
    </div>
    <div class="carousel-item">
    <div className="row no-gutters">
    <div class="col-md-6">
    <img src={image3_1} class="d-block w-100" alt="image1"/>
    </div>
    <div class="col-md-6">
      <img src={image3_2} class="d-block w-100" alt="image1"/>
      </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<button className="button3">Join Us</button>
</div>
          
        
      </section>

      <section id="aware">
        <div className="awareness-portal">
          <div className="content">
            <div className="title">AWARENESS PORTAL</div>
            <div className="subtitle">
              We speak about important issues to address climate change.
            </div>
            <button className="portal-button2">Awareness Portal</button>
          </div>
        </div>
      </section>
      <section id="join us">
        <div className="awareness-portal1">
          <div className="content">
            <div className="title">Join Us</div>
            <div className="subtitle1">
              We cannot do this alone. We need your voice; your actions. Join us
              in our fight against the climate crisis. Sign up today and be part
              of the change.
            </div>
            <div className="button-group">
              <button className="portal-button3">Careers</button>
              <button className="portal-button4">Join Us</button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-header">
              <h1>CONTACT</h1>
              
            </div>
            <div className="contact-main">
              <div className="contact-form">
              <div className="contact-header">
              <p>
                Any doubts?
                <br />
                feel free to get in touch with us
              </p>
              </div>
                <div className="contact-input-group">
                
                  <input
                    type="text"
                    placeholder="Name"
                    className="contact-input"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="contact-input"
                  />
                </div>
                <div
                  className="contact-message"
                  contentEditable="true"
                  data-placeholder="Message"
                  onInput={(e) => setMessage(e.currentTarget.textContent)}
                ></div>
                <button className="contact-button">Send</button>
              </div>
              <div className="vertical-line"></div>
              <div className="contact-info">
                <h2>CONTACT US</h2>
                <ul>
                  <li>Mail</li>
                </ul>
                <h2>FOLLOW US</h2>
                <ul>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video"
      >
        <source src={require('../Images/birdvido.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
    <section className="main-content">
    
        <div className="main-left">
            <div className="sign">
            <button className="buttonl">Sign Up</button>
            </div>
        <img src={logo} alt="Maiti Labs" className="main-logo"/>

        <span className="logo-name1">Maiti Labs</span>
        
          <p>Join a diverse and passionate community, making a lasting impact on our planet. Together, let's raise awareness and accelerate climate action worldwide.</p>
          <button className="join-button1">Join Us</button>
        </div>
        <div className="main-right">
          <div className="company">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Awareness Portal</li>
              <li>GreenBit</li>
              <li>Team</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="resources">
            <h3>Resources</h3>
            <ul>
              <li>Blogs</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
