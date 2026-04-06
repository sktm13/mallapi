import { Outlet, useLocation, useNavigate } from "react-router";

function IndexPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const isList = location.pathname.includes("/list");
  const isAdd = location.pathname.includes("/add");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-3xl font-bold text-center mb-8">Products</div>

      <div className="flex justify-center border-b border-gray-200 mb-8">
        <div
          onClick={() => navigate({ pathname: "list" })}
          className={`cursor-pointer px-6 py-3 text-sm font-semibold transition ${
            isList
              ? "border-b-2 border-black text-black"
              : "text-gray-400 hover:text-black"
          }`}
        >
          List
        </div>

        <div
          onClick={() => navigate({ pathname: "add" })}
          className={`cursor-pointer px-6 py-3 text-sm font-semibold transition ${
            isAdd
              ? "border-b-2 border-black text-black"
              : "text-gray-400 hover:text-black"
          }`}
        >
          Add
        </div>
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default IndexPage;