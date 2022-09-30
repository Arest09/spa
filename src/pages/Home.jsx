import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClockLoader";

import { AllCategories } from "../api";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);


  const [searchParams, setSearchParams] = useSearchParams({});
  console.log(searchParams.get("str"));

  const handleSearch = (str) => {
    setSearchParams({ str });
    setFilteredCatalog(
      catalog.filter((item) => {
        return item.strCategory.toLowerCase().includes(str.toLowerCase());
      })
    );
  };

  useEffect(() => {
    AllCategories().then((data) => {
      setTimeout(() => {
        setCatalog(data.categories);
        setFilteredCatalog(
          searchParams.get("str")
            ? data.categories.filter((item) => {
                return item.strCategory
                  .toLowerCase()
                  .includes(searchParams.get("str").toLocaleLowerCase());
              })
            : data.categories
        );
      }, 500);
    });
  }, []);

  return (
    <>
      <Search cb={handleSearch} />
      {catalog.length ? (
        <CategoryList catalog={filteredCatalog} />
      ) : (
        <ClipLoader size={50} className="m-auto" />
      )}
    </>
  );
}

export { Home };
