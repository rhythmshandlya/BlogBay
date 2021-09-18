import React, { useState } from 'react'
import Navbar from './../NavbarComponents/Navbar';
import './BlogSearch.css'
import BlogPage from './../BlogPage/BlogPage';
const BlogSearch = () => {
    
    const [option, setoption] = useState("Top Blogs");
    function Renderer(event){
        console.log(event.target.getAttribute("category"));
        let cat=event.target.getAttribute("category");
        console.log("cat is "+cat);
        setoption(cat);
    }
    return (
        <div>
            <Navbar />
            <div className="sidenav">
            <div className='sort-by-dropdown'>
                <h3>Sort Blogs By</h3>
                <select id="sortByDropdown-select" placeholder="Sort By" name="sortByDropdown">
                    <option value="" disabled selected hidden>Sort Blogs By</option>
                    <option value="">Upvotes</option>
                    <option value="">Length</option>
                    <option value="">Date</option>
                    <option value="">None</option>
                </select>
                </div>
                <h3> Top Creators</h3>
                <ul>
                    <li>Rhythm Shandlya</li>
                    <li>Eeshan Mattey</li>
                    <li>Ananya Shandlya</li>
                    <li>Siddhart Malothra</li>
                </ul>  
            </div>


            <div className='blogSearchContainer'>
                <div className="navbar-below">
                    <ul className="tags-bg">
                        <li><div className="tag-bg" category="Top Blogs" onClick={Renderer}>Top Blogs</div></li>
                        <li><div className="tag-bg" category="Coding Blog"  onClick={Renderer}>Coding Blogs</div></li>
                        <li><div className="tag-bg" category="Tech Blog"  onClick={Renderer}>Tech Blogs</div></li>
                        <li><div className="tag-bg" category="Food Blog"  onClick={Renderer}>Food Blogs</div></li>
                        <li><div className="tag-bg" category="Travel Blog"  onClick={Renderer}>Travel Blogs</div></li>
                        <li><div className="tag-bg" category="Music Blog"  onClick={Renderer}>Music Blogs</div></li>
                        <li><div className="tag-bg" category="Movie Blog"  onClick={Renderer}>Movie Blogs</div></li>
                    </ul>
                </div>
            </div>
            <BlogPage option={option}/>
        </div>
    )
}

export default BlogSearch
