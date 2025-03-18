"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const DescId = () => {
  const { id } = useParams(); 
  const [datas, setDatas] = useState(null); 
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setDatas(data);
      } catch (error) {
        console.error("خطا در دریافت داده:", error);
      }
    };

    fetchData();
  }, [id]);

  if (datas) {
    document.title = datas.title
  }
  if (!datas) return <p>لطفا صبر کنید...</p>;

  return (
    <div>
      <h1>{datas.title}</h1>
      <p>{datas.body}</p>
    </div>
  );
};

export default DescId;
