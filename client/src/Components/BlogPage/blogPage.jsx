import React,{useEffect, useState} from 'react'
import EasyCard from '../BlogCards/EasyCard'
import api from '../../Util/api'
import "./blogpage.css"
import Navbar from '../NavbarComponents/Navbar'
const BlogPage = (props) => {
    var a="";
    const [content, setContent]=useState([]);
    var cont
    useEffect(() => {
        async function getmeBlogs(){
            try{
                cont= await api.get('http://localhost:8000/api/v1/blogs');
                a=cont.data.data.allBlogs; 
                setContent(a);
            }
            catch(err){
            }
        }
        getmeBlogs(); 
    }, [])
    const [Uid, setUid] = useState();
useEffect(() => {
    async function fetchMyAPI() {
        try {
            let res = await api.get('user/isLoggedIn', { withCredentials: true });
            if (res.data.user) {
                setUid(res.data.user._id);
            }
        } catch (err) {
            
        }
    }
    fetchMyAPI()
},[]);

const [numBlogs, numBlogsSetter]=useState(Math.floor(window.innerWidth/350))
function check(){
    numBlogsSetter(Math.floor(window.innerWidth/350));
}

function Renderer(content){
    const [dp, dpSetter]=useState();
    var now=new Date();
    var post=new Date(content.date);
    var net=((now-post)/(1000*60*60*24));
    var bloggerPic="";
    if(net>365){
        net='Long Time ago';
    }
    else{
        if(net>30){
        net=Math.floor(net/30)+" Mon ago";
        }
        else{
            if(net>7){
                net=Math.floor(net/7)+" W ago";
            }
            else{
                if(net>1){
                net=Math.floor(net)+ " D ago";
                }
                else{
                    if(net*24>1)
                net=Math.floor(net*24)+ "h ago"
                    else{
                        net="now";
                    }
                }
            }
        }
    }
    
    useEffect(() => {
       async function getMePhoto(id){
        try{
            bloggerPic= await api.get('http://localhost:8000/api/v1/user/'+id);
            bloggerPic=bloggerPic.data.user.dp
            dpSetter(bloggerPic);
        }
        catch(err){
            
        }
    }
    getMePhoto(content.authorID); 
    }, [])

    
    var trimmedStringContent = (content.content.blocks[0].data.text).substring(0, 80);
    var trimmedStringTitle = ((content.title).substring(0, 50));
    return(
        <EasyCard content={trimmedStringContent+"..."} category={content.category} uid={Uid} title={trimmedStringTitle} blogLink={content.blogImages[0]} interval={net} bloggerPic={dp} ID={content._id} upvotes={content.upvotes}  />
    )
}



window.addEventListener("resize",check);

function CatBlogs(){
    return(
        <div className="sample-blogs" style={{gridTemplateColumns:"repeat("+(numBlogs-1)+",320px)", marginLeft:"20%"}}>
            {/* {renderer(numBlogs)} */}
            {props.option!=="Top Blogs"?content.filter(blog=>blog.category===props.option).map(Renderer):content.map(Renderer)}
        </div>
    )
}
    return (
        <>
            <div className="landing-page">
                <CatBlogs/>
            </div>
        </>
    )
}

export default BlogPage
