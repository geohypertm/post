"use client"

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const PostsClient = () => {

    const [datas, setData] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setData(data);
        }

        fetchData();
    }, []);

    return (
        <>
        <div className="w-full flex flex-wrap justify-center items-center bg-blue-50">
            {datas.length > 0 && datas.map((data) => (
                <div key={data.id}>
                    <div className="w-[300px] h-[200px] m-2 bg-blue-400 rounded">
                <h2 className="text-white">
                    شماره آیدی: {data.id}
                </h2>
            <div className="mt-3">
                <p className="text-white">
                    عنوان: {data.title}
                </p>
            </div>

            <div className="mt-9">
                <Link href={`/posts-client/${data.id}`}>توضیحات</Link>
            </div>
            </div>

            
                </div>
            ))
            }


            
            </div>         
        </>
    )
}
export default PostsClient;