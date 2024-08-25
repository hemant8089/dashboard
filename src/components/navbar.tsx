import { UserNavMenu } from "./sidebar/global-nav-user-menu";
import { SheetMenu } from "./sidebar/sheet-menu";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-2 z-10 w-[96%] md:w-[98%] shadow-md bg-[#fff] dark:shadow-secondary mx-2 md:mx-4 rounded-md">
      <div className="mx-4 sm:mx-10 flex  h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-semibold text-[1.5rem] text-gray-600">{title}</h1>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <UserNavMenu />
        </div>
      </div>
    </header>
  );
}
