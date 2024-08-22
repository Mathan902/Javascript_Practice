import "./Blogs.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";

const Blogs = () => {
    const a = [0, 1, 2, 3, 4, 5,6,7,8,9,10,11,53,46,4,15,14,132,0,46,4,4,7,8,465,48,21,4,6,84,5,4,89,61,46,68,4,6,61,8,4,61,84,6,1,8,13];
    return (
        <div className="blogs">
            {a.map((i) => (
                <div key={i} className="blog-card">
                  <div className="blog-video"> </div>
                  <div className="blog-content">
                    <div><MdOutlineAccountCircle className="icon"/></div>
                    <div className="description">Welcome to react js tutorial</div>
                    <div> <CiMenuKebab /></div>
                  </div>
                </div>
            ))}
        </div>
    );
};

export default Blogs;
