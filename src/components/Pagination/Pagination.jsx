import { Pagination } from "@nextui-org/react";

export const PaginationComponent = ({ maxPages, currentPage, setCurrentPage }) => {

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-wrap gap-4 items-center m-7">
      <Pagination
        total={maxPages}
        initialPage={currentPage}
        current={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};