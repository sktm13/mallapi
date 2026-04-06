import { useEffect, useState, type ChangeEvent } from "react";
import { deleteOne, getOne, putOne } from "../../api/inquiryApi";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/resultModal";

const initState: Inquiry = {
  ino: 0,
  title: "",
  content: "",
  writer: "",
  status: "",
  reply: null,
  createdDate: "",
};

const ModifyComponent = ({ ino }: { ino: number }) => {

  const [inquiry, setInquiry] = useState<Inquiry>(initState);
  const [result, setResult] = useState<string | null>(null);

  const { moveToList, moveToRead } = useCustomMove();

  useEffect(() => {
    getOne(ino).then((data) => {
      setInquiry(data);
    });
  }, [ino]);

  const handleChangeInquiry = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInquiry((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickModify = () => {

    const inquiryModify: InquiryModify = {
      ino: inquiry.ino,
      title: inquiry.title,
      content: inquiry.content,
    };

    putOne(inquiryModify).then(() => {
      setResult("Modified");
    });
  };

  const handleClickDelete = () => {
    deleteOne(ino).then(() => {
      setResult("Deleted");
    });
  };

  const closeModal = () => {
    if (result === "Deleted") {
      moveToList();
    } else {
      moveToRead(ino);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">

      {result && (
        <ResultModal
          title={"처리결과"}
          content={result}
          callbackFn={closeModal}
        />
      )}

      {/* 제목 */}
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-1">Title</div>
        <input
          name="title"
          value={inquiry.title}
          onChange={handleChangeInquiry}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* 내용 🔥 */}
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-1">Content</div>
        <textarea
          name="content"
          value={inquiry.content}
          onChange={handleChangeInquiry}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* 정보 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-6">

        <InfoItem label="Inquiry No" value={inquiry.ino} />
        <InfoItem label="Writer" value={inquiry.writer} />
        <InfoItem label="Status" value={inquiry.status} />
        <InfoItem label="Created Date" value={inquiry.createdDate.substring(0, 10)} />

      </div>

      {/* 버튼 */}
      <div className="flex justify-end gap-3 mt-8">

        <button
          className="px-5 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
          onClick={handleClickDelete}
        >
          Delete
        </button>

        <button
          className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
          onClick={handleClickModify}
        >
          Modify
        </button>

      </div>
    </div>
  );
};

export default ModifyComponent;



const InfoItem = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div>
    <div className="text-sm text-gray-400 mb-1">{label}</div>
    <div className="text-lg font-semibold">{value}</div>
  </div>
);