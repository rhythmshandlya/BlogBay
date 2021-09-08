import React from 'react'
import { useState } from 'react';
import Navbar from './../NavbarComponents/Navbar';
import './BlogSearch.css'

const BlogSearch = () => {
    const [blogType, setBlogType] = useState(['Top Blogs']);

    const handleClick = (e) => {
        e.target.classList.toggle('crimson');
        e.target.classList.toggle('tag-bg');
        if (e.target.classList.contains('crimson')) {
            setBlogType([...blogType, e.target.innerHTML]);
        }
        else {
            let blogTypeTemp = [...blogType];
            blogTypeTemp.splice(blogTypeTemp.indexOf(e.target.innerHTML), 1);
            setBlogType(blogTypeTemp);
        }
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
                        <li><div className="crimson" onClick={handleClick}>Top Blogs</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Travel Blogs</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Coding Blogs</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Tech Blogs</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Food Blogs</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Travel Blogs</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Music Blogs</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Movie Blogs</div></li>
                    </ul>
                    <div class="drop-hide">
                        <select class="sortByDropdown-select" placeholder="Sort By" name="sortByDropdown">
                            <option value="" disabled selected hidden>Sort Blogs By</option>
                            <option value="">Upvotes</option>
                            <option value="">Length</option>
                            <option value="">Date</option>
                            <option value="">None</option>
                        </select>
                    </div>
                </div>
                {blogType.map((item) => {
                        return (
                            <h2>{item}</h2>
                        )
                })}
                <hr style={{ width: "100%" }} />
            </div>
           
        </div>
    );
}

export default BlogSearch
