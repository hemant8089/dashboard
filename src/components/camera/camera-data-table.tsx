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
import { CameraData } from "@/constants/camera-data-list";
import Toggle from "../ui/toggle-button";
import { ChevronDown } from "lucide-react";
import { CameraActionTable } from "./camera-action-table";

const ITEMS_PER_PAGE = 5;
const PAGE_BUTTON_LIMIT = 6;

export function CameraDataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);
  const totalPages = Math.ceil(CameraData.length / ITEMS_PER_PAGE);

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
    if (showAll) return CameraData;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return CameraData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
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
    <div className="w-full h-full flex flex-col items-start gap-3 mt-1 md:mt-3 border rounded-xl mb-2">
      <div className="w-full">
        <Table>
          <TableHeader>
            <div className="bg-black rounded-lg">
              <TableRow>
                <div className="flex items-center justify-between w-[30%]">
                  <TableHead>Camera ID</TableHead>
                  <TableHead className="text-right">Camera IP</TableHead>
                </div>
                <TableHead className="text-right">Camera Name</TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </div>
          </TableHeader>
          <TableBody>
            {getPaginatedData().map((camera, index) => (
              <>
                <TableRow
                  key={index}
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center justify-between w-[32%]">
                    <TableCell className="font-normal text-muted-foreground">
                      {camera.cameraId}
                    </TableCell>
                    <TableCell className="flex gap-2">
                      {camera.cameraIp}
                    </TableCell>
                  </div>
                  <TableCell className="flex gap-2">
                    {camera.cameraName}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Toggle
                      userStatus={camera.status}
                      onToggle={(toggled) => console.log(toggled)}
                    />
                  </TableCell>
                  <TableCell
                    className="flex gap-2"
                    onClick={() => toggleExpandRow(index)}
                  >
                    <ChevronDown
                      className={`size-4 ${
                        expandedRowIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </TableCell>
                </TableRow>
                {expandedRowIndex === index && (
                  <div className="mt-2 w-full">
                    <CameraActionTable />
                  </div>
                )}
              </>
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
        {ITEMS_PER_PAGE < CameraData.length && (
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
