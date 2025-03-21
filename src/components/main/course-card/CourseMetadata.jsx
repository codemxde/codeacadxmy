export default function CourseMetadata() {
  return (
    <>
      <div className="flex gap-10 text-sm">
        <div className="flex gap-1 ">
          <h2 className="font-medium">Date of Resume:</h2>
          <p className="text-slate-400">6 Apr 2025</p>
        </div>

        <div className="flex gap-1 ">
          <h2 className="font-medium">New Batch:</h2>
          <p className="text-slate-400">Academy Mar25 Intermediate Morning</p>
        </div>

        <div className="flex gap-1 ">
          <h2 className="font-medium">Instructor:</h2>
          <p className="text-slate-400">Harsha Shetty</p>
        </div>
      </div>

      <div className="flex gap-1 text-sm">
        <h2 className="font-medium">Next Lecture</h2>
        <p className="text-slate-400">DSA Arrays 1: One Dimensional </p>
      </div>
    </>
  );
}
