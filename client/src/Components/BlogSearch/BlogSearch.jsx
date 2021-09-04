import React from 'react'
import Navbar from './../NavbarComponents/Navbar';
import './BlogSearch.css'

const BlogSearch = () => {
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
                        <li><div className="tag-bg">Top Blogs</div></li>
                        <li><div className="tag-bg">Travel Blogs</div></li>
                        <li><div className="tag-bg">Coding Blogs</div></li>
                        <li><div className="tag-bg">Tech Blogs</div></li>
                        <li><div className="tag-bg">Food Blogs</div></li>
                        <li><div className="tag-bg">Travel Blogs</div></li>
                        <li><div className="tag-bg">Music Blogs</div></li>
                        <li><div className="tag-bg">Movie Blogs</div></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default BlogSearch
