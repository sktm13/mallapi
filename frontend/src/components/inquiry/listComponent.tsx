import { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/pageComponent";
import { getList } from "../../api/inquiryApi";

function ListComponent() {

    const { page, size, refresh, moveToRead, moveToList }: UseCustomMoveReturn = useCustomMove();

    const [serverData, setServerData] = useState<PageResponseDTO<Inquiry> | undefined>();

    useEffect(() => {
        getList({ page, size }).then(data => {
            setServerData(data);
        });
    }, [page, size, refresh]);

    return (
        <div>

            {serverData &&
                <>
                    {/* 리스트 */}
                    <div className="space-y-3">

                        {serverData.dtoList.map(inquiry =>
                            <div
                                key={inquiry.ino}
                                onClick={() => moveToRead(inquiry.ino)}
                                className="cursor-pointer border rounded-lg px-4 py-3 hover:bg-gray-50 transition"
                            >
                                <div className="flex justify-between items-center">

                                    {/* 왼쪽 */}
                                    <div className="flex items-center gap-4">
                                        <div className="text-sm text-gray-400 w-10">
                                            {inquiry.ino}
                                        </div>
                                        <div className="font-medium">
                                            {inquiry.title}
                                        </div>
                                    </div>

                                    {/* 오른쪽 */}
                                    <div className="text-sm text-gray-500 flex items-center gap-3">

                                        {/* 상태 */}
                                        <span
                                            className={`px-2 py-1 text-xs rounded 
                                                ${inquiry.status === "DONE"
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-gray-100 text-gray-500"
                                                }`}
                                        >
                                            {inquiry.status}
                                        </span>

                                        {/* 날짜 */}
                                        <span>
                                            {inquiry.createdDate?.substring(0, 10)}
                                        </span>

                                    </div>

                                </div>
                            </div>
                        )}

                    </div>

                    {/* 페이지네이션 */}
                    <div className="mt-6">
                        <PageComponent serverData={serverData} movePage={moveToList} />
                    </div>
                </>
            }
        </div>
    );
}

export default ListComponent;