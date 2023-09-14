import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

function Request() {
  return (
    <>
      <div className="max-w-[668px] pb-12">
        <div className="text-[32px] lg:text-5xl font-bold pb-6">
          Kontaktiere uns!
        </div>
        <div className="lg:text-xl">
          Kontaktiere uns jederzeit gerne bei Fragen/ Feedback oder sonstigen
          Anliegen auf einen unserer vielen Kontaktwege.
        </div>
        <div className="flex flex-row pt-3">
          <AiOutlineFacebook className="w-8 h-8 mr-6" />
          <AiOutlineInstagram className="w-8 h-8 mr-6" />
          <AiOutlineWhatsApp className="w-8 h-8 mr-6" />
          <AiOutlineMail className="w-8 h-8 mr-6" />
        </div>
      </div>
    </>
  );
}

export default Request;
