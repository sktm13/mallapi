import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

function ReadComponent({ tno }: { tno: number }) {
  const [todo, setTodo] = useState<Todo | undefined>();

  const { moveToList, moveToModify } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((data) => {
      setTodo(data);
    });
  }, [tno]);

  if (!todo) {
    return (
      <div className="text-center py-20 text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">

      {/* 제목 */}
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-1">Title</div>
        <div className="text-2xl font-bold">{todo.title}</div>
      </div>

      {/* 정보 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-6">

        <InfoItem label="Todo No" value={todo.tno} />
        <InfoItem label="Writer" value={todo.writer} />

        <div className="sm:col-span-2">
          <InfoItem
            label="Status"
            value={
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  todo.complete
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {todo.complete ? "Completed" : "Not Yet"}
              </span>
            }
          />
        </div>

      </div>

      {/* 버튼 */}
      <div className="flex justify-end gap-3 mt-8">

        <button
          className="px-5 py-3 rounded-xl bg-gray-500 text-white hover:bg-gray-600 transition"
          onClick={() => moveToList()}
        >
          List
        </button>

        <button
          className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
          onClick={() => moveToModify(tno)}
        >
          Modify
        </button>

      </div>
    </div>
  );
}

export default ReadComponent;



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