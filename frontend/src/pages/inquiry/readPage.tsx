import { useParams } from "react-router";
import ReadComponent from "../../components/inquiry/readComponent";

function ReadPage() {

  const { ino } = useParams();

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Inquiry Detail</h1>

      <ReadComponent ino={Number(ino)} />
    </div>
  );
}

export default ReadPage;