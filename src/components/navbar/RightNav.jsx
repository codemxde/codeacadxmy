import ssb from "../../assets/ssb.svg";
import streak from "../../assets/streak.svg";
import coin from "../../assets/coin.svg";
import stats from "../../assets/stats.svg";
import bell from "../../assets/bell.svg";

export default function RightNav() {
  return (
    <div className="flex items-center gap-10 p-3 mr-8">
      {/* School of business */}
      <div>
        <img src={ssb} alt="scaler school of business" />
      </div>

      {/* Streak */}
      <div className="flex gap-1">
        <img src={streak} alt="streak" />
        <span>0</span>
      </div>

      {/* Coin */}
      <div className="flex gap-1">
        <img src={coin} alt="" />
        <span>667</span>
      </div>

      {/* Stats */}
      <div>
        <img src={stats} alt="" />
      </div>

      {/* Notifications */}
      <div>
        <img src={bell} alt="" />
      </div>

      {/* User */}
      <div>
        <div className="p-1 px-4 bg-white rounded-xl">
          <h1 className="font-semibold">Keshav</h1>
        </div>
      </div>
    </div>
  );
}
