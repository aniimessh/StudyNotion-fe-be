import React from "react";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import ContactUsForm from "../components/common/ContactUsForm";
import { Footer } from "../components/common/Footer";

const ContactUs = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center mt-14 gap-x-14 w-11/12 mx-auto">
        <div className="bg-richblack-700 p-11 h-max rounded-lg flex flex-col gap-y-4">
          <div className="flex gap-x-2">
            <div>
              <HiMiniChatBubbleLeftRight
                fontSize={24}
                className="text-richblack-400"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-lg  font-inter">
                Chat on us
              </p>
              <p className="text-richblack-300 text-sm font-normal font-inter">
                Our friendly team is here to help.
              </p>
              <p className="text-richblack-300 text-sm font-normal font-inter">
                @mail address
              </p>
            </div>
          </div>

          <div className="flex gap-x-2">
            <div>
              <HiMiniChatBubbleLeftRight
                fontSize={24}
                className="text-richblack-400"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-lg  font-inter">
                Visit us
              </p>
              <p className="text-richblack-300 text-sm font-normal font-inter">
                Come and say hello at our office HQ.
              </p>
              <p className="text-richblack-300 text-sm font-normal font-inter">
                Here is the location/ address
              </p>
            </div>
          </div>

          <div className="flex gap-x-2">
            <div>
              <HiMiniChatBubbleLeftRight
                fontSize={24}
                className="text-richblack-400"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-lg  font-inter">
                Call us
              </p>
              <p className="text-richblack-300 text-sm font-normal font-inter">
                Mon - Fri From 8am to 5pm
              </p>
              <p className="text-richblack-300 text-sm font-normal font-inter">
                +123 456 7890
              </p>
            </div>
          </div>
        </div>
        <div className="px-5">
          <ContactUsForm />
        </div>

      </div>
        <section className="w-11/12 mx-auto">
        <div>
          Reviews from other learners
          {/* <ReviewSlider /> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
