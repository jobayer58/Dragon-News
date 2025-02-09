import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNav from "../components/layout-components/RightNav";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-10/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-10/12 mx-auto py-5">
                <Navbar></Navbar>
            </nav>
            <main className="w-10/12 mx-auto pt-5 md:grid grid-cols-12 gap-3">
            <aside className="left col-span-3">
                <LeftNavbar></LeftNavbar>
            </aside>
            <section className="col-span-6"><Outlet></Outlet></section>
            <aside className=" col-span-3">
                <RightNav></RightNav>
            </aside>

            </main>
        </div>
    );
};

export default HomeLayout;