const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const {
  courseEnrollmentEmail,
} = require("../mail/templates/courseEnrollmentEmail");
const { default: mongoose } = require("mongoose");

exports.capturePayment = async (req, res) => {
  const { courses } = req.body;
  const userId = req.user.id;

  if (courses.length === 0) {
    return res.json({
      success: false,
      message: "Please provide atleast 1 course",
    });
  }

  const totalAmount = 0;
  for (const course_id of courses) {
    let course;
    try {
      course = await Course.findById(course_id);
      if (!course) {
        return res.json({
          success: false,
          message: "Please provide valid course Id",
        });
      }
      const uId = new mongoose.Types.ObjectId(userId);
      if (course.studentsEnrolled.includes(uId)) {
        return res.json({
          success: false,
          message: "Student is already enrolled",
        });
      }
      totalAmount = course.price;
    } catch (err) {
      console.log(err.message);
    }
  }

  const options = {
    amount: totalAmount * 100,
    currency: "INR",
    receipt: Math.random(Date.now()).toString,
  };

  try {
    const payentResponse = await instance.orders.create(options);
    res.json({
      success: true,
      message: "Payment response created succesfully",
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.verifyPayment = async (req, res) => {
  const razorpay_order_id = req.body?.razorpay_order_id;
  const razorpay_payment_id = req.body?.razorpay_payment_id;
  const razorpay_signature = req.body?.razorpay_signature;
  const courses = req.body?.courses;
  const userId = req.user.id;

  if (
    !razorpay_order_id ||
    !razorpay_paymeny_id ||
    !razorpay_signature ||
    !courses ||
    !userId
  ) {
    return res.json({
      success: false,
      message: "Any field is missing, Payment Failed!!!",
    });
  }

  let body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    enrollStudents(courses, res, userId);

    return res.status(200).json({
      success: true,
      message: "Payment Verified",
    });
  }
  return res.json({
    sucess: false,
    message: "Payment Failed",
  });
};

const enrollStudents = async (courses, res, userId) => {
  if (!courses || !userId) {
    return res.status(400).json({
      success: false,
      message: "Courses or UserId not Found",
    });
  }
  for (const courseId of courses) {
    try {
      const enrolledCourse = await Course.findOneAndUpdate(
        {
          _id: courseId,
        },
        { $push: { studentsEnrolled: userId } },
        { new: true }
      );

      if (!enrolledCourse) {
        return res.status(400).json({
          success: false,
          message: "Course not found",
        });
      }

      const enrolledStudent = await User.findByIdAdnUpdate(
        userId,
        { $push: { courses: courseId } },
        { new: true }
      );

      const emailResponse = await mailSender(
        enrollStudents.email,
        `Successfully Enrolled to ${enrolledCourse.courseName}`,
        courseEnrollmentEmail(
          enrolledCourse.courseName,
          `${enrolledStudent.firstName} ${enrolledStudent.lastName}`
        )
      );
      console.log("Email Sent Succesfully", emailResponse);
    } catch (err) {
      console.log(err.message);
    }
  }
};
