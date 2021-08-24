import './stylesheets/pagePreview.css'
import React, {useEffect} from 'react'
import api from './../../Util/api';
import { convertDataToHtml } from './../../Util/editorjsToHTML';
import './stylesheets/Loading.css'
import Navbar from './../NavbarComponents/Navbar';
import { useParams } from "react-router-dom";

const Loading = () => {
    return (<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>);
}


const BlogPage = () => {
    let {id} = useParams();
    const [loading, setLoading] = React.useState('loading');
    let htmlData= React.useRef(null);

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const res = await api.get(`blogs?_id=${id}`, { withCredentials: true });
                htmlData.current = convertDataToHtml(res.data.data.allBlogs[0].content.blocks);
                console.log(htmlData.current);
                setLoading('notLoading');
            } catch (err) {
                alert(err);
                setLoading('notLoading');
            }
        }
        fetchMyAPI();
    },[]);

    return (
        <React.Fragment>
            <Navbar />
            {loading === 'loading' && <Loading/>}
            {loading !== 'loading' && <div className="blog-page-preview"  dangerouslySetInnerHTML={{ __html: htmlData.current }}></div>}
        </React.Fragment>
    );
}
export default BlogPage;
