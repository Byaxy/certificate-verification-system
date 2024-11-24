import { Link } from "react-router-dom";
import quickguide from "..//..//assets/quickguide.png"

const HowitWorks = () => {
  return (
    <div className=" my-20 py-4">
      <div className="text-center sm:text-[30px] text-[28px] font-bold mb-10">
        <h1>How Does Certificate Verification Work? </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col sm:gap-16 gap-10 justify-center">
          <div className="">
            <h1 className="font-semibold sm:text-[25px] text-[22px] mb-5">Quick Guide for administrators</h1>
            <p className="md:w-[80%] w-full text-gray-500">
              As an admin easily verify certificates without technical
              knowledge. The admin portal allows you to manage certificates data
              securely.
            </p>
          </div>
          <Link to={"/admin/quick_guide"}>
            <button className="text-white bg-slate-900 rounded px-5 py-3">
              Explore More
            </button>
          </Link>
        </div>
        <div>
            <img src={quickguide} alt="Quick Quide Image" />
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
