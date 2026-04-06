import { useParams } from "react-router";
import ReadComponent from "../../components/todo/readComponent";

function ReadPage() {
  const { tno } = useParams();

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Todo Detail</h1>

      <ReadComponent tno={Number(tno)} />
    </div>
  );
}

export default ReadPage;