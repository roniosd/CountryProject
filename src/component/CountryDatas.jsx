import contryData from "../api/countries_data.json";
export const CountryDatas = () => {
  return (
    <section className="py-17 bg-slate-950 text-white">
      <div className="custom-container">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl lg:text-5xl w-200 font-bold text-center">
            Here are the interesting Facts we`re proud of
          </h1>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-30">
          {contryData.map(({id,countryName,capital,population,interestingFact}) => (
            <li
              className="card"
              key={id}
            >
              <h2 className="text-3xl font-extrabold text-white mb-2">
                {countryName}
              </h2>
              <h2 className="text-lg text-gray-300 mb-1">
                <span className="font-semibold text-gray-100">Capital:</span>{" "}
                {capital}
              </h2>
              <h2 className="text-lg text-gray-300 mb-1">
                <span className="font-semibold text-gray-100">Population:</span>{" "}
                {population.toLocaleString()}
              </h2>
              <h2 className="text-md text-gray-400 italic">
                {interestingFact.length >= 70 ? interestingFact.slice(0,70)+"..." : interestingFact }
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
