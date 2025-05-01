import { NavLink } from "react-router-dom";
import { Button } from "../component/Button";
import { MdArrowOutward } from "react-icons/md";
export const Herosection = () => {
  return (
    <section className="min-h-screen text-white py-10 flex items-center">
      <div className="custom-container max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-5">
        <div className="order-2 lg:order-1 max-w-2xl lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Explore the <span className="text-amber-400">World</span>, One
            Country at a Time.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <NavLink to="country">
            <Button className="group">
              Start Exploring
              <MdArrowOutward className="transition-transform group-hover:translate-x-1 group-hover:text-2xl group-hover:text-amber-400" />
            </Button>
          </NavLink>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="flex items-center justify-center">
            <img
              className="w-4/5 lg:w-full"
              src="/world.png"
              alt="World"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
