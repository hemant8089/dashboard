import { useState } from "react";
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

import { Button } from "../ui/button";
import { CameraListData } from "@/constants/camera-list";
import { ChevronDown, Plus } from "lucide-react";

import { CameraDataTable } from "./camera-data-table";
import Toggle from "../ui/toggle-button";
import { ScheduleForm } from "./create-schedule-form";

const ITEMS_PER_PAGE = 5;
const PAGE_BUTTON_LIMIT = 6;

export function CameraTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(CameraListData.length / ITEMS_PER_PAGE);

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
    if (showAll) return CameraListData;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return CameraListData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
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
      <div className="w-full flex items-center justify-between">
        <h1 className="text-lg font-medium">User Details</h1>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue text-white">
                <Plus className="size-4 shrink-0 mr-2" />
                Create Schedule
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[400px] rounded-md md:w-full">
              <DialogHeader>
                <DialogTitle className="font-medium text-2xl">
                  Create Schedule
                </DialogTitle>
              </DialogHeader>
              <ScheduleForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="w-full">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue rounded-md pr-20">
              <div className="flex items-center justify-between w-[80%]">
                <div className="flex items-center justify-between gap-32">
                  <TableHead className="">Unit</TableHead>
                  <TableHead className="text-right">Area</TableHead>
                </div>
                <TableHead className="text-right">Status</TableHead>
              </div>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getPaginatedData().map((camera, index) => (
              <TableRow
                key={index}
                className="w-full flex flex-col cursor-pointer"
               
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-between w-[75%]">
                    <div className="flex items-center justify-between gap-32">
                      <TableCell className="font-normal text-muted-foreground">
                        {camera.unit}
                      </TableCell>
                      <TableCell className="flex gap-2">
                        {camera.area}
                      </TableCell>
                    </div>
                    <TableCell className="flex gap-2">
                      <Toggle
                        userStatus={camera.status}
                        onToggle={(toggled) => console.log(toggled)}
                      />
                    </TableCell>
                  </div>
                  <TableCell className="flex gap-2">
                    <ChevronDown
                     onClick={() => toggleExpandRow(index)}
                      className={`size-4 ${
                        expandedRowIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </TableCell>
                </div>
                {expandedRowIndex === index && (
                  <div className="mt-2 w-full">
                    <CameraDataTable />
                  </div>
                )}
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
        {ITEMS_PER_PAGE < CameraListData.length && (
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
