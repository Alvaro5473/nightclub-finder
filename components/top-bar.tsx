import { MdSearch } from "react-icons/md";

export default function TopBar() {
  return (
    <header className="fixed top-0 w-full flex items-center justify-between">
      <p className="font-bold">Nightclub Finder</p>
      <MdSearch className="text-4xl" />
    </header>
  );
}