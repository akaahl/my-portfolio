import React from "react";
import aecLearnedOne from "../assets/aec-learned-1.jpg";
import aecLearnedTwo1 from "../assets/aec-learned-2.1.jpg";
import aecLearnedTwo2 from "../assets/aec-learned-2.2.jpg";
import aecLearnedThree1 from "../assets/aec-learned-3.1.jpg";
import aecLearnedThree2 from "../assets/aec-learned-3.2.jpg";
import aecLearnedThree3 from "../assets/aec-learned-3.3.jpg";
import aecLearnedThree4 from "../assets/aec-learned-3.4.jpg";
import aecLearnedThree5 from "../assets/aec-learned-3.5.jpg";

const Audiophile = () => {
  return (
    <div>
      <h2>Audiophile E-commerce Site</h2>

      <p>
        This webapp features an e-commerce platform that showcases a variety of
        premium audio products, such as headphones, earphones and speakers. It
        is based on a premium challenge from FrontEndMentor.
      </p>

      <p>
        Core functionalities include adding and removing products from the cart,
        managing form validations on user input fields in the checkout page (by
        using Formik), displaying confirmation order message with user's item
        selections and automatically calculates the shipping fees and V.A.T.
        Additionally, I've also used local storage Web API to simulate back-end
        capabilities to store user's shopping cart data, and display them when
        the page is reloaded.
      </p>

      <p>
        All in all, this project helps to reinforce what I have learned before
        plus some other things. And that is learning the Formik library. I have
        always wanted fiddle with either Formik or React Hook Form library, but
        eventually settled on Formik because it is widely used in the real-world
        production environment. This project is truly a roller-coster journey
        and I had fun with it!
      </p>

      <div className="links">
        <a
          href="https://github.com/akaahl/audiophile-ecommerce"
          className="github"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
        <a
          href="https://audiophile-ecommerce-eight.vercel.app/"
          className="demo"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
      </div>

      <h4>Tech Stacks:</h4>

      <div className="stacks-wrapper">
        <span>React JS Library</span>
        <span>React Redux</span>
        <span>Redux Thunk</span>
        <span>Styled Components</span>
        <span>Framer Motion</span>
        <span>React Hook Inview</span>
        <span>UUID</span>
        <span>Formik</span>
        <span>Formik Focus Error</span>
        <span>Yup</span>
      </div>

      <h4>What I have learned</h4>

      <div className="learned">
        <p>
          Personally, I feel that building this app was comparatively easier
          than my other two projects. That's not to say that I am not learning
          anything new of sorts. On the contrary, I in fact learnt a great deal
          when it comes to utilizing external libraries to smoothen out the
          development process. This is especially true in the case of Formik. A
          lot of moving parts are involved when it comes to parsing and
          validating user's inputs using Formik and Yup JS, but it was well
          worth learning them. I would also like to point out this was my first
          time building an e-commerce web app, the experience was truly
          enjoyable and beneficial. With that said, here are some of the things
          that I have learned when building this project:-
        </p>

        <ul>
          <li>
            <h5>Using Promise.all()</h5>

            <p>
              Previously, I have never encountered a situation where I have to
              fetch multiple data from different API endpoints concurrently. But
              in this case, even though both of the data existed as a local JSON
              format, they are still completely independent from one another and
              I needed a way to fetch them without having to resort to chaining
              multiple promises. The solution that I found was simply to use
              "Promise.all()", where it takes in an array of promises as an
              argument, executes all of them, and as a result, returns another
              promise. Refer below.
            </p>

            <img src={aecLearnedOne} alt="aec learned one" />

            <p>
              The snippet above shows how straightforward it is to implement
              "Promise.all()". Probably, the most useful thing about this
              function is that not only it runs the promises in parallel but it
              returns them in the same order as the original array. What that
              means is that destructuring can be made possible as I have done
              above. I immediately destructured the array in the "then" method
              argument so I can store those variables inside the new
              "storageData" object. Another thing to keep in mind when using
              this, is that when one of the promise rejects, the entire promise
              will also be rejected. Consequently, there will be errors when
              fetching the data and if the use-case does not permits for such
              error, it's best to probably use other types of promises like
              "Promise.race()", or etc.
            </p>
          </li>

          <li>
            <h5>Custom "useScroll()" hook</h5>

            <p>
              Animating elements when they are present in the viewport adds a
              nice "flourish" to an app, and to some extent, could give a
              well-polished user experience if done correctly. But first, there
              needs to be a mechanism to detect whenever such elements are
              actually in frame. So that's where this custom hook shines in. It
              is to be used in conjunction with Framer Motion's custom
              "useAnimation()" hook that is used to start the animation when
              "view" returns true.
            </p>

            <img src={aecLearnedTwo1} alt="aec learned two-1" />
            <img src={aecLearnedTwo2} alt="aec learned two-2" />

            <p>
              The main components to this custom hook is "useAnimation()" hook
              from Framer Motion and "useInView()" hook from React InView (an
              intersection observer API for React). To get started, "controls"
              is responsible to initiate the animation once a certain condition
              is satisfied. Meanwhile, "useInView()" returns "element" that is
              used as a "ref" prop to an element and "view" that returns true
              whenever element is presents in the viewport. The "if" check
              basically shows the above statement in practice. And finally, the
              entire "useScroll()" eventually returns an array containing
              "element" and "controls", which will be hooked onto any elements
              that require animation effect when in-view. And that's basically
              it.
            </p>
          </li>

          <li>
            <h5>Form validation using Formik and Yup</h5>

            <p>
              In a simple use case, writing form validation logic does not
              require the use of external libraries. But the need to use one
              becomes almost necessary as the project requirements grows more
              complex with more inputs are required from the user. And binding
              the exorbitant amount of fields, states, and handler's functions
              will become a nightmare. It will soon be come apparent that
              managing the form needs a specialized tool to ease the development
              process. Formik is a great library for that purpose.
            </p>

            <img src={aecLearnedThree1} alt="aec learned three-1" />
            <img src={aecLearnedThree2} alt="aec learned three-2" />
            <img src={aecLearnedThree3} alt="aec learned three-3" />

            <p>
              There are several key components in Formik to manage the entire
              form, which are:- Formik, Form, Field, and ErrorMessage. As noted
              above, the "Formik" component is used as a "wrapper" for the
              entire form, and it contains the "formik" props which can be
              passed down to the children elements. This particular prop
              contains several methods and properties such as "touched" (if user
              has visited the input field), "errors" (if user has not entered or
              entered/submit invalid data), and so on. Developers' may tailor
              this to suit their needs accordingly.
            </p>

            <p>
              Next, the "Form" component replaced the regular html "form"
              element in order to make the "formik" props accessible throughout
              the form. "ErrorMessage" is a special component from Formik where
              it displays the "warning" message, whenever an error occurs during
              validation. I used a custom "TextError" component to display a
              custom styling and message, which is hooked by the "ErrorMessage".
            </p>

            <p>
              And the heart of all this is the "Field" component. It works
              exactly as a regular "input" element does, but minus all the nitty
              gritty handlers' function binding on each and every input fields.
              Everything works seamlessly, and the Field component takes care of
              all this under the hood. All that is needed is the "name" prop,
              which has to be exactly the same with the one inside the
              "initialValues" object (will be shown later).
            </p>

            <p>
              There is also the "ConnectedFocusError" component, another library
              (Formik Focus Error) that works together with Formik. It allows
              the first element that has error validation upon form submission
              to be immediately focused on. As a result, user does not have to
              manually scroll and look for that specific input field which in
              turn boosts the user experience.
            </p>

            <img src={aecLearnedThree4} alt="aec learned three-4" />
            <img src={aecLearnedThree5} alt="aec learned three-5" />

            <p>
              The above codes illustrate how YupJS library is used to parse and
              validates every input values coming from the "Field" components.
              The "validationSchema" (Yup object) provides various intuitive
              methods such as "required", "string", "email", to simplify the
              validation process. This entirely eliminates writing helper
              functions manually. Some of the methods require arguments to be
              passed into them like the "required" method. A custom message
              "Field cannot be empty" is then automatically received in the
              "ErrorMessage" component, and will be displayed should the field
              be empty.
            </p>
          </li>
        </ul>
      </div>

      <h4>Continued Development</h4>
      <p>
        Adding a zoom effect whenever the user hovers onto a product image would
        be a nice addition to the UI. So I would probably include it in the next
        iteration, along with a few more micro-interaction animations. Apart
        from that, there is no rationale for me to integrate a back-end stack to
        this app in the future because it's just a demo site, not a production
        app. Thus, it is adequate as it currently stands now.
      </p>
    </div>
  );
};

export default Audiophile;
