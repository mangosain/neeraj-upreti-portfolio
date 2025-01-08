"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Leadership.css";

export default function Leadership() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://mohd-shahid-iqbal.github.io/myportfolio/static/media/6.6bf107575b900f042920.png",
    "https://mohd-shahid-iqbal.github.io/myportfolio/static/media/add.94dd9c5a447d0133abf6.png",
    "https://mohd-shahid-iqbal.github.io/myportfolio/static/media/edit.a603168f5424b63fef8c.png",
    "https://mohd-shahid-iqbal.github.io/myportfolio/static/media/1.9fd43a85f309e6549581.png",
    "https://mohd-shahid-iqbal.github.io/myportfolio/static/media/2.8fa9312d841c7ac97ed9.png",
    "https://mohd-shahid-iqbal.github.io/myportfolio/static/media/3.cda1b0f737dfa5074f91.png",
    "https://mohd-shahid-iqbal.github.io/myportfolio/static/media/4.68935427aa7818e9443d.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="leadership-container">
      <div className="content">
        <div className="description">
          <h1>Leadership</h1>
          <p>
            As a React developer with leadership experience, I bring technical
            expertise, project management skills, and strong communication
            abilities to the table. I have a proven track record of building
            large-scale applications, optimizing code for performance, and
            implementing best practices. Additionally, I have experience leading
            teams and projects, creating and maintaining project plans, managing
            timelines and budgets, and ensuring timely delivery of high-quality
            work. I excel at communicating effectively with team members,
            stakeholders, and clients, both verbally and in writing, and am a
            skilled listener who can provide clear and constructive feedback. I
            am also passionate about mentoring and training other developers to
            help them develop their skills and achieve their goals. With my
            ability to solve complex technical problems and think creatively, I
            am always up-to-date with the latest developments in React and
            related technologies, and am able to innovate and inspire a
            positive, collaborative work environment.
          </p>
        </div>
        <div className="slider">
          <button className="prev" onClick={prevSlide}>
            &#8592;
          </button>
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={50}
            height={50}
          />
          <button className="next" onClick={nextSlide}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
