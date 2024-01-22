import React from "react";
import ContactUsForm from "../../common/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="w-1/3 mx-auto mb-10 mt-20">
      <h1 className="text-center font-bold text-white font-inter text-4xl">
        Get in Touch
      </h1>
      <p className="text-center text-richblack-300 text-base mt-4 font-inter font-medium">
        We&apos;d love to here for you, Please fill out this form.
      </p>
      <div className="mt-10 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
