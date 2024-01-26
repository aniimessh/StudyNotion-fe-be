import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Navbar } from "./components/common/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OpenRoute from "./components/core/Auth/OpenRoute";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/profile/MyProfile";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import PageNotFound from "./components/common/PageNotFound";
import MySetting from "./components/core/Dashboard/settings/MySetting";
import ContactUs from "./pages/ContactUs";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/cart";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants";
import InstructorCourses from "./components/core/Dashboard/InstructorDashboard/InstructorCourses";
import AddCourse from "./components/core/Dashboard/InstructorDashboard/AddCourse";

function App() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="w-screen min-h-screen bg-richblack-800 flex flex-col font-inte">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ResetPassword />
            </OpenRoute>
          }
        />

        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<MySetting />} />
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="dashboard/cart" element={<Cart />} />
              <Route path="dashboard/wishlist" element={<Cart />} />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route
                path="dashboard/my-courses"
                element={<InstructorCourses />}
              />
              <Route
                path="dashboard/add-course"
                element={<AddCourse />}
              />
            </>
          )}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
