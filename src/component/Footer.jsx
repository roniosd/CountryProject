import { NavLink } from "react-router-dom";
import {
  MdHomeFilled,
  MdContactMail,
  MdPublic,
  MdPerson,
} from "react-icons/md";
import links from "../api/footerdata.json";
import { Contact } from "./ContactDetails";

export const Footer = () => {
  const AllLink = {
    MdHomeFilled: <MdHomeFilled />,
    MdContactMail: <MdContactMail />,
    MdPublic: <MdPublic />,
    MdPerson: <MdPerson />,
  };
  return (
    <footer className="bg-slate-900 text-white">
      <Contact />
      <div className="flex flex-col items-center gap-5 mt-10">
        <ul className="flex gap-6 capitalize">
          {links.map((items) => (
            <li key={items.link}>
              <NavLink
                className="flex items-center flex-col gap-2 text-slate-300 hover:text-amber-400 transition-all"
                to={items.link === "home" ? "/" : `/${items.link}`}
              >
                <span className="text-3xl size-12 border border-slate-700 rounded-full flex items-center justify-center p-3 bg-slate-800 hover:bg-amber-400 hover:text-black transition-all duration-300">
                  {AllLink[items.icon]}
                </span>
                <span>{items.link}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <p className="w-full text-center py-3 bg-slate-900 text-slate-400 border-t border-slate-700">
          © {new Date().getFullYear()} Roni Dev. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
