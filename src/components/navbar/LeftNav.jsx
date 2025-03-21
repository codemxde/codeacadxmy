import search from "../../assets/search.svg";
import masters from "../../assets/masters.svg";
import rupee from "../../assets/rupee.svg";

export default function LeftNav() {
  return (
    <div className="flex gap-7 items-center">
      {/* Hamburger */}
      <div className="p-2 ml-4">
        <i className="fa-solid fa-bars text-2xl"></i>
      </div>
      {/* Manage Course */}
      <div className="flex flex-col self-stretch items-center p-2 gap-y-2 bg-white">
        <div className="p-1 px-2 bg-red-100 rounded-lg">
          <h1 className="text-red-400">🔴 Course Paused</h1>
        </div>
        <h1 className="text-blue-600">Manage Batch/Timings</h1>
      </div>

      {/* Search icon */}
      <div>
        <img src={search} alt="search" />
      </div>

      {/* MS Degree from Europe */}
      <div className="p-3 flex gap-1 border rounded-lg border-purple-400">
        <img src={masters} alt="" />
        <h1>MS Degree from Europe</h1>
      </div>

      {/* Refer */}
      <div className="flex gap-1 p-2 bg-white rounded-lg border border-black text-sm">
        <img src={rupee} width={"16"} alt="" />
        <h1 className="text-slate-600 font-semibold">Refer & Earn</h1>
      </div>
    </div>
  );
}
