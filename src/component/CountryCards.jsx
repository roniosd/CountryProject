import { NavLink } from "react-router-dom";
import { Button } from "../component/Button";
import { IoMdArrowRoundForward } from "react-icons/io";
export const CountryCard = ({ countryDatas }) => {
  const { flags, name, population, capital, region } = countryDatas;
  return (
    <li className="card">
      <img
        className="w-full h-40 object-cover"
        src={flags.svg}
        alt={`${name.common} flag`}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name.common}</h2>
        <p>🌍 Region: {region}</p>
        <p>🏙️ Capital: {capital[0] || "N/A"}</p>
        <p className="mb-5">👥 Population: {population.toLocaleString()}</p>
        <NavLink to={`/country/${name.common}`}>
          <Button className="group">
            See More
            <IoMdArrowRoundForward className="transition-transform group-hover:translate-x-1 group-hover:text-2xl group-hover:text-amber-400" />
          </Button>
        </NavLink>
      </div>
    </li>
  );
};
