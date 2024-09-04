import { useState, useEffect } from 'react';
import axios from 'axios';

const LatestArt = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('https://api.currentsapi.services/v1/latest-news?apiKey=r-F0Ayl7zKqzmbjsvcS4j-RSfMrhY85SQQtGq6sRK2okADtK')
            .then(response => {
                setArticles(response.data.news);
            });
    }, []);



    console.log(articles)

    return (

        <div>
            <div className='flex flex-col px-[200px]'>
            <h1 className='text-[40px] font-bold'>Latest News</h1>
            <div className="flex justify-center pt-10 gap-6 rounded-[20px]">
                {Array.isArray(articles) && articles.slice(0, 4).map((article, index) => (
                    <div key={index} className="bg-white overflow-hidden w-[400px] ">
                        <img
                            className='w-[400px] h-[300px] object-center rounded-3xl'
                            src={article.image}
                            alt={article.title}
                        />
                        <div className="p-3">
                            <p className=' text-sm mb-4 text-gray-500'>{article.published}</p>
                            <h2 className='text-xl  mb-4 font-semibold'>{article.title}</h2>
                            <p className=' mb-2 text-sm'>{article.description.substring(0, 95)}</p>

                            <div className=' flex space-x-2'>
                                <p className=' text-red-600 font-bold'>{article.category}</p>
                                <p className='text-gray-500'>8 min read</p>
                            </div>
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-blue-500 hover:underline'
                            >
                                Read more
                            </a>


                        </div>

                    </div>

                ))}
            </div>

            <a className='text-red-700 font-semibold  flex justify-end pr-40 pt-20 text-xl ' href="">See all </a>
        </div>
        </div>
    );
};

export default LatestArt;