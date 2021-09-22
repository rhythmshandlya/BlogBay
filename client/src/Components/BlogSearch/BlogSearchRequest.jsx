import React from 'react'
import { useState ,useEffect} from 'react';
import Navbar from './../NavbarComponents/Navbar';
import NewCard from './NewCard';
import './BlogSearch.css'
import api from './../../Util/api'
import { useParams } from 'react-router-dom';
import BlogPage from '../BlogPages/BlogPage';


const Loading = () => {
    return (<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>);
}
const cssh1 = {
    fontFamily: "poppins",
    marginTop: "1rem"
}

const BlogSearch = () => {
    const { text } = useParams();
    const [loading, setLoading] = useState('loading');
    const [renderedBlogs, setRenderedBlogs] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                setLoading('loading');
                text.replaceAll('%20', ' ');
                const res = await api.get(`blogs/search/${text}`, { withCredentials: true });
                console.log(res.data.data);
                setLoading('notLoading');
                console.log("data",res.data.data);
                setRenderedBlogs(res.data.data);
            } catch (err) {
                setLoading('notLoading');
                console.log(err.response.data.message);
            }
        }
        fetchMyAPI()
    }, []);
    
    return (
        <div>
            <div className="sidenav">
                <div className='sort-by-dropdown'>
                    <h3>Sort Blogs By</h3>
                    <select id="sortByDropdown-select" placeholder="Sort By" name="sortByDropdown">
                        <option value="" disabled selected>Relevance</option>
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
                    <div class="drop-hide">
                        <select class="sortByDropdown-select" placeholder="Sort By" name="sortByDropdown">
                            <option value="" disabled selected>Relevance</option>
                        </select>
                    </div>
                </div>
                <h1 className="my-h1">Top Results :</h1>
                {loading === 'loading' && <Loading />}
                {
                    loading === 'notLoading' &&
                    <div className="blogSearchContainerGrid">
                        {
                            renderedBlogs.length === 0 ? <h1 style={cssh1}>Sorry no results for this query :( </h1>:<BlogPage content={renderedBlogs} blogType={["Top Blog"]}/>
                        }
                    </div>
                }
            </div>
            
        </div>
    );
}

export default BlogSearch
