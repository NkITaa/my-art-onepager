import Download from "../../universal/Download";
import Footer from "../../universal/footer/Footer";
import Form from "./Form/Form";
import Request from "./Request";

function Contact() {
  return (
    <>
      <div className="bg-slate-100 lg:py-16 2xl:py-32 px-10 pt-8 pb-16">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <Request />
          <Form />
        </div>
      </div>
      <Download slate={false} />
      <Footer slate={true} />
    </>
  );
}

export default Contact;
