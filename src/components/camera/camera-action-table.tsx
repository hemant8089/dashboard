import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "../ui/button";

import Toggle from "../ui/toggle-button";
import { CameraActionData } from "@/constants/camera-action-data";

const ITEMS_PER_PAGE = 5;
const PAGE_BUTTON_LIMIT = 6;

export function CameraActionTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);
  const totalPages = Math.ceil(CameraActionData.length / ITEMS_PER_PAGE);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
    setShowAll(false);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };
  const toggleExpandRow = (index: number) => {
    setExpandedRowIndex(expandedRowIndex === index ? null : index);
  };

  const getPaginatedData = () => {
    if (showAll) return CameraActionData;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return CameraActionData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
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
    <div className="w-full h-full flex flex-col items-start gap-3 mt-1 md:mt-3 border mb-2">
      <div className="w-full">
        <Table>
          <TableHeader className="">
            <div className="bg-lightGray">
              <TableRow className="w-full">
                <div className="flex items-center justify-between w-[30%]">
                  <TableHead className="text-black">Action ID</TableHead>
                  <TableHead className="text-right text-black">
                    Action name
                  </TableHead>
                </div>
                <TableHead className="text-right text-black">
                  Action confidence
                </TableHead>
                <TableHead className="text-right text-black">Status</TableHead>
              </TableRow>
            </div>
          </TableHeader>
          <TableBody>
            {getPaginatedData().map((camera, index) => (
              <TableRow
                key={index}
                className="w-full flex items-center justify-between"
                onClick={() => toggleExpandRow(index)}
              >
                <div className="flex items-center justify-between w-[32%]">
                  <TableCell className="font-normal text-muted-foreground">
                    {camera.actionId}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    {camera.actionName}
                  </TableCell>
                </div>
                <TableCell className="flex gap-2">
                  {camera.actionConfidence}
                </TableCell>
                <TableCell className="flex gap-2">
                  <Toggle
                    userStatus={camera.status}
                    onToggle={(toggled) => console.log(toggled)}
                  />
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
        {ITEMS_PER_PAGE < CameraActionData.length && (
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
