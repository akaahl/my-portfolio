import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useHistory } from "react-router-dom";
import { ReactComponent as InstagramIcon } from "../assets/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";
import { ReactComponent as EmailIcon } from "../assets/icon-email.svg";
import { ReactComponent as GithubIcon } from "../assets/icon-github-home.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icon-linkedin.svg";

const Anime = () => {
  const [textOne, setTextOne] = useState(true);
  const [textTwo, setTextTwo] = useState(true);
  const [wrapper, setWrapper] = useState(true);
  const [textColor, setTextColor] = useState(false);
  const history = useHistory();
  const textOneRef = useRef();
  const textTwoRef = useRef();
  const textThreeRef = useRef();

  const wrapperVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
  };

  const verticalReveal = (first) => ({
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "spring",
        delay: first ? 0.5 : 1,
      },
    },
  });

  const genVariants = (type) => ({
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      y: type === "one" ? "-102%" : "102%",
      transition: {
        duration: 1,
        type: "easeIn",
      },
    },
  });

  const genIntroVariants = (order) => ({
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: order === "first" ? 5 : 5.5,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  });

  const circleVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: {
        delay: 4,
        duration: 2,
        type: "spring",
      },
    },
  };

  const liVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        delay: 6,
      },
    },
  };

  const hover = { x: -8, y: -8, boxShadow: "8px 8px 0 whitesmoke" };
  const click = {
    x: 1,
    y: 1,
    boxShadow: 0,
    transition: { duration: 0.2, type: "spring" },
  };

  const socialReveal = (delayEffect) => ({
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delayEffect + 6.5,
        duration: 1,
        type: "spring",
      },
    },
    exit: {
      transition: {
        delay: 2,
      },
    },
  });

  const socialHover = {
    y: -10,
  };

  const transitionHandler = () => {
    textOneRef.current.style.transition = "none";
    textTwoRef.current.style.transition = "none";
    textThreeRef.current.style.transition = "none";
  };

  useEffect(() => {
    setTimeout(() => {
      setWrapper(false);
    }, 2000);

    setTimeout(() => {
      setTextColor(true);
    }, 2500);

    setTimeout(() => {
      setTextOne(false);
      setTextTwo(false);
    }, 3000);
  }, []);

  return (
    <StyledAnime
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AnimatePresence>
        {wrapper && (
          <motion.div
            className="wrapper-one"
            variants={genVariants("one")}
            initial="initial"
            animate="animate"
            exit="exit"
            key="wrapper-one"
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {wrapper && (
          <motion.div
            className="wrapper-two"
            variants={genVariants("two")}
            initial="initial"
            animate="animate"
            exit="exit"
            key="wrapper-two"
          ></motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={textOne ? "text-wrapper" : "text-wrapper anim"}
        exit={{
          opacity: 0,
          x: -150,
          y: -200,
          rotate: -90,
          transition: { duration: 0.7 },
        }}
        ref={textOneRef}
      >
        <motion.h2
          variants={verticalReveal(true)}
          style={{
            color: textColor ? "lightgoldenrodyellow" : "#1a1a1a",
          }}
        >
          Hi.
        </motion.h2>
      </motion.div>

      <motion.div
        className={textTwo ? "text-wrapper-two" : "text-wrapper-two anim"}
        ref={textTwoRef}
        exit={{
          opacity: 0,
          x: -200,
          y: 150,
          rotate: -120,
          transition: { duration: 0.7 },
        }}
      >
        <motion.h2
          variants={verticalReveal(false)}
          style={{
            color: textColor ? "lightgoldenrodyellow" : "#1a1a1a",
          }}
        >
          I am
        </motion.h2>
      </motion.div>

      <motion.div
        className={textTwo ? "text-wrapper-three" : "text-wrapper-three anim"}
        ref={textThreeRef}
        exit={{
          opacity: 0,
          x: 150,
          y: 150,
          rotate: 125,
          transition: { duration: 0.7 },
        }}
      >
        <motion.h2
          variants={verticalReveal(false)}
          style={{
            color: textColor ? "lightgoldenrodyellow" : "#1a1a1a",
          }}
        >
          A.K.Afiq
        </motion.h2>
      </motion.div>

      <motion.div className="intro-wrapper" exit={{ opacity: 0 }}>
        <motion.h4 className="intro" variants={genIntroVariants("first")}>
          A Front-End Developer.
        </motion.h4>

        <motion.h4 className="intro" variants={genIntroVariants("second")}>
          Mainly working with React JS.
        </motion.h4>
      </motion.div>

      <motion.div
        className="circle-background"
        variants={circleVariants}
        exit={{ y: -700, opacity: 0, transition: { duration: 0.7 } }}
      ></motion.div>

      <ul className="about-projects">
        <motion.li variants={liVariants} exit={{ opacity: 0 }}>
          <motion.button
            whileTap={click}
            whileHover={hover}
            onClick={() => {
              transitionHandler();
              history.push("/about-me");
            }}
          >
            About Me
          </motion.button>
        </motion.li>

        <motion.li variants={liVariants} exit={{ opacity: 0 }}>
          <motion.button
            whileTap={click}
            whileHover={hover}
            onClick={() => {
              transitionHandler();
              history.push("/my-works");
            }}
          >
            My Projects
          </motion.button>
        </motion.li>
      </ul>

      <ul className="social-links">
        <motion.li variants={socialReveal(0.2)} exit={{ opacity: 0 }}>
          <motion.a
            whileHover={socialHover}
            href="https://www.linkedin.com/in/a-k-afiq-bb9729227/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </motion.a>
        </motion.li>

        <motion.li variants={socialReveal(0.5)} exit={{ opacity: 0 }}>
          <motion.a
            whileHover={socialHover}
            href="https://twitter.com/akaahl1"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </motion.a>
        </motion.li>

        <motion.li variants={socialReveal(0.8)} exit={{ opacity: 0 }}>
          <motion.a
            whileHover={socialHover}
            href="https://www.instagram.com/a.k.a.a.h.l/"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon />
          </motion.a>
        </motion.li>

        <motion.li variants={socialReveal(1.1)} exit={{ opacity: 0 }}>
          <motion.a
            whileHover={socialHover}
            href="https://github.com/akaahl"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </motion.a>
        </motion.li>

        <motion.li variants={socialReveal(1.4)} exit={{ opacity: 0 }}>
          <motion.a
            whileHover={socialHover}
            href="mailto:a.k.afiq@live.com"
            rel="noreferrer"
            target="_blank"
          >
            <EmailIcon />
          </motion.a>
        </motion.li>
      </ul>
    </StyledAnime>
  );
};

export default Anime;

const StyledAnime = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: #1a1a1a;
  overflow-x: hidden;

  .wrapper-one,
  .wrapper-two {
    position: fixed;
    height: 100vh;
    width: 50vw;
    background-color: lightgoldenrodyellow;
    border: none;
    outline: none;
  }

  .wrapper-one {
    left: 0;
  }
  .wrapper-two {
    right: 0;
  }

  .text-wrapper,
  .text-wrapper-two,
  .text-wrapper-three {
    overflow: hidden;
    position: absolute;
    /* display: inline-block; */
    z-index: 100;

    h2 {
      display: inline-block;
      font-size: 50px;
      font-weight: 700;
      /* color: #000000; */
      z-index: 100;
    }
  }

  .text-wrapper {
    top: 35%;
    left: 42%;

    &.anim {
      top: 21%;
      left: 7%;
      transition: all 0.7s ease-in-out;

      h2 {
        font-size: 100px;
        transition: all 0.7s ease-in-out;
        /* color: lightgoldenrodyellow; */
      }
    }
  }

  .text-wrapper-two {
    top: 47%;
    left: 42%;

    &.anim {
      top: 40%;
      left: 7%;
      transition: all 0.7s ease-in-out;

      h2 {
        font-size: 100px;
        transition: all 0.7s ease-in-out;
        /* color: lightgoldenrodyellow; */
      }
    }
  }

  .text-wrapper-three {
    top: 47%;
    left: 50.5%;

    &.anim {
      top: 60%;
      left: 7%;
      transition: 0.7s ease-in-out;

      h2 {
        font-size: 100px;
        transition: all 0.7s ease-in-out;
        /* color: lightgoldenrodyellow; */
      }
    }
  }

  .intro-wrapper {
    overflow: hidden;
    display: inline-block;
    position: absolute;
    top: 15%;
    right: 13%;
    z-index: 10;
    h4 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

      color: #1a1a1a;
      font-size: 35px;
    }
  }

  .circle-background {
    position: fixed;
    height: 1100px;
    width: 1100px;
    top: -60%;
    right: -17%;
    border-radius: 100%;
    background-color: #ecafb9;
    z-index: 1;
  }

  .about-projects {
    list-style: none;
    position: absolute;
    top: 43%;
    right: 20%;
    z-index: 100;
    display: flex;
    align-items: center;

    li {
      &:not(:first-child) {
        margin-left: 40px;
      }

      button {
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        background: none;
        border: none;
        padding: 15px 25px;
        border-radius: 4px;
        background-color: #1a1a1a;
        color: lightgoldenrodyellow;
      }
    }
  }

  .connect {
    position: absolute;
    top: 55%;
    right: 30%;
    z-index: 100;
    color: #666666;
    font-size: 30px;
    font-weight: 600;
  }

  .social-links {
    list-style: none;
    display: flex;
    z-index: 100;
    position: absolute;
    top: 65%;
    right: 15%;

    li {
      &:not(:first-child) {
        margin-left: 35px;
      }

      a {
        text-decoration: none;
        display: grid;
        place-items: center;
        height: 60px;
        width: 60px;
        border-radius: 5px;

        svg {
          transform: scale(2.5);
          path,
          polygon {
            fill: #1a1a1a;
          }
        }

        &:hover {
          svg {
            path,
            polygon {
              fill: #444444;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1440px) and (min-height: 814px) {
    .text-wrapper,
    .text-wrapper-two,
    .text-wrapper-three {
      h2 {
        font-size: 70px;
      }
      &.anim {
        h2 {
          font-size: 150px;
        }
      }
    }

    .text-wrapper {
      &.anim {
        top: 15%;
        left: 5%;
      }
    }

    .text-wrapper-two {
      &.anim {
        top: 37%;
        left: 5%;
      }
    }

    .text-wrapper-three {
      left: 53%;
      &.anim {
        left: 5%;
      }
    }

    .intro-wrapper {
      right: 8%;
      h4 {
        font-size: 40px;
      }
    }

    .circle-background {
      top: -38%;
      right: -19%;
    }

    .about-projects {
      right: 15%;
      top: 39%;

      li {
        button {
          padding: 20px 30px;
          font-size: 18px;
        }
      }
    }

    .social-links {
      right: 7%;
      top: 60%;

      li {
        a {
          height: 80px;
          width: 80px;

          svg {
            transform: scale(3);
          }
        }
      }
    }
  }

  @media (max-width: 1280px) and (min-height: 800px) {
    .text-wrapper,
    .text-wrapper-two,
    .text-wrapper-three {
      &.anim {
        left: 5%;

        h2 {
          font-size: 110px;
        }
      }
    }

    .text-wrapper {
      &.anim {
        top: 27%;
      }
    }

    .text-wrapper-two {
      &.anim {
        top: 43%;
      }
    }

    .text-wrapper-three {
      &.anim {
        top: 59%;
      }
    }

    .intro-wrapper {
      right: 7%;
      h4 {
        font-size: 40px;
      }
    }

    .about-projects {
      top: 39%;
      right: 13%;
      li {
        button {
          font-size: 20px;
          padding: 25px 30px;
        }
      }
    }
    .circle-background {
      top: -42%;
      right: -22%;
    }

    .social-links {
      top: 60%;
      right: 7%;
      li {
        a {
          height: 80px;
          width: 80px;

          svg {
            transform: scale(3);
          }
        }
      }
    }
  }

  @media (max-width: 1024px) and (min-height: 570px) {
    .text-wrapper {
      &.anim {
        top: 15%;
        left: 7%;
      }
    }

    .text-wrapper-two {
      &.anim {
        top: 37%;
        left: 7%;
      }
    }

    .text-wrapper-three {
      left: 53%;

      &.anim {
        left: 7%;
      }
    }

    .intro-wrapper {
      right: 9%;
      h4 {
        font-size: 25px;
      }
    }

    .circle-background {
      height: 800px;
      width: 800px;
      top: -40%;
      right: -21%;
    }

    .about-projects {
      right: 12%;
      top: 39%;

      li {
        button {
          font-size: 14px;
          padding: 12px 22px;
        }
      }
    }

    .social-links {
      top: 60%;
      right: 5%;

      li {
        &:not(:first-child) {
          margin-left: 30px;
        }
      }
    }
  }

  @media (max-width: 1024px) and (min-height: 600px) {
    .text-wrapper,
    .text-wrapper-two,
    .text-wrapper-three {
      &.anim {
        left: 5%;
      }
    }

    .text-wrapper {
      &.anim {
        top: 22%;
      }
    }

    .text-wrapper-two {
      &.anim {
        top: 39%;
      }
    }

    .text-wrapper-three {
      &.anim {
        top: 57%;
      }
    }

    .intro-wrapper {
      right: 7%;
      h4 {
        font-size: 30px;
      }
    }

    .about-projects {
      right: 9%;
      top: 40%;
      li {
        button {
          padding: 15px 25px;
          font-size: 16px;
        }
      }
    }

    .social-links {
      right: 5.5%;
      top: 60%;

      li {
        &:not(:first-child) {
          margin-left: 30px;
        }
        a {
          height: 50px;
          width: 50px;

          svg {
            transform: scale(2.5);
          }
        }
      }
    }
  }

  @media (max-width: 1024px) and (min-height: 760px) {
    .text-wrapper {
      &.anim {
        top: 28%;
      }
    }

    .text-wrapper-two {
      &.anim {
        top: 43%;
      }
    }

    .text-wrapper-three {
      &.anim {
        top: 58%;
      }
    }

    .circle-background {
      height: 900px;
      width: 900px;
      top: -30%;
      right: -28%;
    }

    .intro-wrapper {
      top: 20%;
      right: 6%;

      h4 {
        font-size: 30px;
      }
    }

    .about-projects {
      top: 42%;
    }

    .social-links {
      li {
        a {
          height: 60px;
          width: 60px;

          svg {
            transform: scale(2.5);
          }
        }
      }
    }
  }

  @media (max-width: 1024px) and (min-height: 1366px) {
    .text-wrapper,
    .text-wrapper-two,
    .text-wrapper-three {
      h2 {
        font-size: 100px;
      }
      &.anim {
        h2 {
          font-size: 120px;
        }
      }
    }

    .text-wrapper {
      left: 20%;
      &.anim {
        top: 55%;
        left: 5%;
      }
    }

    .text-wrapper-two {
      left: 20%;
      &.anim {
        top: 66%;
        left: 5%;
      }
    }

    .text-wrapper-three {
      left: 42%;
      &.anim {
        top: 77%;
        left: 5%;
      }
    }

    .intro-wrapper {
      top: 14%;
      h4 {
        font-size: 50px;
      }
    }

    .circle-background {
      height: 1500px;
      width: 1500px;
      top: -30%;
      right: -60%;
    }

    .about-projects {
      top: 32%;
      right: 13%;
      li {
        button {
          font-size: 30px;
          padding: 30px 40px;
        }
      }
    }

    .social-links {
      top: 49%;
      right: 7% !important;

      li {
        &:not(:first-child) {
          margin-left: 38px;
        }
        a {
          height: 90px;
          width: 90px;

          svg {
            transform: scale(4);
          }
        }
      }
    }
  }

  @media (max-width: 768px) and (min-height: 570px) {
    .text-wrapper {
      left: 38%;

      &.anim {
        top: 12%;
        left: 5%;

        h2 {
          font-size: 12vw;
        }
      }
    }

    .text-wrapper-two {
      left: 38%;

      &.anim {
        top: 12%;
        left: 22%;
        h2 {
          font-size: 12vw;
        }
      }
    }

    .text-wrapper-three {
      &.anim {
        top: 12%;
        left: 49%;
        h2 {
          font-size: 12vw;
        }
      }
    }

    .intro-wrapper {
      right: 25%;
      top: 48%;

      h4 {
        text-align: center;
      }
    }

    .circle-background {
      right: -2.5%;
      top: 35%;
    }

    .about-projects {
      top: 69%;
      right: 30%;
    }

    .social-links {
      top: 84%;
      right: 23%;

      li {
        &:not(:first-child) {
          margin-left: 35px;
        }
      }
    }
  }

  @media (max-width: 768px) and (min-height: 1024px) {
    .text-wrapper,
    .text-wrapper-two {
      left: 25%;
    }

    .text-wrapper-three {
      left: 45%;
    }
    .intro-wrapper {
      right: 18%;
      h4 {
        font-size: 35px;
      }
    }
    .circle-background {
      height: 1100px;
      width: 1100px;
      right: -22%;
    }

    .about-projects {
      top: 65%;
      right: 27%;
      li {
        button {
          font-size: 20px;
          padding: 20px 30px;
        }
      }
    }

    .social-links {
      top: 80%;
      right: 11.5% !important;

      li {
        margin: 0 10px;
        a {
          height: 80px;
          width: 80px;

          svg {
            transform: scale(3);
          }
        }
      }
    }
  }

  @media (max-width: 540px) and (min-height: 720px) {
    .text-wrapper {
      left: 15%;
    }

    .text-wrapper-two {
      left: 15%;
    }

    .text-wrapper-three {
      left: 36%;
    }
    .circle-background {
      right: -25%;
    }

    .intro-wrapper {
      right: 10%;
    }

    .about-projects {
      top: 67%;
      right: 23%;

      li {
        button {
          padding: 15px 25px;
          font-size: 16px;
        }
      }
    }

    .social-links {
      right: 13%;
      li {
        &:not(:first-child) {
          margin-left: 38px;
        }
      }
    }
  }

  @media (max-width: 425px) and (min-height: 570px) {
    .text-wrapper {
      left: 15%;
      &.anim {
        left: 4%;
      }
    }

    .text-wrapper-two {
      left: 15%;
      &.anim {
        left: 21%;
      }
    }

    .text-wrapper-three {
      left: 40%;
      &.anim {
        left: 48%;
      }
    }

    .circle-background {
      top: 30%;
      right: -42%;
    }

    .intro-wrapper {
      top: 45%;
      right: 8%;

      h4 {
        font-size: 6vw;
      }
    }

    .about-projects {
      top: 65%;
      right: 19%;
    }

    .social-links {
      top: 82%;
      right: 5.5%;

      li {
        &:not(:first-child) {
          margin-left: 20px;
        }
        a {
          height: 60px;
          width: 60px;

          svg {
            transform: scale(2.1);
          }
        }
      }
    }
  }

  @media (max-width: 414px) and (min-height: 736px) {
    .text-wrapper {
      left: 10%;
    }

    .text-wrapper-two {
      left: 10%;
    }

    .text-wrapper-three {
      left: 38%;
    }

    .circle-background {
      right: -46%;
    }

    .about-projects {
      right: 15%;
    }

    .social-links {
      right: 4.5%;
      li {
        &:not(:first-child) {
          margin-left: 20px;
        }
      }
    }
  }

  @media (max-width: 411px) and (min-height: 731px) {
    .text-wrapper {
      left: 15%;
    }

    .text-wrapper-two {
      left: 15%;
    }

    .text-wrapper-three {
      left: 42%;
    }
    .circle-background {
      right: -46%;
    }

    .about-projects {
      right: 15%;
    }

    .social-links {
      right: 4.5%;
    }
  }

  @media (max-width: 411px) and (min-height: 823px) {
    .text-wrapper,
    .text-wrapper-two,
    .text-wrapper-three {
      h2 {
        font-size: 45px;
      }
    }

    .circle-background {
      right: -58%;
    }

    .about-projects {
      right: 14%;
    }

    .social-links {
      li {
        a {
          height: 60px;
          width: 60px;

          svg {
            transform: scale(2.2);
          }
        }
      }
    }
  }

  @media (max-width: 375px) and (min-height: 570px) {
    .text-wrapper {
      left: 8%;
    }

    .text-wrapper-two {
      left: 8%;
    }

    .text-wrapper-three {
      left: 38%;
    }
    .circle-background {
      right: -55%;
    }

    .about-projects {
      right: 14%;
    }

    .social-links {
      right: 10%;
      li {
        a {
          height: 45px;
          width: 45px;

          svg {
            transform: scale(1.8);
          }
        }
      }
    }
  }

  @media (max-width: 375px) and (min-height: 667px) {
    .text-wrapper {
      left: 10%;
    }

    .text-wrapper-two {
      left: 10%;
    }

    .text-wrapper-three {
      left: 40%;
    }
    .about-projects {
      right: 11%;
    }

    .social-links {
      right: 10% !important;
    }
  }

  @media (max-width: 375px) and (min-height: 812px) {
    .intro-wrapper {
      top: 42%;
      right: 2%;
      h4 {
        font-size: 7vw;
      }
    }

    .circle-background {
      right: -70%;
    }

    .about-projects {
      right: 10%;
    }
  }

  @media (max-width: 360px) and (min-height: 640px) {
    .text-wrapper,
    .text-wrapper-two,
    .text-wrapper-three {
      h2 {
        font-size: 40px;
      }
    }

    .text-wrapper {
      left: 15%;
    }

    .text-wrapper-two {
      left: 15%;
    }

    .text-wrapper-three {
      left: 40%;
    }
    .circle-background {
      right: -60%;
    }

    .about-projects {
      right: 13%;

      li {
        button {
          padding: 12px 22px;
          font-size: 14px;
        }
      }
    }

    .social-links {
      right: 4.5%;
      li {
        &:not(:first-child) {
          margin-left: 20px;
        }
        a {
          height: 50px;
          width: 50px;

          svg {
            transform: scale(2);
          }
        }
      }
    }
  }

  @media (max-width: 320px) and (min-height: 568px) {
    .text-wrapper,
    .text-wrapper-two,
    .text-wrapper-three {
      h2 {
        font-size: 35px;
      }
    }
    .text-wrapper {
      left: 15%;
    }

    .text-wrapper-two {
      left: 15%;
    }

    .text-wrapper-three {
      left: 40%;
    }
    .text-wrapper {
      &.anim {
        top: 12%;
        left: 5%;

        h2 {
          font-size: 12vw;
        }
      }
    }

    .text-wrapper-two {
      &.anim {
        top: 12%;
        left: 22%;
        h2 {
          font-size: 12vw;
        }
      }
    }

    .text-wrapper-three {
      &.anim {
        top: 12%;
        left: 49%;
        h2 {
          font-size: 12vw;
        }
      }
    }

    .circle-background {
      top: 30%;
      right: -120%;
    }

    .intro-wrapper {
      top: 40%;
      right: 8%;

      h4 {
        font-size: 6vw;
        text-align: center;
      }
    }

    .about-projects {
      top: 60%;
      right: 13%;

      li {
        button {
          padding: 10px 15px;
          font-size: 14px;
        }
      }
    }

    .social-links {
      top: 78%;
      right: 6.5% !important;

      li {
        &:not(:first-child) {
          margin-left: 20px;
        }
        a {
          height: 40px;
          width: 40px;

          svg {
            transform: scale(1.5);
          }
        }
      }
    }
  }

  @media (max-width: 320px) and (min-height: 570px) {
    .circle-background {
      right: -75% !important;
    }

    .intro-wrapper {
      top: 42%;
      right: 2%;
      h4 {
        font-size: 7vw;
      }
    }

    .about-projects {
      right: 12%;
      top: 66%;

      li {
        button {
          padding: 10px 15px;
          font-size: 14px;
        }
      }
    }

    .social-links {
      top: 82%;
    }
  }

  @media (max-width: 280px) and (min-height: 653px) {
    .text-wrapper,
    .text-wrapper-two,
    .text-wrapper-three {
      h2 {
        font-size: 35px;
      }
    }
    .text-wrapper {
      left: 10%;
    }

    .text-wrapper-two {
      left: 10%;
    }

    .text-wrapper-three {
      left: 40%;
    }
    .circle-background {
      right: -95% !important;
    }

    .intro-wrapper {
      top: 42%;
      right: 2%;

      h4 {
        font-size: 7vw;
      }
    }

    .about-projects {
      top: 63%;
      right: 7%;
    }

    .social-links {
      top: 80%;
      li {
        a {
          height: 33px;
          width: 33px;

          svg {
            transform: scale(1.5);
          }
        }
      }
    }
  }

  @media (min-width: 2000px) {
    .text-wrapper,
    .text-wrapper-two,
    .text-wrapper-three {
      h2 {
        font-size: 5.5vw !important;
      }

      &.anim {
        left: 5% !important;

        h2 {
          font-size: 11vw !important;
        }
      }
    }

    .text-wrapper {
      left: 39%;
    }

    .text-wrapper-two {
      left: 39%;
    }

    .text-wrapper-three {
      left: 51.5%;
    }

    .intro-wrapper {
      right: 5%;
      h4 {
        font-size: 60px;
      }
    }

    .circle-background {
      height: 1800px;
      width: 1800px;
      top: -38%;
      right: -32%;
    }

    .about-projects {
      top: 35%;
      right: 11%;
      li {
        button {
          font-size: 35px;
          padding: 35px 40px;
          border-radius: 8px;
        }
      }
    }

    .social-links {
      top: 54%;
      right: 3%;

      li {
        &:not(:first-child) {
          margin-left: 50px;
        }
        a {
          height: 120px;
          width: 120px;

          svg {
            transform: scale(5);
          }
        }
      }
    }
  }

  @media (min-width: 2560px) {
    .intro-wrapper {
      right: 7%;

      h4 {
        font-size: 70px;
      }
    }

    .about-projects {
      top: 39%;
      right: 11%;
      li {
        &:not(:first-child) {
          margin-left: 60px;
        }
        button {
          font-size: 40px;
          padding: 40px 45px;
        }
      }
    }

    .social-links {
      top: 60%;
      li {
        &:not(:first-child) {
          margin-left: 90px;
        }

        a {
          height: 140px;
          width: 140px;

          svg {
            transform: scale(6);
          }
        }
      }
    }

    .circle-background {
      height: 1900px;
      width: 1900px;
      top: -33%;
      right: -20%;
    }
  }
`;
