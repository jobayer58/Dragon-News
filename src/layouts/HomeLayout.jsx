import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-10/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
                <section className="w-10/12 mx-auto py-5">
                    <Navbar></Navbar>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;