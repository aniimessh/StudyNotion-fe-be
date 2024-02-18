import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/common/Footer";
import CardCourse from "../components/core/Catalog/CardCourse";
import CourseSlider from "../components/core/Catalog/CourseSlider";
import { catalogData, categories } from "../services/api";
import { apiConnector } from "../services/apiconnector";
import { getCatalogPageData } from "../services/operations/getCatalogPageData";

const Catalog = () => {
  const { catalogName } = useParams();

  const [categoryId, setCategoryId] = useState(null);
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [active, setActive] = useState(1);

  console.log("Catalog Page Data ====>", catalogPageData);

  useEffect(() => {
    const getCategory = async () => {
      const res = await apiConnector("GET", categories.CATEGORIES_API);

      const category_id = res?.data?.data.filter(
        (ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName
      )[0]._id;
      setCategoryId(category_id);
    };
    getCategory();
  }, [catalogName]);

  useEffect(() => {
    const getCategoryDetails = async () => {
      try {
        const res = await getCatalogPageData(categoryId);
        setCatalogPageData(res);
      } catch (error) {
        console.log(error);
      }
    };
    if (categoryId) {
      getCategoryDetails();
    }
    getCategoryDetails();
  }, [categoryId]);
  return (
    <div className="">
      <div className="bg-richblack-700 w-full">
        <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent flex flex-col gap-y-4">
          <p className="text-richblack-300 font-inter font-normal">
            Home / Catalog /
            <span className="text-yellow-50 font-medium">
              {" "}
              {catalogPageData?.data?.selectedCategory?.name}
            </span>
          </p>
          <p className="text-3xl font-inter text-white">
            {catalogPageData?.data?.selectedCategory?.name}
          </p>
          <p className="text-base font-inter text-richblack-300">
            {catalogPageData?.data?.selectedCategory?.description}
          </p>
        </div>
      </div>

      <div>
        <section className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
          <div>
            <p className="text-3xl text-white font-inter font-semibold mb-4">
              Courses to get you started
            </p>
            <div className="flex gap-x-2 border-b border-richblack-700 mb-4">
              <p
                className={`px-4 py-2 ${
                  active === 1
                    ? "border-b border-b-yellow-25 text-yellow-25"
                    : "text-richblack-50"
                } cursor-pointer font-inter`}
                onClick={() => setActive(1)}
              >
                Most Populer
              </p>
              <p
                className={`px-4 py-2 ${
                  active === 2
                    ? "border-b border-b-yellow-25 text-yellow-25"
                    : "text-richblack-50"
                } cursor-pointer font-inter`}
                onClick={() => setActive(2)}
              >
                New
              </p>
              <p
                className={`px-4 py-2 ${
                  active === 3
                    ? "border-b border-b-yellow-25 text-yellow-25"
                    : "text-richblack-50"
                } cursor-pointer font-inter text-base`}
                onClick={() => setActive(3)}
              >
                Trending
              </p>
            </div>
            <div>
              <CourseSlider
                Courses={catalogPageData?.data?.selectedCategory?.courses}
              />
            </div>
          </div>
        </section>

        <section className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
          <p className="text-3xl text-white font-inter font-semibold mb-4">
            Top courses in {catalogPageData?.data?.selectedCategory?.name}
          </p>
          <div>
            <CourseSlider
              Courses={catalogPageData?.data?.differentCategory?.courses}
            />
          </div>
        </section>

        <section className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
          <p className="text-3xl text-white font-inter font-semibold">
            Frequently Bought Together
          </p>
          <div className="py-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {catalogPageData?.data?.mostSellingCourses
                ?.slice(0, 4)
                .map((course, index) => {
                  return <CardCourse course={course} key={index} />;
                })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
