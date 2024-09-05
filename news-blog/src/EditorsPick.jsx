import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const EditorsPick = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const res = await fetch("https://api.mediastack.com/v1/news?access_key=3ff0c3bb7604dcb9501fc606f79bf97c");  E-0v-9wz8N_BOF1TUxWQV5w9zbET1LBfmY5F-Pn9QDg52EWa
                const res = await fetch("https://api.currentsapi.services/v1/latest-news?apiKey=E-0v-9wz8N_BOF1TUxWQV5w9zbET1LBfmY5F-Pn9QDg52EWa")
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const dat = await res.json();
                setData(dat.news);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    console.log(data)

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ],
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="md:mx-auto mt-10 container">
            <div className="flex justify-between mb-5">
                <h1 className="text-4xl font-bold">Editors Pick</h1>
                <h2 className="flex text-red-600">See all<FaArrowRight className="ml-2 mt-1" /></h2>
            </div>

            <div className="w-full overflow-hidden">
                <div className="relative">
                    <Slider {...settings} className="w-[400rem] h-[400px]">
                        {Array.isArray(data) && data.map((item, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={item.image}
                                    alt={item.title || "News Image"}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col items-center py-72 px-4 bg-black/60 text-white">
                                    <h1 className="text-2xl font-bold">{item.title}</h1>
                                    <h1 className="text-sm ">{item.published}</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="mx-auto container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {Array.isArray(data) && data.slice(0, 4).map((item, index) => (
                        <div key={index} className="relative h-[500px] bg-white rounded-md mt-20">
                            <img
                                src={item.image}
                                alt={`Image ${index}`}
                                className="w-full h-[300px] object-cover mb-4 rounded-3xl"
                            />
                            <div className="px-2">
                                <h1 className="text-xl font-bold py-2">{item.title.substring(0,100) + "..."}</h1>
                                <a href={item.url} className="text-red-600 hover:text-red-400 hover:underline">Read More</a>
                            </div>
                            <div className='flex'>
                            <p className="text-gray-500 mx-2 font-semibold">{item.category[0].charAt(0).toUpperCase() + item.category[0].slice(1)}</p>
                            <p className='text--500'>8 min read</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EditorsPick;