import { Ellipsis, LogOut } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Settings from "@mui/icons-material/Settings"

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Link, useLocation } from "react-router-dom";
import { CollapseMenuButton } from "./collapse-menu-button";
import { getMenuList } from "@/lib/menu-list";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const pathname = useLocation();
  const menuList = getMenuList(pathname.pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block  bg-[#173c6b] h-[100%]">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col  min-h-[80vh] lg:min-h-[75vh] items-start space-y-1">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                  {groupLabel}
                </p>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger className="w-full">
                      <div className="w-full flex justify-center items-center">
                        <Ellipsis className="h-5 w-5" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <p className="pb-4"></p>
              )}
              {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) =>
                  submenus.length === 0 ? (
                    <div className="w-full" key={index}>
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Button
                              variant={active ? "active" : "custom"}
                              className="w-full justify-start h-10 group"
                              asChild
                            >
                              <Link to={href}>
                                <span
                                  className={cn(
                                    isOpen === false
                                      ? ""
                                      : "mr-4 group-hover:text-blue transition-all duration-300",active ? "text-white" : "text-white"
                                  )}
                                >
                                  <Icon size={22} />
                                </span>
                                <p
                                  className={cn(
                                    "max-w-[200px] truncate text-white",
                                    isOpen === false
                                      ? "-translate-x-96 opacity-0"
                                      : "translate-x-0 opacity-100"
                                  )}
                                >
                                  {label}
                                </p>
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          {isOpen === false && (
                            <TooltipContent side="right">
                              {label}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <div className="w-full" key={index}>
                      <CollapseMenuButton
                        icon={Icon}
                        label={label}
                        active={active}
                        submenus={submenus}
                        isOpen={isOpen}
                      />
                    </div>
                  )
              )}
            </li>
          ))}
          <li className="w-full grow flex items-end">
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => {}}
                    variant="custom"
                    className="w-full justify-start h-10 mt-5"
                  >
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <LogOut size={18} className="text-white" />
                    </span>
                    <p
                      className={cn(
                        "whitespace-nowrap text-white",
                        isOpen === false ? "opacity-0 hidden" : "opacity-100"
                      )}
                    >
                      Logout
                    </p>
                  </Button>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side="right">Sign out</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>

          </li>


          <li className=" w-full ">
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => {}}
                    variant="custom"
                    className="w-full justify-start  "
                  >
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                    <Settings sx={{color:'white'}}/>
                     
                    </span>
                    <p
                      className={cn(
                        "whitespace-nowrap text-white",
                        isOpen === false ? "opacity-0 hidden" : "opacity-100"
                      )}
                    >
                      Settings
                    </p>
                  </Button>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side="right">Sign out</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>

          </li>


          {/* <li >
            <Settings></Settings>

          </li> */}
        </ul>
      </nav>
    </ScrollArea>
  );
}
