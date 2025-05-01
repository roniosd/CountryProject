import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useCountryContext } from "../contextApi/ContextApi";

export const Header = () => {
  const Navlinks = ["home", "about", "country", "contact"];
  const {active, setActive} = useCountryContext();
  return (
    <>
      <header className="py-4 bg-slate-800 text-white">
        <div className="custom-container flex items-center justify-between">
          <div className="text-2xl font-bold">
            <NavLink className="not-active" to=""><span className="text-amber-300 text-3xl">Roni</span> Dev</NavLink>
          </div>
          <nav className={`lg:flex ${active ? "nav-link" : "hidden"}`}>
            <ul onClick={()=> setActive(!active)} className="flex gap-5 text-xl font-normal">
              {Navlinks.map((items) => {
                return (
                  <li key={items} className="capitalize hover:text-amber-400">
                    <NavLink   to={items === "home" ? "/": `/${items}`} >{items}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="lg:hidden">
            <button onClick={()=> setActive(!active)} className="font-bold text-5xl"><MdMenu /></button>
          </div>
        </div>
      </header>
    </>
  );
};
