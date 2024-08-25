


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { Ellipsis, Plus } from "lucide-react";
import { AddUserForm } from "./add-user-form";
import Toggle from "../ui/toggle-button";

import {
  fetchAllUsers,
  toggleUserStatus,
 
} from "@/redux/api/userDetailsSlice";
import { AppDispatch } from "@/redux/store";

const ITEMS_PER_PAGE = 5;
const PAGE_BUTTON_LIMIT = 6;
// interface User {
//   username: string;
//   email: string;
//   role: string;
//   status: boolean;
// }

export function UsersTable() {
  const dispatch = useDispatch<AppDispatch>();

  const { users } = useSelector((state:any) => state.users);
  // const [newUser, setNewUser] = useState<User>({
  //   username: '',
  //   email: '',
  //   role: '',
  //   status: true, // default status
  // });
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const handleChangePage = (page:any) => {
    setCurrentPage(page);
    setShowAll(false);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const getPaginatedData = () => {
    if (showAll) return users;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return users.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    let startPage = Math.max(
      1,
      currentPage - Math.floor(PAGE_BUTTON_LIMIT / 2)
    );
    let endPage = Math.min(totalPages, startPage + PAGE_BUTTON_LIMIT - 1);

    if (endPage - startPage < PAGE_BUTTON_LIMIT - 1) {
      startPage = Math.max(1, endPage - PAGE_BUTTON_LIMIT + 1);
    }

    for (let page = startPage; page <= endPage; page++) {
      pageButtons.push(
        <Button
          key={page}
          size="sm"
          onClick={() => handleChangePage(page)}
          disabled={currentPage === page}
          variant="tag"
        >
          {page}
        </Button>
      );
    }

    return pageButtons;
  };

  // const handleAddUser = (newUser:any) => {
  //   dispatch(addUser(newUser));
  // };

  const handleToggleStatus = (userId:string, currentStatus:boolean) => {
    dispatch(toggleUserStatus({ userId, status: !currentStatus }));
  };

  return (
    <div className="w-full h-full flex flex-col items-start gap-3 mt-3">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-lg font-medium">User Details</h1>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue text-white">
                <Plus className="size-4 shrink-0 mr-2" />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[400px] md:w-full rounded-md">
              <DialogHeader>
                <DialogTitle className="font-medium text-2xl">
                  Add New User
                </DialogTitle>
              </DialogHeader>
              <AddUserForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="w-full">
        <Table>
          <TableHeader>
            <TableRow className="rounded-md text-black">
              <TableHead>S.no</TableHead>
              <TableHead className="text-left text-black">User name</TableHead>
              <TableHead className="text-left text-black">Email</TableHead>
              <TableHead className="text-left text-black">Created</TableHead>
              <TableHead className="text-left text-black">Role</TableHead>
              <TableHead className="text-left text-black">Status</TableHead>
              <TableHead className="text-left text-black ">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getPaginatedData().map((user:any, index:any) => (
              <TableRow key={user.id}>
                <TableCell className="font-normal text-muted-foreground">
                  {index + 1 + (currentPage - 1) * ITEMS_PER_PAGE}
                </TableCell>
                <TableCell className="flex gap-2">{user.name}</TableCell>
                <TableCell className="flex gap-2">{user.email}</TableCell>
                <TableCell className="flex gap-2">{user.created}</TableCell>
                <TableCell className="flex gap-2">{user.role}</TableCell>
                <TableCell className="flex gap-2">
                  <Toggle
                    userStatus={user.status}
                    onToggle={() => handleToggleStatus(user.id, user.status)}
                  />
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" className="bg-white text-gray-400">
                        <Ellipsis className="size-6 shrink-0" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-5">
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex w-full justify-center mt-4 space-x-2">
        {totalPages > 1 && (
          <>
            {currentPage > Math.ceil(PAGE_BUTTON_LIMIT / 2) + 1 && (
              <span>...</span>
            )}
            {renderPageButtons()}
            {currentPage < totalPages - Math.floor(PAGE_BUTTON_LIMIT / 2) && (
              <span>...</span>
            )}
          </>
        )}
        {ITEMS_PER_PAGE < users.length && (
          <Button
            size="sm"
            className="bg-blue text-white"
            onClick={handleShowAll}
            disabled={showAll}
          >
            Show All
          </Button>
        )}
      </div>
    </div>
  );
}

