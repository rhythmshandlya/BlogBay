import './style.css'
import React, {useEffect} from 'react'
import edjsHTML from 'editorjs-html';
import api from './../../Util/api';
const BlogPagePreview = () => {
    const edjsParser = edjsHTML();
    const [loading, setLoading] = React.useState('loading');
    let htmlData= React.useRef(null);

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const res = await api.get('user/currentBlog', { withCredentials: true });
                console.log(res.data.blog);
                htmlData.current = edjsParser.parse(res.data.blog).join("");
                console.log(htmlData.current);
                setLoading('not-loading');
            } catch (err) {
              alert(err);
            }
        }
        fetchMyAPI();
    },[]);

    return (
        <React.Fragment>
            {loading === 'loading' && <h1>Loading</h1>}
            {loading !== 'loading' && <div classname="abcde"  dangerouslySetInnerHTML={{ __html: htmlData.current }}></div>}
        </React.Fragment>
    );
}
export default BlogPagePreview
