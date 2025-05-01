import { createContext, useContext, useState } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [details, setDetails] = useState();
  const [inputdata, setInputdata] = useState("");
  const [selectData, setSelectData] = useState("");
  return (
    <CountryContext.Provider
      value={{
        active,
        setActive,
        countryData,
        setCountryData,
        details,
        setDetails,
        inputdata,
        setInputdata,
        selectData,
        setSelectData,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => useContext(CountryContext);
