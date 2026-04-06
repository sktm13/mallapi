import { Outlet, useNavigate, useLocation } from "react-router";

function IndexPage() {

  const navigate = useNavigate()
  const location = useLocation()

  const isList = location.pathname.includes("list")
  const isAdd = location.pathname.includes("add")

  return ( 
    <div className="max-w-4xl mx-auto px-4 py-6">

      {/* 탭 */}
      <div className="flex border-b mb-6">

        <div
          onClick={() => navigate({ pathname: 'list' })}
          className={`cursor-pointer px-4 py-2 text-sm font-medium transition
            ${isList 
              ? "border-b-2 border-black text-black" 
              : "text-gray-400 hover:text-black"
            }`}
        >
          List
        </div>

        <div
          onClick={() => navigate({ pathname: 'add' })}
          className={`cursor-pointer px-4 py-2 text-sm font-medium transition
            ${isAdd 
              ? "border-b-2 border-black text-black" 
              : "text-gray-400 hover:text-black"
            }`}
        >
          Add
        </div>

      </div>

      {/* 🔥 핵심: 높이 고정 */}
      <div className="w-full min-h-500px">
        <Outlet/>
      </div>

    </div>
  );
}

export default IndexPage;