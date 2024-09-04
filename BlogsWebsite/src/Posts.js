import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCards from './PostCards';

const Posts = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    if (posts == null) return null;

    return (
        <div className=" flex justify-center p-2">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
                {posts.map((post) => (
                    <PostCards key={post.id} title={post.title} body={post.body} />
                ))}
            </div>
        </div>
    );
}

export default Posts;
