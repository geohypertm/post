import axios from "axios";

const getPostData = async(id) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return data
}

export const generateMetadata = async({params}) => {

    const {id} = await params;
    const postInfo = await getPostData(id);
    return {
        title: postInfo.title,
        description: postInfo.body,
    }
}

const DescId = async({params}) => {
    const {id} = await params;
    const data = await getPostData(id);
    

    
    return (
        <div>
            <p>{data.id}</p>
            <p>{data.body}</p>
        </div>
    )
    
}

export default DescId;