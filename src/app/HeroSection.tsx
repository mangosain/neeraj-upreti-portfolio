"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [backgroundColor, setBackgroundColor] = useState("#FF6F61");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const colors = ["rgb(52, 152, 219)", "#6B5B95", "#88B04B", "#F7CAC9"];
    let colorIndex = 0;

    const colorInterval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setBackgroundColor(colors[colorIndex]);
    }, 2500);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const stars: { x: number; y: number; radius: number; speedY: number }[] =
      [];
    const starCount = 100;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speedY: Math.random() * 2 + 1,
      });
    }

    const animateStars = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speedY;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <div className={styles.heroSection} style={{ backgroundColor }}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
      <div className={styles.content}>
        <h1 className={styles.heroHeading}>Neeraj Upreti</h1>
        <p className={styles.heroText}>
          Passionate about changing the world with technology.
        </p>
        <div className={styles.socialLinks}>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Image
              src="https://www.svgrepo.com/show/3885/facebook.svg"
              alt="Facebook"
              width={0}
              height={0}
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Image
              src="https://www.svgrepo.com/show/3142/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Image
              src="https://www.svgrepo.com/show/500918/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
        </div>
        <button className={styles.heroButton} onClick={scrollToAbout}>
          More about me
        </button>
      </div>
    </div>
  );
}
