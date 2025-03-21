import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

export default function Navbar() {
  return (
    <nav className="col-span-full bg-blue-50 flex justify-between">
      {/* Firt nav flex item */}
      <LeftNav />

      {/* Second Nav Flex Item */}
      <RightNav />
    </nav>
  );
}
