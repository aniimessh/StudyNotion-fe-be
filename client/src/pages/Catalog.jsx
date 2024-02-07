import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/common/Footer";
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
        console.log("PRinting res: ", res);
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
        <p>Home / Catalog / 
          <span>{catalogPageData?.data?.selectedCategory?.name}</span>
        </p>
        <p>{catalogPageData?.data?.selectedCategory?.name}</p>
        <p>{catalogPageData?.data?.selectedCategory?.description}</p>
      </div>

      <div>
        <section>
          <div>
            <div>
              
            </div>
            <div className="flex gap-x-2">
              <p>Most Popular</p>
              <p>New</p>
              <p>Trending</p>
            </div>
            {/* <CourseSlider /> */}
          </div>
        </section>

        <section>
          <p>Top courses in Python and Machine Learning</p>
          <div>{/* <CourseSlider /> */}</div>
        </section>

        <section>
          <p>Frequently Bought Together</p>
          <div>{/* <CourseSlider /> */}</div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
