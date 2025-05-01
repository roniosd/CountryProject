import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { useEffect, useTransition } from "react";
import { useCountryContext } from "../contextApi/ContextApi";
import { PostdataDetails } from "../api/postData";

export const CountryDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [isPending, startTransition] = useTransition();

  const { details, setDetails } = useCountryContext();
  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await PostdataDetails(params.id);
        if (res.status === 200) setDetails(res.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
  }, []);
  if (!details || details.length === 0) {
    return (
      <p className="text-center text-gray-500">No country details found.</p>
    );
  }
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flags,
  } = details;

  if (isPending) return <Loader />;

  return (
    <section className="py-19 bg-gray-900 text-white">
      <h1 className="text-3xl lg:text-5xl text-center w-full block font-bold mb-15">
        The Deatails of{" "}
        <span className="text-yellow-400 lg:text-6xl">{name.common}</span>
      </h1>
      <div className="custom-container w-full flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-md rounded-lg shadow-lg animate-pulse"
            src={flags.svg}
            alt={`${name.common} Flag`}
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700">
            <p className="text-lg">
              <span className="font-semibold text-gray-400">
                Official Name :{" "}
              </span>{" "}
              {name.official}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-400">Region : </span>
              {region}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-400">Subregion : </span>
              {subregion}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-400">Capital : </span>
              {capital[0] || "N/A"}
            </p>
            <p className="text-lg mb-5">
              <span className="font-semibold text-gray-400">Population : </span>
              {population.toLocaleString()}
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              Additional Information
            </h2>

            <p className="text-lg">
              <span className="font-semibold text-gray-400">
                Top-Level Domain :
              </span>
              {tld.join(", ")}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-400">Currency : </span>
              {Object.values(currencies)
                .map((c) => `${c.name} (${c.symbol})`)
                .join(", ")}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-400">Languages : </span>
              {Object.values(languages).join(", ")}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-400">Borders : </span>
              {borders?.join(", ") || "None"}
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="absolute top-25 lg:top-20 right-5 px-5 py-2 border text-lg font-bold rounded-2xl"
          >
            Back
          </button>
        </div>
      </div>
    </section>
  );
};
