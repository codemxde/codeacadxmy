import Calender from "./Calender";
import CourseDetails from "./CourseDetails";

export default function CourseTile() {
  return (
    <>
      <div className="grid grid-cols-[1fr_4fr] p-5 rounded-lg shadow-lg border">
        <Calender />
        <CourseDetails />
      </div>
    </>
  );
}
