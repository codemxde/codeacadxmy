import reward from "../../../assets/reward.svg";

export default function Rewards() {
  return (
    <div className="flex justify-between border rounded-lg py-5 items-center">
      <div className=" flex gap-3">
        {/* Rewards Image */}
        <img src={reward} width={"140"} alt="rewards" />

        <div className="flex flex-col text-sm">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold">EARN YOUR PAUSE/RESET CREDIT BACK AS REWARD</h1>
            <p className="px-2 py-1 rounded-xl bg-yellow-200 text-slate-500 font-medium">
              New
            </p>
          </div>
          <p className="text-slate-500">
            Start getting back on track to achieve your goals, & get back your credit as
            reward
          </p>
        </div>
      </div>

      <div className="p-2 mr-5 border justify-self-end rounded-xl border-blue-500">
        <p className="text-blue-400 font-normal">View Details</p>
      </div>
    </div>
  );
}
