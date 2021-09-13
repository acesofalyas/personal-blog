import { useEffect, useState } from "react";
import Post from "@components/Post";
import styleModule from "@styles/Post.module.css";
import usePosts from "@hooks/posts";

export default function PostIndex() {
    const posts = usePosts();

    if (!posts) return <div>No Posts</div>;

    return (
        <div>
            <h2>Posts</h2>
            <div className={styleModule.PostHolder}>
                {posts.map((post, index) => <Post key={index} post={post}></Post>)}
            </div>
        </div>
    )
}