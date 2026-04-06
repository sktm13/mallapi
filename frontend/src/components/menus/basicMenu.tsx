import { NavLink } from "react-router";
import useCustomLogin from "../../hooks/useCustomLogin";
import useCustomCart from "../../hooks/useCustomCart";
import CartComponent from "./cartComponent";
import { useState } from "react";

function BasicMenu() {
    const { loginState, loginStatus } = useCustomLogin();
    const { cartItems } = useCustomCart();

    const isLogin = loginStatus === "fulfilled" || loginStatus === "saved";

    // 상태
    const [cartOpen, setCartOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);

    return (
        <>
            <nav className="flex bg-gray-800 text-white relative">

                {/* 왼쪽 메뉴 */}
                <div className="w-4/5">
                    <ul className="flex p-4 font-bold">
                        <li className="pr-6 text-xl">
                            <NavLink to="/">Main</NavLink>
                        </li>
                        <li className="pr-6 text-xl">
                            <NavLink to="/about">About</NavLink>
                        </li>

                        {isLogin && (
                            <>
                                <li className="pr-6 text-xl">
                                    <NavLink to="/products/">Products</NavLink>
                                </li>
                                {/* <li className="pr-6 text-xl">
                                    <NavLink to="/todo/">Todo</NavLink>
                                </li> */}
                                <li className="pr-6 text-xl">
                                    <NavLink to="/inquiry/">Inquiry</NavLink>
                                </li>

                            </>
                        )}
                    </ul>
                </div>

                {/* 오른쪽 */}
                <div className="w-1/5 flex justify-end items-center gap-4 p-4">

                    {isLogin && (
                        <>
                            {/* 🛒 Cart 버튼 */}
                            <div className="relative">
                                <button
                                    onClick={() => setCartOpen(true)}
                                    className="relative bg-gray-600 px-3 py-1 rounded hover:bg-gray-500"
                                >
                                    🛒 Cart

                                    {/* badge */}
                                    {cartItems.items.length > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                            {cartItems.items.length}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </>
                    )}

                    {/* 로그인 / 유저 */}
                    {!isLogin ? (
                        <NavLink to="/member/login">Login</NavLink>
                    ) : (
                        <div className="relative">

                            {/* 유저 버튼 */}
                            <button
                                onClick={() => setUserOpen(!userOpen)}
                                className="bg-gray-600 px-3 py-1 rounded hover:bg-gray-500"
                            >
                                {loginState.nickname} 님 ▼
                            </button>

                            {/* 드롭다운 */}
                            {userOpen && (
                                <div className="absolute right-0 mt-2 w-32 bg-white text-black shadow rounded z-50">
                                    <NavLink
                                        to="/member/logout"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Logout
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>

            {/* 🔥 배경 (어둡게) */}
            {cartOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-40"
                    onClick={() => setCartOpen(false)}
                />
            )}

            {/* 🔥 사이드 장바구니 */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[500px] lg:w-[700px] bg-white shadow-2xl z-50 overflow-y-auto p-6
        transform transition-transform duration-300
        ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* 닫기 버튼 */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => setCartOpen(false)}
                        className="text-gray-500 hover:text-black text-xl"
                    >
                        ✕
                    </button>
                </div>

                <CartComponent />
            </div>
        </>
    );
}

export default BasicMenu;