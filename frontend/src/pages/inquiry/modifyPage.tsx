import { useParams } from "react-router";
import ModifyComponent from "../../components/inquiry/modifyComponent";

function ModifyPage() {
  const { ino } = useParams();

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Modify Todo</h1>

      <ModifyComponent ino={Number(ino)} />
    </div>
  );
}

export default ModifyPage;