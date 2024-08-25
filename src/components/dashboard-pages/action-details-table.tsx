import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Button } from "../ui/button";
import { ActionDetailsdata } from "@/constants/action-details";
import { MdCancel } from "react-icons/md";
const ITEMS_PER_PAGE = 5;
const PAGE_BUTTON_LIMIT = 6;

export function DashboardActionTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const totalPages = Math.ceil(ActionDetailsdata.length / ITEMS_PER_PAGE);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
    setShowAll(false);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const getPaginatedData = () => {
    if (showAll) return ActionDetailsdata;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return ActionDetailsdata.slice(startIndex, startIndex + ITEMS_PER_PAGE);
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

  return (
    <div className="w-full h-full flex flex-col items-start gap-3 mt-3">
      <div>
        <h1 className="text-lg font-medium">Action Details</h1>
      </div>
      <div className="w-full">
        <Table>
          <TableHeader className="text-[12px] text-center">
            <TableRow className="bg-blue rounded-md flex items-center gap-10">
              <TableHead className="">S.no</TableHead>
              <TableHead className="text-right">Action name</TableHead>
              <TableHead className="text-right">Total Camera</TableHead>
              <TableHead className="text-right">Camera 01 </TableHead>
              <TableHead className="text-right">Camera 01 </TableHead>
              <TableHead className="text-right">Camera 01 </TableHead>
              <TableHead className="text-right">Camera 01 </TableHead>
              <TableHead className="text-right">Camera 01</TableHead>
              <TableHead className="text-right">Camera 01 </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getPaginatedData().map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-normal text-muted-foreground w-[40px]">
                  {item.slno}
                </TableCell>
                <TableCell className="w-[100px] text-[12px] -ml-12">
                  {item.name}
                </TableCell>
                <TableCell className="">{item.totalCamera}</TableCell>
                <TableCell className="">
                  {item.camera1Verified ? (
                    <IoIosCheckmarkCircle className="size-5 shrink-0 fill-green-700" />
                  ) : (
                    <MdCancel className="size-5 shrink-0 fill-red-700" />
                  )}
                </TableCell>
                <TableCell className="">
                  {item.camera2Verified ? (
                    <IoIosCheckmarkCircle className="size-5 shrink-0 fill-green-700" />
                  ) : (
                    <MdCancel className="size-5 shrink-0 fill-red-700" />
                  )}
                </TableCell>
                <TableCell className="">
                  {item.camera3Verified ? (
                    <IoIosCheckmarkCircle className="size-5 shrink-0 fill-green-700" />
                  ) : (
                    <MdCancel className="size-5 shrink-0 fill-red-700" />
                  )}
                </TableCell>
                <TableCell className="">
                  {item.camera4Verified ? (
                    <IoIosCheckmarkCircle className="size-5 shrink-0 fill-green-700" />
                  ) : (
                    <MdCancel className="size-5 shrink-0 fill-red-700" />
                  )}
                </TableCell>
                <TableCell className="">
                  {item.camera5Verified ? (
                    <IoIosCheckmarkCircle className="size-5 shrink-0 fill-green-700" />
                  ) : (
                    <MdCancel className="size-5 shrink-0 fill-red-700" />
                  )}
                </TableCell>
                <TableCell className="flex gap-2">
                  {item.camera6Verified ? (
                    <IoIosCheckmarkCircle className="size-5 shrink-0 fill-green-700" />
                  ) : (
                    <MdCancel className="size-5 shrink-0 fill-red-700" />
                  )}
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
        {ITEMS_PER_PAGE < ActionDetailsdata.length && (
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
