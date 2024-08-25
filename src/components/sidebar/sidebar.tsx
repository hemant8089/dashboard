import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { useStore } from "@/hooks/use-store";
import { Link } from "react-router-dom";
import { SidebarToggle } from "./sidebar-toggle";
import { Menu } from "./sidebar-menu";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { Separator } from "@radix-ui/react-dropdown-menu";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-[98%] -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 bg-white text-white m-2 rounded-md hidden md:flex",
        sidebar?.isOpen === false ? "w-[70px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative w-full h-full flex flex-col   overflow-y-auto overflow-x-hidden shadow-md dark:shadow-zinc-800 ">
        <Button
          className={cn(
            "transition-transform   ease-in-out duration-300 h-[5rem]",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link to="/dashboard" className="flex items-center gap-2">
          {/* <img className="max-w-[2rem]" src="src/assets/logo.png" alt="" /> */}
            {/* <h1
              className={cn(
                "font-bold text-3xl whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300 text-white",
                sidebar?.isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            >
              Cipla
            </h1> */}
          </Link>
        </Button>
        <Separator className="bg-white/20 h-[1px] " />
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}
