import axios from "axios";
import Link from "next/link";

const Posts = async() => {

    const response = await fetch("http://localhost:8585/posts", {
        cache: "force-cache",
    });
    const data = await response.json();

    return (
        <>
        <div className="w-full flex flex-wrap justify-center items-center bg-blue-50">
            {data.map((data) => (
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
                <Link href={`/posts/${data.id}`}>توضیحات</Link>
            </div>
            </div>

            
                </div>
            ))}
            
            </div>         
        </>
    )
}

export default Posts;