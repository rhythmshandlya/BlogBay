import React from 'react'
import { useState ,useEffect} from 'react';
import Navbar from './../NavbarComponents/Navbar';
import './BlogSearch.css'
import BlogPage from './../BlogPage/blogPage';
import api from './../../Util/api'
import EasyCard from '../BlogCards/EasyCard';

const BlogSearch = () => {
    const [blogType, setBlogType] = useState(['Top Blog']);
    const [renderedBlogs, setRenderedBlogs] = useState([]);

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
    
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const res = await api.get('/blogs', { withCredentials: true });
                setRenderedBlogs(res.data.data.allBlogs);
            } catch (err) {
                
            }
        }
        fetchMyAPI()
    }, []);
    
    return (
        <div>
            <Navbar />
            <div className="sidenav">
                <div className='sort-by-dropdown'>
                    <h3>Sort Blogs By</h3>
                    <select id="sortByDropdown-select" placeholder="Sort By" name="sortByDropdown">
                        <option selected value="">Upvotes</option>
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
                        <li><div className="crimson" onClick={handleClick}>Top Blog</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Travel Blog</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Coding Blog</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Tech Blog</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Food Blog</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Travel Blog</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Music Blog</div></li>
                        <li><div className="tag-bg" onClick={handleClick}>Movie Blog</div></li>
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
                <h1 className="my-h1">Top Results :</h1>
                <div className="blogSearchContainerGrid">
                <BlogPage blogs={renderedBlogs} blogType={blogType}/>
                </div>
            </div>
            
        </div>
    );
}

export default BlogSearch
