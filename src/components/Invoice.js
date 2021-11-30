import React from "react";
import iaLearnedOne1 from "../assets/ia-learned-1.1.jpg";
import iaLearnedOne2 from "../assets/ia-learned-1.2.jpg";
import iaLearnedOne3 from "../assets/ia-learned-1.3.jpg";
import iaLearnedOne4 from "../assets/ia-learned-1.4.jpg";
import iaLearnedTwo1 from "../assets/ia-learned-2.1.jpg";
import iaLearnedTwo2 from "../assets/ia-learned-2.2.jpg";
import iaLearnedTwo3 from "../assets/ia-learned-2.3.jpg";
import iaLearnedTwo4 from "../assets/ia-learned-2.4.jpg";
import iaLearnedTwo5 from "../assets/ia-learned-2.5.jpg";
import iaLearnedThree1 from "../assets/ia-learned-3.1.jpg";
import iaLearnedThree2 from "../assets/ia-learned-3.2.jpg";
import iaLearnedThree3 from "../assets/ia-learned-3.3.jpg";
import iaLearnedFour1 from "../assets/ia-learned-4.1.jpg";
import iaLearnedFour2 from "../assets/ia-learned-4.2.jpg";
import iaLearnedFour3 from "../assets/ia-learned-4.3.jpg";

const Invoice = () => {
  return (
    <div>
      <h2>Invoice App</h2>

      <p>
        This is a fully-functional invoice app, that allows user to add, edit,
        and remove invoices. It is also based on a premium challenge from
        FrontEndMentor. Like all my other works, this app is built on top of the
        ReactJS library with React Redux for global state management. Dynamic
        page routing is handled by React Router Dom, and all the slick
        transitions are made with Framer Motion. Local storage Web API is also
        employed to store invoices data, and persists them upon page refreshed.
      </p>

      <p>
        The main highlight of this project was building a complex form
        validation with Formik. This was my second time of using the Formik
        library, and there were a lot of edge cases that didn't occur to me
        until I start developing the app. For instance, creating the dynamically
        added input fields, doing automatic calculation within those fields;
        among other things. It was certainly a lot of fine details
        implementation yet I've had tremendous fun and it significantly boosted
        my knowledge on Formik.
      </p>

      <div className="links">
        <a
          href="https://github.com/akaahl/invoice-app-react"
          className="github"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
        <a
          href="https://invoice-app-react-six.vercel.app/"
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
        <span>React Datepicker</span>
        <span>UUID</span>
        <span>Formik</span>
        <span>Formik Focus Error</span>
        <span>Yup</span>
      </div>

      <h4>What I have learned</h4>

      <div className="learned">
        <p>
          I would like to point out that this was actually my second time of
          building the app. I have built this app previously with pure vanilla
          JavaScript, without any external utilities and libraries. Since my
          goal was to gain a strong skillset within the ReactJS ecosystem, I
          thought it would be a great idea to rebuild the app with my current
          stack. And the final outcome was really good in my opinion, especially
          the theme switcher and font sizes. It wasn't as sloppy as my previous
          one. Safe to say, that I managed to fine-tune some of the tiny details
          and make them better. As always, here are some of things that I would
          love to highlight and share as part of my learning process:-
        </p>

        <ul>
          <li>
            <h5>Implementing the React Datepicker library</h5>

            <p>
              Applying the React Datepicker library on its own might not be much
              of a challenge. But in this context, where I am using Formik to
              manage the form, I had to dig deeper on both documentations and
              find out on how best to weave them together.
            </p>

            <img src={iaLearnedOne1} alt="ia learned one-1" />
            <img src={iaLearnedOne2} alt="ia learned one-2" />

            <p>
              The above shows the approach that I used to integrate both of the
              libraries. Basically, the "Field" renders the RD as its child
              element. Note that, "Field" contains props that I have
              destructured which are "value" and "setFieldValue". These props
              are very useful, in the sense that, it is value of the "input"
              element itself, and the latter is used to dynamically change the
              values; much like "setState". And both of them are to be passed
              into "DatePicker" component and used as prop's value and inside
              event handler's function respectively.
            </p>

            <p>
              The problem does not end there though. RD by default has it's own
              input element styling which does not align with the rest of the
              form's. Therefore, I had to manually create a custom component
              with the same CSS styling all across the input elements.
              Consequently, this custom component will passed as the
              "customInput" props's value shown above. Refer below:-
            </p>

            <img src={iaLearnedOne3} alt="ia learned one-3" />

            <p>
              In order to make the custom component works as it should, the
              "forwardRef" hook is used to render the children elements. It
              contains several arguments which is then used in the children, for
              example, the "ref", and "onClick" function. And that pretty much
              sums it up. The end result can be seen in the image below:-
            </p>

            <img src={iaLearnedOne4} alt="ia learned one-4" />
          </li>

          <li>
            <h5>Adding items dynamically in Formik</h5>
            <p>
              In general, the "Field" component is usually the main go-to
              solution to render static input elements. However, in a situation
              where user wants to add items dynamically or remove them, the
              "FieldArray" component can be used in conjunction with "Field" to
              achieve this effect. I will try to explain sufficiently below.
            </p>
            <img src={iaLearnedTwo1} alt="ia learned two-1" />

            <p>
              The "ItemList" component is a custom component that encapsulates
              both "FieldArray" and "InputWrapper" (used to render "Field"). The
              reason I do it this way is to make it easy for me to manage the
              codebase because as I gradually added more stuff, the entire thing
              becomes too cluttery to keep track of.
            </p>

            <img src={iaLearnedTwo2} alt="ia learned two-2" />
            <img src={iaLearnedTwo3} alt="ia learned two-3" />
            <img src={iaLearnedTwo4} alt="ia learned two-4" />
            <img src={iaLearnedTwo5} alt="ia learned two-5" />

            <p>
              Meanwhile, the above snippets shows the "ItemList" and how
              everything works together. First, "FieldArray" is used to render
              its children which includes "InputWrapper". As per usual, props
              exclusive to "FieldArray" such as "push" and "remove" are
              destructured. These two functions are indeed array methods that
              can be used to add or remove items, and attached to an event
              handler inside a button, as shown above. In conclusion, Formik
              makes it easy to create complex form handling like this.
            </p>
          </li>

          <li>
            <h5>Loading saved input values when editing the form</h5>

            <p>
              In many instances, users may want to edit or update the form that
              they have saved. And it can be useful and provides a good user
              experience that all form fields are pre-filled with the saved
              values when users click the edit button. By using Formik's
              "setFieldValues" method, we can seamlessly set any Field component
              value when the form loads.
            </p>

            <img src={iaLearnedThree1} alt="ia learned three-1" />
            <img src={iaLearnedThree2} alt="ia learned three-2" />

            <p>
              Inside "InnerForm" component, I extracted the entire invoices data
              from the local storage, filter it to match the invoice that user
              is currently on, and assign it to the "selectedInvoice" variable.
              Moving down further, I conditionally passed it down into
              "InputWrapper" component. If this prop exists, then it means that
              user wants to edit the form instead of adding a new one.
            </p>

            <img src={iaLearnedThree3} alt="ia learned three-3" />

            <p>
              The above image shows how "useEffect" hook is used in order to
              implement the "load" functionality inside "InputWrapper"
              component. Whenever the component first loads, the conditional
              check of "value" and "setFieldValue" is triggered and pre-filled
              the input elements dynamically via the "setFieldValue" function if
              they exists. The only things required for this to work are the
              "name" attribute, and "value" (which came from selectedInvoice).
            </p>

            <p>
              I would like to also point out a mistake that I made prior to
              coming up with this solution, which is directly setting Field's
              component "value" prop, instead of using the "setFieldValue".
              Sure, the previously saved data will be displayed correctly in the
              UI. But users will not be able to change the value itself when
              they clicked onto the element as the value is "hard-coded" so to
              speak. And the onChange handler will not be able to capture any
              changes happening within the input element.
            </p>
          </li>

          <li>
            <h5>UUID bugs when using Framer Motion staggerChildren effect</h5>

            <p>
              This is a reminder to my future self not to use UUID as a key prop
              when rendering an array into the UI. I've encountered many
              situations where I just can't seem to figure out why the
              staggerChildren effect is not working as it should, not just in
              this project but also my previous ones. It did not occur to me
              initially that UUID might be the elusive culprit, but after
              removing and changing every bits of the values, the answer
              presents itself.
            </p>

            <img src={iaLearnedFour1} alt="ia learned four-1" />
            <img src={iaLearnedFour2} alt="ia learned four-2" />

            <p>
              Inside StyledInvoice, I've set the array index as the "key" prop
              value rather than using uuidv4() generated value. If I were to use
              the latter, none of the child elements will have the stagger
              animation effect. I think, this is partly due to Framer Motion
              algorithm that uses the array index key prop value to calculate
              the "delay" effect of each StyledInvoice component.
            </p>

            <img src={iaLearnedFour3} alt="ia learned four-3" />

            <p>
              The above code is normally how the stagger effect is done without
              using the "staggerChildren". It wouldn't make sense for the uuid
              generated value to be used to calculate the delay as it is a
              series of random alphabets and numbers. Hence, the reason of why I
              think it is not working. This is just a theory of mine, not a
              hard-stated fact by itself. I just wished Framer Motion would log
              any error output to the console to indicate that a particular
              setting is not allowed or some sorts, to save myself from
              countless of hours debugging.
            </p>
          </li>
        </ul>
      </div>

      <h4>Continued Development</h4>

      <p>
        Just like the Product Feedback app, I have planned to include a back-end
        functionality with full user authentication and handling with NodeJS and
        MongoDB. I think that would make this app more "legit" and at the same
        time, a good practice for my back-end skills. Ofcourse, that would be
        after I have learned all the necessary technologies to implement it. For
        now, I am deeply focused in the front-end avenue as I really enjoy
        building the client-facing interface and functionalities.
        target="_blank"
      </p>
    </div>
  );
};

export default Invoice;
