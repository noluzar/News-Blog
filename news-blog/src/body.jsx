import { useEffect, useState } from "react";

export const Body = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-08-02&sortBy=publishedAt&apiKey=38a4e1049c1a4803b20ce65468bcb902')
            .then(response => response.json())
            .then(data => setNewsData(data.articles)) // Access the articles array within the response
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="py-[100px] px-[200px]">
            <div className="bg-gray-100 w-[80vw] h-[200px] text-center rounded-xl p-8 text-4xl">
                <h1 className="text-gray-400 text-2xl">WELCOME TO BULETIN</h1>
                <h1 className="font-bold">Craft narratives that ignite <span className="text-red-600">inspiration</span>,</h1>
                <h1 className="font-bold text-red-600">knowledge, <span className="text-black">and</span> entertainment</h1>
            </div>
            <div className="pt-16">
                {newsData.slice(0, 1).map((item, index) => (
                    <div key={index} className="flex items-center gap-11">
                        <img src={item.urlToImage} alt="news" className="w-[600px]" />
                        <div className="w-[800px]">
                            <div className="flex gap-11 py-8 font-semibold text-gray-400"><h3>{item.author}</h3>
                                <h3>{item.publishedAt}</h3>
                            </div>
                            <h1 className="font-bold text-2xl">{item.title}</h1>
                            <p className="py-8 text-xl">{item.content}</p>
                            <a href="#">
                                <button className="float-right bg-red-600 w-[100px] h-[40px] text-white font-semibold hover:bg-red-400">Read More</button>
                            </a>
                            <p className="text-red-600 font-semibold">2 min read</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
