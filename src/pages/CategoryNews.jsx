import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData()
    console.log(news)
    return (
        <div>
            <h1 className="font-semibold mb-3">Dragon News Home</h1>
            <h2 className="text-gray-400 text-sm">{news.length} News Found in This Category</h2>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;