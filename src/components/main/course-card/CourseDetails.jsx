import CourseMetadata from "./CourseMetadata";
import Rewards from "./Rewards";

export default function CourseDetails() {
  return (
    <div className="flex flex-col gap-y-7">
      <div className="p-2 self-start bg-blue-100 rounded-xl">
        <p className="text-blue-500">Resume Scheduled</p>
      </div>

      <h1 className="text-slate-600 text-lg font-medium">
        Your Course will be resumed in...
      </h1>
      <p className="text-slate-600 text-lg font-medium">16d 08h 37m</p>

      <CourseMetadata />

      <Rewards />
    </div>
  );
}
