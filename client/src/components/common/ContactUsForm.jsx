import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiconnector";
import { contactusEndpoint } from "../../services/api";
import countryCode from "../../data/countrycode.json";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessfull },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("send message data", data);
    try {
      setLoading(true);
      // const response = await apiConnector(
      //   "POST",
      //   contactusEndpoint.CONTACT_US_API,
      //   data
      // );
      const response = { satus: "OK" };
      console.log("response = ", response);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessfull) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        phoneNo: "",
        message: "",
      });
    }
  }, [isSubmitSuccessfull, reset]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="w-max">
        <div className="flex justify-between gap-x-6 w-max">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              {...register("firstname", { required: true })}
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              {...register("lastname")}
            />
          </label>
        </div>

        <label htmlFor="">
          <p className="mt-2 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            name="email"
            id="email"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Enter email properly...</span>}
        </label>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="mt-2 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Phone <sup className="text-pink-200">*</sup></label>
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-x-4">
              <select
                name="dropdown"
                id="dropdown"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-[4.5rem] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                {...register("country code", { required: true })}
              >
                {countryCode.map((data, index) => (
                  <option value={data.code} key={index}>
                    {data.code}-{data.country}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phoneNo"
                id="phoneNo"
                placeholder="+12345 67890"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                max="10"
                {...register("phoneNo", {
                  required: true,
                  maxLength: { value: 10, message: "Invalid phone number" },
                  minLength: { value: 8, message: "Invalid phone number" },
                })}
              />
              {errors.phoneNo && <span>{errors.phoneNo.message}</span>}
            </div>
          </div>
        </div>

        <label htmlFor="">
          <p className="mt-2 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Message <sup className="text-pink-200">*</sup></p>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            {...register("message", { required: true })}
          />
          {errors.message && <span>Please enter your message...</span>}
        </label>
        <button
          type="submit"
          className="rounded-md bg-yellow-50 text-center px-5 py-2 text-base w-full mt-2"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
