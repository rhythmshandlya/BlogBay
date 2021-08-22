import React from 'react'
import Editor from './BlogEditor';
import Navbar from './../NavbarComponents/Navbar';
import api from "../../Util/api.js";
import './Stylesheets/Loading.css';

const Loading = () => {
    return (<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>);
}

const BlogEditorV1_0_2 = () => {
    
    const [content, setContent] = React.useState('loading');
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        async function fetchMyAPI() {
            try {
                const res = await api.get('user/currentBlog', { withCredentials: true });
                setData(res.data.blog);
                setContent('editor');
            } catch (err) {
              alert(err);
            }
        }
        fetchMyAPI();
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <h1 className='editor-h1'>Blog Editor V1.0.2</h1>
            {content==='loading' && <Loading/>}
            {content === 'editor' && <Editor data={data}/>}
        </React.Fragment>
    )
}

export default BlogEditorV1_0_2;
