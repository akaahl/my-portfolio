import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import pfa1 from "../assets/pfa-1.jpg";
import pfa2 from "../assets/pfa-2.jpg";
import pfa3 from "../assets/pfa-3.jpg";
import aec1 from "../assets/aec-1.jpg";
import aec2 from "../assets/aec-2.jpg";
import aec3 from "../assets/aec-3.jpg";
import ia1 from "../assets/ia-1-light.jpg";
import ia2 from "../assets/ia-2.jpg";
import ia3 from "../assets/ia-3.jpg";
import ProductFeedback from "../components/ProductFeedback";
import Audiophile from "../components/Audiophile";
import Invoice from "../components/Invoice";

const Portfolio = ({ setModal, portfolio }) => {
  const wrapperVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
  };

  const innerVariants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
    exit: {
      scale: 0.7,
      opacity: 0,
      transition: {
        type: "spring",
      },
    },
  };

  const imgVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.9,
        type: "spring",
      },
    },
  };

  const closeModal = (e) => {
    e.preventDefault();
    setModal(false);
    document.body.style.overflowY = "auto";
  };
  return createPortal(
    <StyledWrapper
      onClick={closeModal}
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      portforlio={portfolio}
    >
      <motion.div
        className="portfolio-wrapper"
        onClick={(e) => e.stopPropagation()}
        variants={innerVariants}
      >
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <div className={portfolio === "two" ? "img-grid two" : "img-grid"}>
          <motion.img
            src={portfolio === "one" ? pfa1 : portfolio === "two" ? aec1 : ia1}
            alt={
              portfolio === "one"
                ? "pfa1"
                : portfolio === "two"
                ? "aec1"
                : "ia1"
            }
            className={portfolio === "two" ? "one portfolio-2" : "one"}
            layoutId={
              portfolio === "one"
                ? "pfa-one"
                : portfolio === "two"
                ? "aec-one"
                : "ia-one"
            }
          />
          <motion.img
            src={portfolio === "one" ? pfa2 : portfolio === "two" ? aec2 : ia2}
            alt={
              portfolio === "one"
                ? "pfa2"
                : portfolio === "two"
                ? "aec2"
                : "ia2"
            }
            className={portfolio === "two" ? "two portfolio-2" : "two"}
            variants={imgVariants}
          />
          <motion.img
            src={portfolio === "one" ? pfa3 : portfolio === "two" ? aec3 : ia3}
            alt={
              portfolio === "one"
                ? "pfa3"
                : portfolio === "two"
                ? "aec3"
                : "ia3"
            }
            className={portfolio === "two" ? "three portfolio-2" : "three"}
            variants={imgVariants}
          />
        </div>

        {portfolio === "one" ? (
          <ProductFeedback />
        ) : portfolio === "two" ? (
          <Audiophile />
        ) : (
          <Invoice />
        )}

        <button className="close-btn" onClick={closeModal}>
          Close
        </button>
      </motion.div>
    </StyledWrapper>,
    document.getElementById("portal")
  );
};

export default Portfolio;

const StyledWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;

  place-items: center;
  overflow-y: auto;
  padding: 100px;

  .portfolio-wrapper {
    position: relative;
    width: 80%;
    background-color: #1a1a1a;
    border: 1px solid #333333;
    border-radius: 10px;
    padding: 30px;

    .close-btn {
      margin: 40px auto 0 auto;
      display: block;
      padding: 10px 20px;
      background-color: lightcyan;
      cursor: pointer;
      font-weight: 900;
      border-radius: 5px;
      border: none;
      color: #1a1a1a;
    }

    .close-modal {
      position: absolute;
      top: -13px;
      right: -13px;
      padding: 10px 12px;
      border-radius: 100%;
      font-weight: 700;
      background-color: #1a1a1a;
      color: whitesmoke;
      border: 1px solid whitesmoke;
      cursor: pointer;
    }

    .img-grid {
      width: 100%;
      display: grid;
      grid-template-areas:
        "three one"
        "two one";
      grid-gap: 10px;

      &.two {
        grid-template-areas:
          "one three"
          "one two";
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        &.one {
          grid-area: one;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;

          &.portfolio-2 {
            border: 1px solid #333333;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
        }

        &.two {
          grid-area: two;
          border-bottom-left-radius: 5px;

          &.portfolio-2 {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 5px;
          }
        }

        &.three {
          grid-area: three;
          border-top-left-radius: 5px;

          &.portfolio-2 {
            border-top-left-radius: 0;
            border-top-right-radius: 5px;
          }
        }
      }
    }

    h2 {
      margin-top: 40px;
      font-size: 35px;
      font-weight: 700;
      text-align: center;
      color: #ffffff;
    }

    p {
      margin-top: 20px;
      font-size: 18px;
      color: lightgray;
      line-height: 1.3;
      letter-spacing: 1px;
    }

    .links {
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        margin: 0 20px;
        padding: 12px 20px;
        border-radius: 5px;
        transition: all 0.1s ease-in-out;

        &.github {
          background-color: #373b53;
          color: lightgray;
        }

        &.demo {
          background-color: lightcoral;
          color: #1a1a1a;
        }

        &:hover {
          transform: translate(-7px, -7px);
          box-shadow: 7px 7px 0 whitesmoke;
        }

        &:active {
          transform: translate(0, 0);
          box-shadow: none;
        }
      }
    }

    h4 {
      margin-top: 40px;
      font-size: 30px;
      color: #ffffff;
    }

    .stacks-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, 150px);
      margin-top: 40px;
      grid-gap: 25px;

      span {
        color: lightgray;
        font-size: 18px;
      }
    }

    .learned {
      p {
        margin-top: 20px;
        font-size: 18px;
        color: lightgray;
        line-height: 1.3;
        letter-spacing: 1px;
      }

      ul {
        margin-top: 30px;
        padding-left: 20px;

        li {
          color: lightgray;

          &:not(:first-child) {
            margin-top: 40px;
          }

          h5 {
            font-size: 20px;
            font-weight: 600;
            color: #ffffff;
          }

          p {
            margin-top: 20px;
            line-height: 1.3;
            letter-spacing: 1px;
            font-size: 16px;
          }

          img {
            display: block;
            margin-top: 20px;
            object-fit: cover;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .portfolio-wrapper {
      width: 100%;

      .learned {
        ul {
          li {
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 100px 50px;

    .portfolio-wrapper {
      h2 {
        font-size: 30px;
      }

      p {
        font-size: 16px;
      }

      h4 {
        font-size: 25px;
      }

      .stacks-wrapper {
        span {
          font-size: 16px;
        }
      }

      .learned {
        p {
          font-size: 16px;

          ul {
            li {
              h5 {
                font-size: 18px;
              }

              p {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    padding: 100px 30px;
    .portfolio-wrapper {
      padding: 15px;
      .close-modal {
        top: -25px;
        right: -16px;
      }

      .close-btn {
        margin: 40px auto 30px;
      }

      .img-grid {
        display: flex;
        flex-direction: column;

        img {
          border-radius: 0 !important;
        }
      }

      .links {
        a {
          padding: 10px 15px;
          margin: 0;

          &.demo {
            margin-left: 20px;
          }
        }
      }

      .stacks-wrapper {
        display: flex;
        flex-direction: column;

        span {
          text-align: center;
        }
      }

      .learned {
        ul {
          padding-left: 10px;
        }
      }
    }
  }

  @media (min-width: 2000px) {
    .portfolio-wrapper {
      .close-modal {
        top: -36px;
        right: -36px;
        padding: 20px 24px;
        font-size: 30px;
      }

      .close-btn {
        padding: 20px 30px;
        font-size: 30px;
        margin: 100px auto 20px auto;
        border-radius: 8px;
      }

      h2 {
        font-size: 80px;
      }

      p {
        font-size: 40px;
      }

      h4 {
        font-size: 60px;
        margin-top: 80px;
      }

      .links {
        margin: 80px 0;
        a {
          padding: 25px 40px;
          font-size: 35px;
          border-radius: 8px;
        }
      }

      .stacks-wrapper {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 60px;

        span {
          font-size: 40px;
        }
      }

      .learned {
        p {
          font-size: 40px;
        }
        ul {
          margin-top: 60px;
          li {
            &:not(:first-child) {
              margin-top: 60px;
            }
            h5,
            p,
            img {
              margin-top: 40px;
            }

            h5 {
              font-size: 45px;
            }

            p {
              font-size: 35px;
            }

            img {
              width: 70%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 2560px) {
    .portfolio-wrapper {
      padding: 60px 60px 50px 60px;

      h2 {
        font-size: 90px;
      }

      p {
        font-size: 50px;
      }

      h4 {
        font-size: 70px;
        margin-top: 80px;
      }

      .links {
        a {
          padding: 35px 40px;
          font-size: 40px;
        }
      }

      .stacks-wrapper {
        span {
          font-size: 50px;
        }
      }

      .learned {
        p {
          font-size: 50px;
        }

        ul {
          margin-top: 80px;
          li {
            &:not(:first-child) {
              margin-top: 80px;
            }

            h5,
            p,
            img {
              margin-top: 60px;
            }

            h5 {
              font-size: 55px;
            }

            p {
              font-size: 45px;
            }

            img {
              width: 90%;
            }
          }
        }
      }
    }
  }
`;
