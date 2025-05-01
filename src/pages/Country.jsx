import { useEffect, useState, useTransition } from "react";
import { Postdata } from "../api/postData";
import { useCountryContext } from "../contextApi/ContextApi";
import { Loader } from "../component/Loader";
import { CountryCard } from "../component/CountryCards";
import { InputFild } from "../component/InputFild";
import { Pagination } from "../component/Pagination";
export const Country = () => {
  const [isPending, startTransition] = useTransition();

  const {
    countryData,
    setCountryData,
    inputdata,
    setInputdata,
    selectData,
    setSelectData,
  } = useCountryContext();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await Postdata();
        setCountryData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
  }, []);
  const isValid = (data, searchData) => {
    if (!searchData) return true;
    return data.toLowerCase().includes(searchData.toLowerCase());
  };

  const updatedData = countryData.filter(
    (country) =>
      isValid(country.name.common, inputdata) &&
      isValid(country.region, selectData)
  );

  const handelClick = (data) => {
    const sortData = [...updatedData].sort((a, b) =>
      data === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );
    setCountryData(sortData);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(updatedData.length / 6);
  const startIndex = (currentPage - 1) * 6;

  if (isPending) return <Loader />;
  return (
    <section className="py-9 bg-slate-950 text-white">
      <h1 className="text-center">
        <span className="font-bold text-xl">Total :</span> {updatedData.length}
      </h1>
      <div className="custom-container flex items-center flex-wrap gap-5 justify-between mt-6">
        <InputFild
          inputdata={inputdata}
          setInputdata={setInputdata}
          selectData={selectData}
          setSelectData={setSelectData}
          updatedData={updatedData}
          handelClick={handelClick}
        />
      </div>
      <h1 className="text-center mb-19 text-red-500">
        {!updatedData.length && "No country found for your search."}
      </h1>
      <ul className="custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {updatedData
          .slice(startIndex, startIndex + 6)
          .map((countryDatas, index) => (
            <CountryCard key={index} countryDatas={countryDatas} />
          ))}
      </ul>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
};
