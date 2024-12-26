import { FaArrowUp } from "react-icons/fa6";
import { RiPieChartFill } from "react-icons/ri";

const FixStats = () => {
  return (
    <div className="bg-white md:h-1/2 md:w-1/2  rounded-badge pt-2 shadow-2xl ">
      <div className="p-5">
        <div className="flex justify-between">
          <div className="text-4xl bg-purple-100 w-16 h-16 flex justify-center items-center rounded-full">
            <RiPieChartFill className="text-purple-400" />
          </div>
          <div>
            <div className="flex mt-5 text-blue-700">
              <FaArrowUp className="text-xl" />
              <span className="text-xl">14%</span>
            </div>
            <div>This Week</div>
          </div>
        </div>
        <div>
          <div className=" font-semibold">Issues Fixed</div>
          <div className="text-5xl font-bold">500K+</div>
        </div>
      </div>
    </div>
  );
};

export default FixStats;
