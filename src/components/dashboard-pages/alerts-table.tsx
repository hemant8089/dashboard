// import { useState } from "react";


// import { Alertdata } from "@/constants/alert-date";
// import { Button } from "../ui/button";
import EmployeeTable from "../ui/EmployeeTable";
import PayrollArea from "../ui/PayrollArea";

// const ITEMS_PER_PAGE = 5;
// const PAGE_BUTTON_LIMIT = 6;

export function DashboardAlertTable() {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [showAll, setShowAll] = useState(false);

  // const totalPages = Math.ceil(Alertdata.length / ITEMS_PER_PAGE);

  // const handleChangePage = (page: number) => {
  //   setCurrentPage(page);
  //   setShowAll(false);
  // };

 

  // const getPaginatedData = () => {
  //   if (showAll) return Alertdata;
  //   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  //   return Alertdata.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  // };

  // const renderPageButtons = () => {
  //   const pageButtons = [];
  //   let startPage = Math.max(
  //     1,
  //     currentPage - Math.floor(PAGE_BUTTON_LIMIT / 2)
  //   );
  //   let endPage = Math.min(totalPages, startPage + PAGE_BUTTON_LIMIT - 1);

  //   if (endPage - startPage < PAGE_BUTTON_LIMIT - 1) {
  //     startPage = Math.max(1, endPage - PAGE_BUTTON_LIMIT + 1);
  //   }

  //   for (let page = startPage; page <= endPage; page++) {
  //     pageButtons.push(
  //       <Button
  //         key={page}
  //         size="sm"
  //         onClick={() => handleChangePage(page)}
  //         disabled={currentPage === page}
  //         variant="tag"
  //       >
  //         {page}
  //       </Button>
  //     );
  //   }

  //   return pageButtons;
  // };

  return (
    <div className="w-full h-full flex flex-col items-start gap-3 mt-3">
       <div className="w-[100%]">
        <PayrollArea/>
        </div>
      
      <div className="w-full rounded-[1rem] shadow-md">
       
   
       <EmployeeTable/>
      </div>
      <div className="flex w-full justify-center mt-4 space-x-2">
        {/* {totalPages > 1 && (
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
        {ITEMS_PER_PAGE < Alertdata.length && (
          <Button
            size="sm"
            className="bg-blue text-white"
            onClick={handleShowAll}
            disabled={showAll}
          >
            Show All
          </Button>
        )} */}
      </div>
    </div>
  );
}
