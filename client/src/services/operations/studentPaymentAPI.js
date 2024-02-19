import toast from "react-hot-toast";
import { studentEndpoints } from "../api";
import { apiConnector } from "../apiconnector";
import rzp_logo from "../../assets/Logo/rzp_logo.png";
import { resetCart } from "../../slices/cartSlice";
import { setPaymentLoading } from "../../slices/courseSlice";

const {
  COURSE_PAYMENT_API,
  COURSE_VERIFY_API,
  SEND_PAYMENT_SUCCESS_EMAIL_API,
} = studentEndpoints;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const buyCourse = async (
  token,
  courses,
  userDetails,
  navigate,
  dispatch
) => {
  const toastId = toast.loading("Loading");
  try {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      return toast.error("Faild to load Script");
    }
    const orderResponse = await apiConnector(
      "POST",
      COURSE_PAYMENT_API,
      { courses },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("ORDER RESPONSE RESULT :", orderResponse);
    if (!orderResponse.data.success) {
      throw new Error(orderResponse.data.message);
    }

    const options = {
      key: "rzp_test_nDiDVZ0ZUjwIpc",
      currency: orderResponse.data.data.currency,
      description: "Thank You",
      amount: orderResponse.data.data.amount,
      image: rzp_logo,
      prefill: {
        name: `${userDetails.firstName}`,
        email: userDetails.email,
      },
      order_id: orderResponse.data.data.id,
      name: "Study Notion",
      handler: function (response) {
        console.log(response);
        sendPaymentSuccessEmailAPI(
          response,
          orderResponse.data.data.amount,
          token
        );
        verifyPayment(
          {
            ...response,
            courses,
          },
          token,
          navigate,
          dispatch
        );
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      toast.error("Somewthing went wrong");
      console.log(response);
    });
  } catch (err) {
    console.log(err.message);
  }
  toast.dismiss(toastId);
};

async function sendPaymentSuccessEmailAPI(response, amount, token) {
  try {
    await apiConnector(
      "POST",
      SEND_PAYMENT_SUCCESS_EMAIL_API,
      {
        order_id: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        amount,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  } catch (err) {
    console.log(err.message);
  }
}

async function verifyPayment(bodyData, token, navigate, dispatch) {
  const toastId = toast.loading("Loading");
  dispatch(setPaymentLoading(true));
  try {
    const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
      Authorization: `Bearer ${token}`,
    });
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Payment Succesfull");
    navigate("/dashboard/enrolled-courses");
    dispatch(resetCart());
  } catch (err) {
    console.log("ERROR WHILE VERIFYING PAYMENT", err.message);
  }
  toast.dismiss(toastId);
  dispatch(setPaymentLoading(false));
}
