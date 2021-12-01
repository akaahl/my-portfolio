import React from "react";
import pfaLearnedOne from "../assets/pfa-learned-1.jpg";
import pfaLearnedTwo from "../assets/pfa-learned-2.jpg";
import pfaLearnedThree1 from "../assets/pfa-learned-3.1.jpg";
import pfaLearnedThree2 from "../assets/pfa-learned-3.2.jpg";
import pfaLearnedThree3 from "../assets/pfa-learned-3.3.jpg";
import pfaLearnedFour1 from "../assets/pfa-learned-4.1.jpg";
import pfaLearnedFour2 from "../assets/pfa-learned-4.2.jpg";
import gitHubIcon from "../assets/icon-github.svg";

const ProductFeedback = () => {
  return (
    <>
      <h2>Product Feedback App</h2>

      <p className="intro">
        This web app is based on a premium challenge from FrontEndMentor. I
        built it using React JS, along with other libraries including
        React-Redux for state management, React Router Dom for page routing, and
        Framer Motion for all of the micro interaction animations. Essentially,
        it's a full CRUD application integrated with the local storage Web API
        in order to mimic the backend functionalities. Users are able to display
        all of the feedbacks, filter them, join in on the feedback discussion
        and add commentary, and also delete them.
      </p>

      <div className="links">
        <a
          href="https://github.com/akaahl/product-feedback-app"
          className="github"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHubIcon} alt="github" />
          <span>Github Repo</span>
        </a>
        <a
          href="https://product-feedback-app-alpha.vercel.app/"
          className="demo"
          target="_blank"
          rel="noreferrer"
        >
          <span>Live Demo</span>
        </a>
      </div>

      <h4>Tech Stacks:</h4>

      <div className="stacks-wrapper">
        <span>React JS Library</span>
        <span>React Redux</span>
        <span>Redux Thunk</span>
        <span>Styled Components</span>
        <span>Framer Motion</span>
      </div>

      <h4>What I have learned</h4>

      <div className="learned">
        <p>
          This was by far the largest and the most challenging project I have
          built thus far. I spent around a month and a few good days building up
          this app while figuring out all the edge cases, and I think I managed
          to cover all of them (hopefully so!). The entire experience was
          exhilarating! There were moments where I felt like I am at the level
          where I should not attempt this project, but I'm glad that I did. I
          forced and dragged my self through the muds, dirtied my hands,
          ultimately I managed to build this app in its entirety. Below are some
          of things I would love to share during the development process:-
        </p>

        <ul>
          <li>
            <h5>Close modal on outside click</h5>
            <p>
              At first glance, this might sound intuitive, but as I went along
              down the line, it soon proved to be otherwise! The initial
              solution that I came up with involved attaching a function that
              close the "showMobile" state to every elements, which is frankly
              quite repetitive and cumbersome. Not to mention, implementing that
              approach is generally regarded as a bad practice. After lurking
              around in StackOverflow for quite some time, I discovered a better
              way of implementing it (kindly refer to the image below).
            </p>

            <img src={pfaLearnedOne} alt="pfa learned one" />

            <p>
              As soon as the user click to open the mobile modal, a helper
              function is attached onto the document object itself; whose
              primary function is to listen to any click event and set the
              "showMobile" state back to false (closing the modal). It removes
              the need for writing overly verbose and redundant codes, and boils
              it down to bare simplicity.
            </p>
          </li>

          <li>
            <h5>Updating upvote button status and number</h5>

            <p>
              The bulk of this problem lies in updating properties in deeply
              nested objects; in order to create the functionality. The data
              itself is an object containing two properties, one of which is an
              array with objects inside of it. My concern was on how to update
              the "upvotes" and "upvoted" without affecting the rest of the
              properties. The snippet below illustrates the solution that I came
              up with.
            </p>

            <img src={pfaLearnedTwo} alt="pfa learned two" />

            <p>
              As indicated above, I used the spread syntax to basically create a
              shallow copy of the object itself and only update the necessary
              properties. By mapping through the "productRequests" array, I can
              access and modify the intended object (by using the id), and once
              again using the spread syntax and this time using ternary operator
              to conditionally update both "upvotes" and "upvoted". Finally, I
              saved the data to local storage as well as dispatching it to the
              global state (via redux).
            </p>
          </li>

          <li>
            <h5>Form error handling</h5>

            <p>
              At first, I thought of using external libraries like Formik to
              manage the form validation as this would be a good excuse for me
              to finally learn it. But considering the amount of form input
              elements are very minimal, I opted to simply write the validation
              logic myself. Take a look below:-
            </p>

            <img src={pfaLearnedThree1} alt="pfa learned 3-1" />
            <img src={pfaLearnedThree2} alt="pfa learned 3-2" />
            <img src={pfaLearnedThree3} alt="pfa learned 3-3" />

            <p>
              There are multi-steps involved in this form validation, but I will
              try to condense everything neatly target="_blank". First, I
              created two state objects containing the "errorStatus" and
              "formData". Each of them have properties set to "false" and empty
              strings respectively.
            </p>

            <p>
              Next, I figured that validating the input fields whenever the user
              "focus out" (click outside the field elements after they have
              focused in) would be good user experience. Hence, that's where the
              handleError comes in, whereby it checks whether the specific
              "formData" fields are empty or otherwise. If it is empty, then
              "setErrorStatus" will commence to turn the specific properties to
              "true". A side note; another function to handle the on-change
              event for the input fields is also implemented (not included
              here), which will bind the formData to the input value.
            </p>

            <p>
              And finally, there is the handleSubmit function that is triggered
              whenever the form is submitted by the user. It works roughly the
              same with handleError function, but with an aditional measure that
              checks whether all fields have been filled (performed by the
              filledForm variable). From this point onwards, I used a simple
              "if" check to ascertain that the filledForm is "true" and then
              wrote the necessary codes (not included).
            </p>

            <p>
              Another thing to mention is that whenever the any of the
              errorStatus properties is set to "true", styling adjustments will
              be automatically reflected in the UI. It indicates a "warning" of
              sorts that reminds the user to fill the form entirely.
            </p>
          </li>

          <li>
            <h5>Conditional rendering with custom props (Styled Components)</h5>

            <p>
              One of the main reasons I love SC is the ability to pass in any
              props in any components, and using that props to conditionally
              render CSS styling. I have encountered many "flaky" situations
              where I have to employ fancy CSS tricks just to get by, in which
              SC's props conditional rendering can easily solve. A particular
              case in this project is where I wanted to render the cursor
              styling to "pointer" whenever user hovers on the Feedback
              component in Home page, but renders it as "default" in the
              FeedbackDetails page.
            </p>

            <img src={pfaLearnedFour1} alt="pfa learned 4-1" />
            <img src={pfaLearnedFour2} alt="pfa learned 4-2" />

            <p>
              The above snippets depicted how I used the hover props to render
              the cursor styling accordingly. The main logic behind this is
              centered on the "feedbackId" prop (passed down from the parent
              element). The id itself only exists whenever user is currently on
              FeedbackDetails page. Therefore, the hover props will only return
              true in that sense. Now, in the styling section, it is pretty much
              intuitive where SC is using the hover props to then render cursor
              styling. This is as convenient as it gets.
            </p>
          </li>
        </ul>
      </div>

      <h4>Continued Development</h4>

      <p>
        Instead of just using local storage Web API, I do have plans to turn
        this app into a truly full-stack app in the future. The stacks I have
        decided to use will be Node JS (with Express JS framework) for
        server-side logic, and MongoDB for storing users' data. Reason being, I
        wanted to gain further mastery in JavaScript by delving further into the
        back-end and it is very convenient for me to do so. Whilst, MongoDB in
        my opinion is quite easy for beginners to set their footholds in, as
        No-SQL (document-based) database looks roughly the same as JavaScript
        objects.
      </p>
    </>
  );
};

export default ProductFeedback;
