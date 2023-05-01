import React from "react";
import aboutImage1 from "./components/images/about-img.jpg";
import aboutImage2 from "./components/images/about-img2.jpg";           
import sectionIcon from "./components/images/section-icon.png";
import { Link } from "react-router-dom";
import './aboutus.css';
import faqImage from "./components/images/faq-img.jpg";
import AccordionBox from "./AccordionBox";

import heartIcon1 from "./components/images/heart-icon1.png";
import heartIcon2 from "./components/images/heart-icon2.png";
import heartIcon3 from "./components/images/heart-icon3.png";
import heartIcon4 from "./components/images/heart-icon4.png";
import heartIcon5 from "./components/images/heart-icon5.png";
import heartIcon6 from "./components/images/heart-icon6.png";
import heartIcon7 from "./components/images/heart-icon7.png";
import heartIcon8 from "./components/images/heart-icon8.png";
import heartIcon9 from "./components/images/heart-icon9.png";
import heartIcon10 from "./components/images/heart-icon10.png";
import heartIcon11 from "./components/images/heart-icon11.png";



const AboutArea = () => {

const accordionData = [
    {
      title: "Make a difference in the life of a child",
      text:
        "Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper  vulputate vitae sodales commodo nisl. Nulla facilisi.  Pellentesque est metus. There are many variations of eration in some form.",
      status: true,
    },
    {
      title: "Let’s do the right thing now",
      text:
        "Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper  vulputate vitae sodales commodo nisl. Nulla facilisi.  Pellentesque est metus. There are many variations of eration in some form.",
      status: false,
    },
    {
      title: "Join your hand with us for a better life",
      text:
        "Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper  vulputate vitae sodales commodo nisl. Nulla facilisi.  Pellentesque est metus. There are many variations of eration in some form.",
      status: false,
    },
  ];
  return (
    <>
    <section className="about-area">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="about-large-img">
                          <img src="https://images.unsplash.com/photo-1544476301-66914d9e95aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
                      </div>
                  </div>
                  <div className="col-lg-5">
                      <div className="about-semi-img">
                          <img src="https://images.unsplash.com/photo-1509099927777-1b8a87bc3b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="about-heading">
                          <div className="section-heading">
                             
                              <h2 className="section__title">Discover About GiveHope</h2>
                              <p className="section__meta">learn about non profit agency</p>
                              <p className="section__desc">
                                  Tincidunt elit magnis nulla facilisis sagittis maecenas.
                                  Sapien nunced amet ultrices, dolores sit ipsum velit purus
                                  aliquet, massa fringilla leo orcium dolors sit amet elit
                                  magnis amet ultrices lorem ipsum is simply free text purusrfed
                                  aliquet. Lorem ipsum dolor sit amet, consectetuer adipiscing
                                  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                                  sociis natoque penatibus et magnis dis parturient montes,
                                  nascetur ridiculus. penatibus et magnis dis parturient montes,
                                  nascetur ridiculus.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="mixer-area mixer-area3 text-center">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-heading mixer-heading">
                             
                              <h2 className="section__title text__white">
                                  Our fingerprints on the lives we touch never fade
                              </h2>
                              <Link className="theme-btn" to="/donate">
                                  start donation
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
      </section>
      <section className="faq-area">
        <div className="container">
          <div className="row">
           <div className="col-lg-6">
            
            <div className="faq-img-box">
              <img src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion-container">
              {accordionData.map(({ title, text, status }, index) => (
                <AccordionBox
                  title={title}
                  text={text}
                  status={status}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="service-area text-center">
      <img src={heartIcon1} alt="" className="heart-icon heart-icon-1" />
      <img src={heartIcon2} alt="" className="heart-icon heart-icon-2" />
      <img src={heartIcon3} alt="" className="heart-icon heart-icon-3" />
      <img src={heartIcon4} alt="" className="heart-icon heart-icon-4" />
      <img src={heartIcon5} alt="" className="heart-icon heart-icon-5" />
      <img src={heartIcon6} alt="" className="heart-icon heart-icon-6" />
      <img src={heartIcon7} alt="" className="heart-icon heart-icon-7" />
      <img src={heartIcon8} alt="" className="heart-icon heart-icon-8" />
      <img src={heartIcon9} alt="" className="heart-icon heart-icon-9" />
      <img src={heartIcon10} alt="" className="heart-icon heart-icon-10" />
      <img src={heartIcon11} alt="" className="heart-icon heart-icon-11" />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading service-heading">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 className="section__title">
                We Believe that We can Save More Lifes with you
              </h2>
              <p className="section__meta">help us now</p>
            </div>
          </div>
        </div>
        <div className="row service-wrap">
          <div className="col">
            <div className="service-item service-item1">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-peace-1"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">hope</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item2">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-praying"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">prayers</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item3">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-peace"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">peace</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item4">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-heart"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">donation</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="button-shared">
              <a href="/donate" className="theme-btn">
                donate now
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
          </>
  );
};

export default AboutArea;
