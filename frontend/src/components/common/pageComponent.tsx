interface PageComponentProps<T> {
  serverData: PageResponseDTO<T>;
  movePage: ({ page }: PageParam) => void;
}

function PageComponent({ serverData, movePage }: PageComponentProps<any>) {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">

      {/* Prev */}
      {serverData.prev && (
        <button
          onClick={() => movePage({ page: serverData.prevPage })}
          className="px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 transition"
        >
          ←
        </button>
      )}

      {/* 페이지 번호 */}
      {serverData.pageNumList.map((pageNum) => {
        const isCurrent = serverData.current === pageNum;

        return (
          <button
            key={pageNum}
            onClick={() => movePage({ page: pageNum })}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition
              ${isCurrent
                ? "bg-black text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"}
            `}
          >
            {pageNum}
          </button>
        );
      })}

      {/* Next */}
      {serverData.next && (
        <button
          onClick={() => movePage({ page: serverData.nextPage })}
          className="px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 transition"
        >
          →
        </button>
      )}
    </div>
  );
}

export default PageComponent;