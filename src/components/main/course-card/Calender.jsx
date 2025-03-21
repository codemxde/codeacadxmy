import calender from "../../../assets/calender.svg";

export default function Calender() {
  return (
    <div className="flex flex-col gap-2 mt-10 items-center">
      <img src={calender} width={"50"} alt="" />
      <h1 className="text-slate-400">SCHEDULED</h1>
    </div>
  );
}
