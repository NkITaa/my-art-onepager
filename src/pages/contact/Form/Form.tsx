import { useState } from "react";
import Button from "../../../organisms/Button";
import FormBlock from "./Components/FormBlock";
import FormRow from "./Components/FormRow";
import Checkbox from "./Components/Checkbox";

function Form() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const onChange = (event: {
    target: { name: string; value: string };
  }): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  const formRows = [
    {
      label: "Vorname",
      name: "firstname",
      value: values.firstname,
      onChange: onChange,
      minLength: 2,
      error: "Please provide a valid email address.",
    },
    {
      label: "Nachname",
      name: "lastname",
      value: values.lastname,
      onChange: onChange,
      minLength: 2,
      error: "Please provide a valid email address.",
    },
    {
      label: "E-mail",
      name: "email",
      value: values.email,
      onChange: onChange,
      minLength: 2,
      error: "Please provide a valid email address.",
    },
    {
      label: "Telefonnummer (optional)",
      name: "phonenumber",
      value: values.phonenumber,
      onChange: onChange,
      minLength: 2,
      error: "Please provide a valid email address.",
    },
  ];

  const block = {
    label: "Deine Nachricht",
    name: "message",
    value: values.message,
    onChange: onChange,
    minLength: 2,
    error: "Please provide a valid email address.",
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="">
          <div className="grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-4">
            {formRows.map((row, index) => (
              <FormRow key={index} {...row} />
            ))}
          </div>
          <FormBlock {...block} />
        </div>

        <div className="">
          <div className="flex-col flex">
            <Checkbox />
            <Button link={undefined} text="Nachricht absenden" />
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
