import {
  Camera,
  CircleCheck,
 
  LucideIcon,
  TriangleAlert,
  UsersRound,
  Users
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Employees",
          active: pathname.includes("/dashboard"),
          icon: Users,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/alert",
          label: "Alert",
          active: pathname.includes("/alert"),
          icon: TriangleAlert,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/users",
          label: "Users",
          active: pathname.includes("/users"),
          icon: UsersRound,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/cameras",
          label: "Cameras",
          active: pathname.includes("/cameras"),
          icon: Camera,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/actions",
          label: "Actions",
          active: pathname.includes("/actions"),
          icon: CircleCheck,
          submenus: [],
        },
      ],
    },
  ];
}
