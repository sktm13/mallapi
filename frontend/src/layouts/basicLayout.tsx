import { Outlet } from "react-router";
import BasicMenu from "../components/menus/basicMenu";

function BasicLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <BasicMenu />

            <main className="flex-1 bg-white">
                <Outlet />
            </main>
        </div>
    );
}

export default BasicLayout;