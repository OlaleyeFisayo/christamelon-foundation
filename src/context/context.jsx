import { createContext, useState } from "react";

const myContent = createContext();

function ContextProvider({ children }) {
  const [popUp, setPopUp] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const showPopUp = () => {
    setPopUp(true);
  };

  const hidePopUp = () => {
    setPopUp(false);
  };

  const showNavBar = () => {
    setToggle(true);
  };

  const hideNavBar = () => {
    setToggle(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form here
    const validationErrors = {};
    if (!formValues.firstName) {
      validationErrors.firstName = "First name is required";
    }
    if (!formValues.lastName) {
      validationErrors.lastName = "Last name is required";
    }
    if (!formValues.email) {
      validationErrors.email = "Email is required";
    }
    if (!formValues.message) {
      validationErrors.message = "Message is required";
    }
    if (Object.keys(validationErrors).length === 0) {
      // Submit form if there are no errors
      console.log("Form submitted successfully!");
    } else {
      // Display validation errors
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const store = {
    popUp,
    showPopUp,
    hidePopUp,
    toggle,
    showNavBar,
    hideNavBar,
    formValues,
    errors,
    handleChange,
    handleSubmit,
  };

  return <myContent.Provider value={store}>{children}</myContent.Provider>;
}

export { myContent, ContextProvider };
