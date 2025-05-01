import cardData from "../api/CardDetails.json";
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";
export const Contact = () => {
  const iconMap = {
    MdLocalPhone: <MdLocalPhone />,
    MdEmail: <MdEmail />,
    MdLocationOn: <MdLocationOn />,
  };
  return (
    <section className="bg-slate-800 py-10">
      <ul className="custom-container px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between text-white">
        {cardData.map((items) => (
          <li
            key={items.id}
            className="py-7 px-5 w-full lg:w-85 rounded-xl flex items-center gap-4 hover:border-amber-400 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-400/40"
          >
            <span className="text-6xl text-green-400">
              {iconMap[items.icon]}
            </span>
            <div>
              <h2 className="text-2xl mb-2 font-bold group-hover:text-amber-400 transition-all">
                {items.title}
              </h2>
              <p className="text-slate-300">{items.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
