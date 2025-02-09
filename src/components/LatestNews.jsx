import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-base-200 p-2">
            <p className="bg-[#D72050] text-xl text-base-100 px-5 py-2">Latest</p>
            <Marquee pauseOnHover={true} speed={80} className="space-x-10">
                <Link to='/news'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, provident?
                </Link>
                <Link to='/news'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, provident?
                </Link>
                <Link to='/news'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, provident?
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;