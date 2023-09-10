import { useState } from "react";
import Button from "../../organisms/Button";

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

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="text-base leading-snug tracking-tight">
              Vorname
            </label>
            <input
              className="appearance-none block w-[328px] peer p-4 bg-neutral-50 rounded-xl border text-gray-700 border-gray-200 justify-between items-center gap-2 "
              name="firstname"
              type="text"
              value={values.firstname}
              onChange={onChange}
              minLength={2}
            />{" "}
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="text-base leading-snug tracking-tight">
              Nachname
            </label>
            <input
              className="appearance-none block  w-[328px] peer p-4 bg-neutral-50 rounded-xl border text-gray-700 border-gray-200 justify-between items-center gap-2 "
              name="lastname"
              type="text"
              value={values.lastname}
              onChange={onChange}
              minLength={4}
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="text-base leading-snug tracking-tight">
              E-mail
            </label>
            <input
              className="appearance-none block  w-[328px] peer p-4 bg-neutral-50 rounded-xl border text-gray-700 border-gray-200 justify-between items-center gap-2 "
              name="email"
              type="text"
              value={values.email}
              onChange={onChange}
              minLength={4}
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </div>
          <div className=" md:w-1/2 px-3">
            <label className="text-base leading-snug tracking-tight">
              Telefonnummer (optional)
            </label>
            <input
              className="appearance-none block w-[328px] peer p-4 bg-neutral-50 rounded-xl border text-gray-700 border-gray-200 justify-between items-center gap-2 "
              name="phonenumber"
              type="text"
              value={values.phonenumber}
              onChange={onChange}
              minLength={4}
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-[668px] px-3">
            <label className="text-base leading-snug tracking-tight">
              {" "}
              Deine Nachricht
            </label>
            <textarea
              className="appearance-none block w-full peer p-4 bg-neutral-50 rounded-xl border text-gray-700 border-gray-200 justify-between items-center gap-2 "
              name="message"
              value={values.message}
              onChange={onChange}
              minLength={4}
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </div>
        </div>

        <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch h-[102px] flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <input type="checkbox" className="default:ring-2 ..." />
              <div className="w-5 h-5 relative" />
              <div>
                <span className=" text-base  leading-relaxed">
                  Ich habe die{" "}
                </span>
                <span className=" text-base font-bold leading-relaxed">
                  Datenschutzerklärung
                </span>
                <span className=" text-base  leading-relaxed">
                  {" "}
                  gelesen blyat
                </span>
              </div>
            </div>
            <Button link={undefined} text="Nachricht absenden" />
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
