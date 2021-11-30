import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import pfa1 from "../assets/pfa-1.jpg";
import aec1 from "../assets/aec-1.jpg";
import ia1 from "../assets/ia-1-light.jpg";
import Portfolio from "../components/Portfolio";

const MyWorks = () => {
  const [modal, setModal] = useState(false);
  const [portfolio, setPortfolio] = useState(null);
  const letters = "works".split("");

  const h1Anim = {
    initial: {
      //   scale: 0,
      x: -150,
      opacity: 0,
    },
    animate: {
      //   scale: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.2,
        type: "spring",
        // ease: "linear",
      },
    },
  };

  const spanAnim = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.7,
      },
    },
  };

  const lineAnim = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      //   backgroundColor: [
      //     "lightskyblue",
      //     "lightgray",
      //     "lightcoral",
      //   ],
      transition: {
        duration: 1.4,
        type: "spring",
      },
    },
  };

  const projectContainerAnim = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 2.5,
        staggerChildren: 0.7,
        when: "beforeChildren",
      },
    },
  };

  const projectAnim = {
    initial: {
      //   x: "-100%",
      scale: 0.95,
      //   rotate: -180,
      opacity: 0,
    },
    animate: {
      //   x: 0,
      scale: 1,
      //   rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        // type: "spring",
        // ease: "easeIn",
      },
    },
  };

  const circleContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.2,
        // duration: 0.6,
      },
    },
  };

  const circleBg = {
    initial: {
      // opacity: 0,
      scale: 0,
    },
    animate: {
      // opacity: 0,
      scale: 0,
    },
    exit: {
      // opacity: 1,
      // height: "200vh",
      // width: "200vw",

      scale: "1500%",
      transition: {
        duration: 0.8,
      },
    },
  };

  const handleModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <StyledWrapper modal={modal}>
      <AnimateSharedLayout type="crossfade">
        <motion.div
          className="circle-container"
          variants={circleContainer}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="circle-background one"
            variants={circleBg}
          ></motion.div>
          <motion.div
            className="circle-background two"
            variants={circleBg}
          ></motion.div>
          <motion.div
            className="circle-background three"
            variants={circleBg}
          ></motion.div>
        </motion.div>

        <motion.h1 variants={h1Anim} initial="initial" animate="animate">
          M<motion.span variants={spanAnim}>y</motion.span>{" "}
          {letters &&
            letters.map((l, i) => (
              <motion.span key={i} variants={spanAnim}>
                {l}
              </motion.span>
            ))}
          <motion.div className="line" variants={lineAnim}></motion.div>
        </motion.h1>

        <motion.div
          className="projects-container"
          variants={projectContainerAnim}
          initial="initial"
          animate="animate"
        >
          <motion.div className="project pfa" variants={projectAnim}>
            <motion.img src={pfa1} alt="pfa" layoutId="pfa-one" />

            <div className="details">
              <h2>Product Feedback App</h2>
              <p>
                A multi-page app with full CRUD functionalities for displaying,
                adding, editing and deleting feedbacks along with filter
                functionality.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleModal();
                  setPortfolio("one");
                }}
              >
                Read More
              </button>
            </div>
          </motion.div>

          <motion.div className="project aec" variants={projectAnim}>
            <motion.img src={aec1} alt="aec" layoutId="aec-one" />
            <div className="details">
              <h2>Audiophile Ecommerce Site</h2>
              <p>
                An e-commerce site showcasing a variety of premium audio
                products, such as headsets, speakers and earphone.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleModal();
                  setPortfolio("two");
                }}
              >
                Read More
              </button>
            </div>
          </motion.div>

          <motion.div className="project ia" variants={projectAnim}>
            <motion.img src={ia1} alt="ia" layoutId="ia-one" />

            <div className="details">
              <h2>Invoice App</h2>
              <p>
                An invoice app that allows user to add/edit/delete invoices. It
                features a comprehensive form validation along with a theme
                switcher.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleModal();
                  setPortfolio("three");
                }}
              >
                Read More
              </button>
            </div>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {modal && <Portfolio setModal={setModal} portfolio={portfolio} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </StyledWrapper>
  );
};

export default MyWorks;

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1a1a1a;
  padding: 80px 120px;
  filter: ${({ modal }) => (modal ? "blur(7px)" : "")};
  transition: filter 0.3s ease-in-out;

  .circle-container {
    .circle-background {
      background-color: lightcoral;
      height: 10vw;
      width: 10vw;
      border-radius: 100%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;

      &.two {
        background-color: lightskyblue;
      }

      &.three {
        background-color: lightgoldenrodyellow;
      }
    }
  }

  h1 {
    color: lightgoldenrodyellow;
    font-weight: 700;
    font-size: 150px;
    display: inline-block;
    position: relative;

    span {
      font-size: 80px;
      text-transform: uppercase;
    }

    .line {
      height: 6px;
      width: 100%;
      background-color: lightskyblue;
    }
  }

  .projects-container {
    margin-top: 100px;
    width: 100%;

    .project {
      display: flex;

      &:not(:first-child) {
        margin-top: 130px;
      }

      &:nth-child(even) {
        flex-direction: row-reverse;

        img {
          border: 1px solid #333333;
        }
      }

      img {
        width: 50%;
        height: auto;
        object-fit: cover;
        flex: 0.5;
        border-radius: 8px;
      }

      .details {
        flex: 0.5;
        padding: 0 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        h2 {
          font-size: 25px;
          font-weight: 700;
          text-transform: uppercase;
          color: #ffffff;
        }

        p {
          margin-top: 25px;
          color: lightgray;
          font-weight: 500;
          font-size: 20px;
        }

        button {
          margin-top: 30px;
          border: none;
          padding: 10px 20px;
          color: #1a1a1a;
          background-color: lightskyblue;
          font-weight: 700;
          font-size: 14px;
          border-radius: 5px;
          cursor: pointer;
          display: block;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 30px 60px 60px 60px;

    .circle-container {
      .circle-background {
        height: 15vw;
        width: 15vw;
      }
    }

    h1 {
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 30px 60px 30px;

    .projects-container {
      .project {
        &:nth-child(even) {
          .details {
            padding: 0 40px 0 0;
          }
        }

        .details {
          padding: 0 0 0 40px;

          button {
            margin: 30px auto 0 auto;
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    .circle-container {
      .circle-background {
        height: 17vw;
        width: 17vw;
      }
    }
    h1 {
      font-size: 30vw;

      span {
        font-size: 20vw;
      }
    }

    .projects-container {
      margin-top: 60px;
      .project {
        flex-direction: column;

        &:not(:first-child) {
          margin-top: 60px;
        }

        &:nth-child(even) {
          flex-direction: column;

          .details {
            padding: 0;
          }
        }

        img {
          width: 100%;
        }

        .details {
          margin-top: 30px;
          padding: 0;

          h2,
          p {
            text-align: center;
            width: 100%;
          }

          p {
            font-size: 17px;
          }
        }
      }
    }
  }

  @media (max-width: 375px) {
    .circle-container {
      .circle-background {
        height: 18vw;
        width: 18vw;
      }
    }

    .projects-container {
      .project {
        .details {
          h2 {
            font-size: 22px;
          }
          p {
            /* font-size: 16px; */
          }
        }
      }
    }
  }

  @media (max-width: 280px) {
    .circle-container {
      .circle-background {
        height: 19vw;
        width: 19vw;
      }
    }
  }

  @media (min-width: 2000px) {
    h1 {
      font-size: 13vw;

      span {
        font-size: 7vw;
      }

      .line {
        height: 10px;
      }
    }

    .projects-container {
      .project {
        .details {
          h2 {
            font-size: 50px;
          }

          p {
            font-size: 35px;
          }

          button {
            margin-top: 40px;
            padding: 15px 25px;
            font-size: 25px;
            border-radius: 8px;
          }
        }
      }
    }
  }

  @media (min-width: 2560px) {
    .projects-container {
      .project {
        .details {
          padding: 0 80px;
          h2 {
            font-size: 65px;
          }

          p {
            font-size: 40px;
          }

          button {
            margin-top: 40px;
            padding: 20px 30px;
            font-size: 33px;
          }
        }
      }
    }
  }
`;
