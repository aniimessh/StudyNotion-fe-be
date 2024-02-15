import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/common/Footer";
import CardCourse from "../components/core/Catalog/CardCourse";
import CourseSlider from "../components/core/Catalog/CourseSlider";
import { catalogData, categories } from "../services/api";
import { apiConnector } from "../services/apiconnector";
import { getCatalogPageData } from "../services/operations/getCatalogPageData";

const Catalog = () => {
  const { catalogName } = useParams();

  const [categoryId, setCategoryId] = useState("");
  const [catalogPageData, setCatalogPageData] = useState(null);

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
    <div>
      <div>
        <p>
          Home / Catalog /
          <span>{catalogPageData?.data?.selectedCategory?.name}</span>
        </p>
        <p>{catalogPageData?.data?.selectedCategory?.name}</p>
        <p>{catalogPageData?.data?.selectedCategory?.description}</p>
      </div>

      <div>
        <section>
          <div>
            <div></div>
            <div className="flex gap-x-2">
              <p>Most Popular</p>
              <p>New</p>
              <p>Trending</p>
            </div>
            <div>
              <CourseSlider
                Courses={catalogPageData?.data?.selectedCategory?.courses}
              />
            </div>
          </div>
        </section>

        <section>
          <p>Top courses in {catalogPageData?.data?.selectedCategory?.name}</p>
          <div>
            <CourseSlider
              Courses={catalogPageData?.data?.differentCategory?.courses}
            />
          </div>
        </section>

        <section className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
          <p>Frequently Bought Together</p>
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
