import Download from "../Download";
import Footer from "../Footer";
import Form from "./Form";
import Request from "./Request";

function Contact() {
  return (
    <>
      <div className="w-full h-[609px] px-40 bg-slate-100 flex-col justify-center items-center inline-flex">
        <div className="self-stretch py-16 justify-center items-center gap-16 inline-flex">
          <Request />
          <Form />
        </div>
      </div>
      <Download />
      <Footer />
    </>
  );
}

export default Contact;
