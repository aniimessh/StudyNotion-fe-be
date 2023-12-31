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
            <p>First name</p>
            <input
              type="text"
              className=""
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              {...register("firstname", { required: true })}
            />
          </label>
          <label>
            <p>Last name</p>
            <input
              type="text"
              className=""
              name="lastname"
              id="lastname"
              placeholder="Enter last name"
              {...register("lastname")}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="">
            <p>Email</p>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>Enter email properly...</span>}
          </label>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Phone number</label>
            <div className="flex flex-row gap-4">
              <div>
                <select
                  name="dropdown"
                  id="dropdown"
                  className="w-[44px]"
                  {...register("country code", { required: true })}
                >
                  {countryCode.map((data, index) => (
                    <option value={data.code} key={index}>
                      {data.code}-{data.country}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="tel"
                name="phoneNo"
                id="phoneNo"
                placeholder="+12345 67890"
                className="w-full"
                max="10"
                {...register("phoneNo", {
                  required: true,
                  maxLength: { value: 10, message: "Invalid phone number" },
                  minLength: { value: 8, message: "Invalid phone number"},
                })}
              />
              {
                errors.phoneNo && (
                  <span>{errors.phoneNo.message}</span>
                )
              }
            </div>
          </div>

          <label htmlFor="">
            <p>Message</p>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter your message"
              className="w-full"
              {...register("message", { required: true })}
            />
            {errors.message && <span>Please enter your message...</span>}
          </label>
        </div>
        <button
          type="submit"
          className="rounded-md bg-yellow-50 text-center px-5 py-2 text-base w-full"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
