import toast from "react-hot-toast";
import { catalogData } from "../api";
import { apiConnector } from "../apiconnector";

const { CATALOGPAGEDATA_API } = catalogData;

export const getCatalogPageData = async (categoryId) => {
  let result = [];
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CATALOGPAGEDATA_API, {
      categoryId: categoryId,
    });
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response?.data;
  } catch (err) {
    console.log("GET CATALOG PAGE API ERROR.....", err);
  }
  toast.dismiss(toastId);
  return result;
};
