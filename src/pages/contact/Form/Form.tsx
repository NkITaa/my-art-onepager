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
    checkbox: false,
  });

  const [globalValid, setGlobalValid] = useState(true);

  const onChange = (event: {
    target: { name: string; value: string };
  }): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const checkboxToggle = (event: {
    target: { name: string; checked: boolean };
  }): void => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log();
    if (
      values.firstname.length < 2 ||
      values.lastname.length < 2 ||
      !values.email.includes("@") ||
      values.email.length < 4 ||
      values.message.length < 10 ||
      values.checkbox === false
    )
      setGlobalValid(false);
    else console.log(values);
  };

  const formRows = [
    {
      label: "Vorname",
      name: "firstname",
      value: values.firstname,
      onChange: onChange,
      error: "Mind. 2 Zeichen.",
    },
    {
      label: "Nachname",
      name: "lastname",
      value: values.lastname,
      onChange: onChange,
      error: "Mind. 2 Zeichen.",
    },
    {
      label: "E-mail",
      name: "email",
      value: values.email,
      onChange: onChange,
      error: "Keine Valide E-mail Adresse.",
      email: true,
    },
    {
      label: "Telefonnummer (optional)",
      name: "phonenumber",
      value: values.phonenumber,
      onChange: onChange,
      error: "",
      phone: true,
    },
  ];

  const block = {
    label: "Deine Nachricht",
    name: "message",
    value: values.message,
    onChange: onChange,
    error: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="">
          <div className="grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-4">
            {formRows.map((row, index) => (
              <FormRow key={index} {...row} globalValid={globalValid} />
            ))}
          </div>
          <FormBlock {...block} globalValid={globalValid} />
        </div>

        <div className="">
          <div className="flex-col flex">
            <Checkbox
              checked={values.checkbox}
              onChange={checkboxToggle}
              name="checkbox"
              globalValid={globalValid}
            />
            <Button link={undefined} text="Nachricht absenden" />
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
