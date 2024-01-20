import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile } from "../../../../services/operations/settingAPI";
import { useNavigate } from "react-router-dom";

const DeleteAccountSection = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex gap-x-4">
      <div className="">
        <div className="bg-pink-600 grid place-items-center p-3 rounded-full w-max">
          <RiDeleteBinLine fontSize={24} className="text-pink-200" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="font-bold text-white text-lg font-inter ">
          Delete Account
        </p>
        <div>
          <p className="text-sm text-pink-25  font-medium">
            Would you like to delete account?
          </p>
          <p className="text-sm text-pink-25 w-3/4 font-medium">
            This account contains Paid Courses. Deleting your account will
            remove all the contain associated with it.
          </p>
        </div>
        <button
          className="text-pink-300 font-medium italic font-inter flex w-max"
          onClick={() => dispatch(deleteProfile(token, navigate))}
        >
          I want to delete my account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountSection;
