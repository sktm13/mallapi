import { NavLink } from "react-router";

function MainPage() {

    return (
        <div className="flex items-center justify-center min-h-[70vh] text-center">

            <div>
                {/* 타이틀 */}
                <h1 className="text-4xl font-bold mb-4">
                    Shopping Mall
                </h1>

                {/* 설명 */}
                <p className="text-gray-500 mb-8">
                    Spring Boot + React 기반 쇼핑몰 프로젝트
                </p>

                {/* 버튼 */}
                <div className="flex gap-4 justify-center">
                    <NavLink
                        to="/products/"
                        className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                    >
                        View Products
                    </NavLink>

                    <NavLink
                        to="/about"
                        className="px-6 py-2 border border-gray-800 rounded hover:bg-gray-100"
                    >
                        About
                    </NavLink>
                </div>
            </div>

        </div>
    );
}

export default MainPage;