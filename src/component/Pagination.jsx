import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

export const Pagination = ({ setCurrentPage, totalPages, currentPage }) => {
  return (
    <div className="flex items-center justify-center gap-10 mt-19">
      <button onClick={() => setCurrentPage(1)}>First</button>
      <button
        className="border rounded-full py-1 px-1"
        onClick={() => setCurrentPage((pre) => Math.max(pre - 1, 1))}
      >
        <IoMdArrowDropleftCircle className="text-2xl" />
      </button>
      {
        <h1 className="text-lg font-bold">
          {currentPage} of {totalPages}
        </h1>
      }

      <button
        className="border rounded-full py-1 px-1"
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage((pre) =>
            pre === totalPages ? 1 : Math.min(pre + 1, totalPages)
          )
        }
      >
        <IoMdArrowDroprightCircle className="text-2xl" />
      </button>
      <button onClick={() => setCurrentPage(totalPages)}>Last</button>
    </div>
  );
};
