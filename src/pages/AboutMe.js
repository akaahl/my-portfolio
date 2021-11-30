import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const AboutMe = () => {
  const [frames, setFrames] = useState(true);
  const [h1Fade, setH1Fade] = useState(false);
  const [myStory, setMyStory] = useState(false);
  const [buttonTransition, setButtonTransition] = useState(false);
  const history = useHistory();

  const aboutVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const framesContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const innerFrames = {
    initial: {
      opacity: 1,
    },
    animate: {
      x: "400%",
      transition: {
        type: "spring",
        duration: 4.5,
      },
    },
  };

  const h1Variants = {
    initial: {
      opacity: 0,
      scale: 1.1,
    },
    animate: {
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: {
        delay: 1.5,
        duration: 1.2,
        type: "spring",
      },
    },
  };

  const myStoryVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      zIndex: 100,
      transition: {
        duration: 2,
        staggerChildren: 0.4,
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
      },
    },
  };

  const buttonVariants = {
    initial: {
      x: -20,
      y: -20,
      scale: 0,
    },
    animate: {
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay: 6,
        type: "spring",
        duration: 0.9,
      },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setH1Fade(true);
    }, 2700);

    setTimeout(() => {
      setMyStory(true);
    }, 2800);

    setTimeout(() => {
      setFrames(false);
    }, 3000);
  }, []);

  return (
    <StyledAbout
      variants={aboutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {frames && (
        <motion.div className="frames-container" variants={framesContainer}>
          <StyledFrame variants={innerFrames}></StyledFrame>
          <StyledFrameTwo variants={innerFrames}></StyledFrameTwo>
          <StyledFrameThree variants={innerFrames}></StyledFrameThree>
          <StyledFrameFour variants={innerFrames}></StyledFrameFour>
          <StyledFrameFive variants={innerFrames}></StyledFrameFive>
        </motion.div>
      )}
      <motion.h1 variants={h1Variants} className={h1Fade ? "fade" : ""}>
        Story of Mine
      </motion.h1>

      <motion.div
        className={buttonTransition ? "back-btn transition" : "back-btn"}
        variants={buttonVariants}
        whileHover={() => setButtonTransition(true)}
        onClick={() => history.goBack()}
      >
        {/* <span>Back</span> */}
      </motion.div>

      {myStory && (
        <motion.div className="my-story" variants={myStoryVariants}>
          <motion.p variants={childVariants}>
            I am a front-end web developer, hailing from a beautiful little
            country in Southeast Asia called Brunei Darussalam.
          </motion.p>
          <motion.p variants={childVariants}>
            My journey into the web development space began when I stumbled upon
            a tutorial on YouTube on how to build a simple porfolio website.
          </motion.p>
          <motion.p variants={childVariants}>
            Being a curious person by nature, I wanted to find out how building
            a website actually works, behind all the abstractions and whatnot.
          </motion.p>
          <motion.p variants={childVariants}>
            Coincidentally, I've got some spare time and nothing to lose. If
            anything, I've got even more to gain.
          </motion.p>
          <motion.p variants={childVariants}>
            As if being guided by some sort of divine powers, my fingers
            immediately glided and tapped onto the keyboards meticuluously. All
            in accordance of the video's instructions.
          </motion.p>
          <motion.p variants={childVariants} className="side-note">
            *i was just being dramatic at this point, but you get the idea :)
          </motion.p>
          <motion.p variants={childVariants}>
            I thought the end result looked really beautiful and elegant. And
            surprisingly, I actually found coding very enjoyable and satisfying!
          </motion.p>
          <motion.p variants={childVariants}>
            I was instantaneously hooked and decided to pursue it as a career of
            choice.
          </motion.p>
          <motion.p variants={childVariants}>
            And so here I am, building web apps with a current focus on the
            front-end, whilst aiming to be a full-stack engineer in due time.
          </motion.p>
          <motion.p variants={childVariants}>
            Throughout my journey, I have learned many things, failed many
            times, spent countless of hours debugging, and gradually honing my
            skills.
          </motion.p>
          <motion.p variants={childVariants}>
            On top of that, I am constantly learning new things and adding them
            to my repertoires.
          </motion.p>
          <motion.p variants={childVariants}>
            This website features a highlight on my best (and also difficult!)
            projects thus far.
          </motion.p>

          <motion.p variants={childVariants}>
            I will continue adding them in the future as I learn more.
          </motion.p>
          <motion.p variants={childVariants}>
            With that said, hopefully you find these projects of mine worthwhile
            of your time.
          </motion.p>

          <motion.p variants={childVariants}>
            Hop over to my LinkedIn, Twitter, etc (links are on the home page).
            Let's chat.
          </motion.p>

          <motion.p variants={childVariants}>Talk to you soon!</motion.p>

          <motion.button
            variants={childVariants}
            onClick={() => history.goBack()}
          >
            Home
          </motion.button>
        </motion.div>
      )}
    </StyledAbout>
  );
};

export default AboutMe;

const StyledAbout = styled(motion.div)`
  background-color: hsl(0, 0%, 10.196078431372548%);
  min-height: 115vh;
  width: 100%;

  .frames-container {
    position: fixed;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transform: rotate(45deg) translateY(-300px) translateX(-300%);
  }

  h1 {
    position: fixed;
    color: #555555;
    top: -30px;
    left: 95px;
    font-weight: 900;
    font-size: 250px;
    text-transform: uppercase;
    display: inline-block;
    z-index: 1;
    font-family: "Secular One", sans-serif;

    &.fade {
      color: #444444;
      opacity: 0.3 !important;
      transition: all 0.9s linear;
    }
  }

  .back-btn {
    position: fixed;
    height: 200px;
    width: 200px;
    top: -90px;
    left: -90px;
    border: 0;
    border-radius: 100%;
    display: grid;
    place-items: center;
    background-color: lightcoral;
    z-index: 100;
    cursor: pointer;

    &.transition {
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      background-color: lightgoldenrodyellow;
      transform: translate(10px, 10px) scale(1.1) !important ;
    }

    span {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .my-story {
    margin: 0 auto;
    padding: 90px 0;
    z-index: 100;
    position: sticky;
    width: 80%;

    p {
      color: #ffffff;
      font-weight: 900;
      font-size: 30px;
      z-index: 100;

      &:not(:first-child) {
        margin-top: 40px;
      }

      &.side-note {
        font-size: 20px;
        color: lightcoral;
      }
    }

    button {
      font-size: 16px;
      font-weight: 900;
      cursor: pointer;
      background: none;
      border: none;
      padding: 10px 25px;
      border-radius: 4px;
      background-color: lightcoral;
      cursor: pointer;
      z-index: 1000;
      color: #1a1a1a;
      display: none;
      margin: 60px auto 0 auto;
      transition: all 0.08s ease-in-out;

      &:active {
        transform: scale(0.85);
        background-color: lightgoldenrodyellow;
        color: lightgoldenrodyellow;
      }
    }
  }

  @media (max-width: 1440px) and (min-height: 814px) {
    h1 {
      font-size: 280px;
      top: 10px;
      left: 60px;
    }

    .my-story {
      padding: 140px 0;
    }
  }

  @media (max-width: 1280px) and (min-height: 800px) {
    h1 {
      top: 60px;
      left: 40px;
    }
  }

  @media (max-width: 1024px) and (min-height: 570px) {
    h1 {
      font-size: 190px;
      top: 15px;
      left: 60px;
    }

    .back-btn {
      height: 180px;
      width: 180px;
    }

    .my-story {
      padding: 100px 0;

      p {
        font-size: 25px;
      }
    }
  }

  @media (max-width: 1024px) and (min-height: 600px) {
    h1 {
      top: 30px;
    }
    .my-story {
      padding: 100px 0;
    }
  }

  @media (max-width: 1024px) and (min-height: 760px) {
    h1 {
      top: 110px;
    }
  }

  @media (max-width: 1024px) and (min-height: 1366px) {
    .frames-container {
      transform: rotate(45deg) translateY(-100px) translateX(-350%);
    }
    h1 {
      top: 150px !important;
      font-size: 250px !important;
    }

    .my-story {
      padding: 200px 0 !important;
    }
  }

  @media (max-width: 768px) and (min-height: 570px) {
    .frames-container {
      transform: rotate(45deg) translateY(-135px) translateX(-300%);
    }

    h1 {
      font-size: 145px;
      top: 80px;
      left: 40px;
    }

    .my-story {
      width: 75%;
      padding: 100px 0;

      p {
        font-size: 20px;

        &.side-note {
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 768px) and (min-height: 1024px) {
    .frames-container {
      transform: rotate(45deg) translateY(-100px) translateX(-350%);
    }
    h1 {
      font-size: 180px;
      left: 40px;
      top: 120px !important;
    }
  }

  @media (max-width: 540px) and (min-height: 720px) {
    .back-btn {
      display: none;
    }

    h1 {
      font-size: 130px;
      top: 80px;
      left: 20px;
    }
    .my-story {
      padding: 80px 0;

      button {
        display: block;
      }
    }
  }

  @media (max-width: 425px) and (min-height: 570px) {
    .frames-container {
      transform: rotate(45deg) translateY(-70px) translateX(-300%);
    }

    h1 {
      font-size: 100px;
      top: 80px;
      left: 25px;
    }

    .back-btn {
      display: none;
      top: -100px;
      left: -100px;
    }

    .my-story {
      padding: 60px 40px;
      width: 100%;

      p {
        font-size: 18px;

        &.side-note {
          font-size: 14px;
        }
      }

      button {
        display: block;
      }
    }
  }

  @media (max-width: 414px) and (min-height: 736px) {
    h1 {
      font-size: 100px !important;
      left: 15px !important;
      top: 150px;
    }
    .my-story {
      padding: 60px 40px !important;
    }
  }

  @media (max-width: 411px) and (min-height: 731px) {
    h1 {
      font-size: 100px;
      top: 150px;
      left: 15px;
    }

    .my-story {
      padding: 60px 40px !important;
    }
  }

  @media (max-width: 411px) and (min-height: 823px) {
    .frames-container {
      transform: rotate(45deg) translateY(-20px) translateX(-300%);
    }

    h1 {
      top: 190px !important;
    }
  }

  @media (max-width: 375px) and (min-height: 570px) {
    .frames-container {
      transform: rotate(45deg) translateY(-20px) translateX(-300%);
    }

    h1 {
      top: 90px;
      font-size: 90px;
      left: 15px;
    }
  }

  @media (max-width: 375px) and (min-height: 667px) {
    .my-story {
      padding: 60px 40px !important;
    }

    h1 {
      top: 140px;
    }
  }

  @media (max-width: 375px) and (min-height: 812px) {
    .frames-container {
      transform: rotate(45deg) translateY(-20px) translateX(-300%);
    }
    h1 {
      font-size: 90px !important;
      top: 210px !important;
      left: 15px !important;
    }
  }

  @media (max-width: 360px) and (min-height: 640px) {
    h1 {
      left: 10px;
      top: 130px !important;
    }

    .my-story {
      padding: 60px 40px !important;
    }
  }

  @media (max-width: 320px) and (min-height: 568px) {
    .frames-container {
      transform: rotate(45deg) translateY(-20px) translateX(-300%);
    }
    .back-btn {
      display: none !important;
    }

    h1 {
      font-size: 80px !important;
      top: 100px !important;
      left: 5px !important;
    }
    .my-story {
      padding: 60px 10px !important;
      p {
        font-size: 18px !important;

        &.side-note {
          font-size: 14px !important;
        }
      }
      button {
        display: block;
      }
    }
  }

  @media (max-width: 320px) and (min-height: 570px) {
    h1 {
      font-size: 80px;
      top: 110px !important;
      left: 10px;
    }
  }

  @media (max-width: 280px) and (min-height: 653px) {
    h1 {
      font-size: 70px !important;
      left: 5px !important;
      top: 180px !important;
    }
    .my-story {
      padding: 60px 20px;
      p {
        font-size: 16px;

        &.side-note {
          font-size: 12px;
        }
      }
    }
  }

  @media (min-width: 2000px) {
    h1 {
      font-size: 20vw;
      top: 100px;
      left: 40px;
    }

    .back-btn {
      height: 400px;
      width: 400px;
      top: -200px;
      left: -200px;
    }

    .my-story {
      padding: 180px 0;
      p {
        font-size: 60px;

        &.side-note {
          font-size: 40px;
        }
      }
    }
  }

  @media (min-width: 2560px) {
    h1 {
      top: -10px;
    }

    .frames-container {
      transform: rotate(45deg) translateY(-500px) translateX(-350%);
    }
  }
`;

const StyledFrame = styled(motion.div)`
  /* position: fixed;
  top: 0; */
  height: 25vw;
  width: 150vw;
  background-color: pink;
  z-index: 100;
  /* transform: rotate(15deg); */

  @media (max-width: 425px) {
    height: 35vw;
  }

  @media (max-width: 425px) {
    height: 40vw;
  }

  @media (max-width: 375px) {
    height: 45vw;
    width: 200vw;
  }

  @media (min-height: 720px) {
    height: 50vw;
  }

  @media (max-width: 1440px) and (min-height: 814px) {
    height: 25vw;
  }

  @media (max-width: 1280px) and (min-height: 800px) {
    height: 30vw;
  }

  @media (max-width: 1024px) and (max-height: 760px) {
    height: 28vw;
  }

  @media (max-width: 1024px) and (min-height: 1366px) {
    height: 35vw !important;
  }

  @media (max-width: 768px) and (min-height: 1024px) {
    height: 39vw !important;
  }

  @media (max-width: 540px) and (max-width: 720px) {
    height: 40vw !important;
  }
  @media (max-width: 425px) and (min-height: 570px) {
    height: 40vw !important;
  }

  @media (max-width: 414px) and (min-height: 736px) {
    height: 42vw !important;
  }

  @media (max-width: 411px) and (min-height: 823px) {
    height: 50vw !important;
  }

  @media (max-width: 411px) and (min-height: 731px) {
    height: 45vw !important;
  }
  @media (max-width: 375px) and (min-height: 812px) {
    height: 50vw !important;
  }

  @media (max-width: 320px) and (min-height: 568px) {
    height: 45vw !important;
  }

  @media (max-width: 280px) and (min-height: 563px) {
    height: 55vw !important;
  }

  @media (min-width: 2000px) {
    height: 30vw;
  }

  @media (min-width: 2560px) {
    height: 25vw;
  }
`;

const StyledFrameTwo = styled(StyledFrame)`
  background-color: lightslategrey;
`;

const StyledFrameThree = styled(StyledFrame)`
  background-color: lightskyblue;
`;

const StyledFrameFour = styled(StyledFrame)`
  background-color: lightyellow;
`;

const StyledFrameFive = styled(StyledFrame)`
  background-color: lightsteelblue;
`;
