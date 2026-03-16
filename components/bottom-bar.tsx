import { LuSettings2 } from "react-icons/lu";
import { MdLocationOn, MdStorefront } from "react-icons/md";


export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 w-full flex justify-between">
      <LuSettings2 className="text-4xl" />
      <MdLocationOn className="text-4xl" />
      <MdStorefront className="text-4xl" />
    </nav>
  );
}