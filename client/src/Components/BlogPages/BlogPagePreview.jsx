import './stylesheets/pagePreview.css'
import React, {useEffect} from 'react'
import api from './../../Util/api';
import { convertDataToHtml } from './../../Util/editorjsToHTML';
import './stylesheets/Loading.css'

const Loading = () => {
    return (<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>);
}


const BlogPagePreview = () => {
    const [loading, setLoading] = React.useState('loading');
    let htmlData= React.useRef(null);

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const res = await api.get('user/currentBlog', { withCredentials: true });
                htmlData.current = convertDataToHtml(res.data.blog.blocks);
                setLoading('not-loading');
            } catch (err) {
              alert(err);
            }
        }
        fetchMyAPI();
    },[]);

    return (
        <React.Fragment>
            {loading === 'loading' && <Loading/>}
            {loading !== 'loading' && <div className="blog-page-preview"  dangerouslySetInnerHTML={{ __html: htmlData.current }}></div>}
        </React.Fragment>
    );
}
export default BlogPagePreview
