import React,{useEffect, useState} from 'react'
import EasyCard from '../BlogCards/EasyCard'
import api from '../../Util/api'
import "./blogpage.css"
import Navbar from '../NavbarComponents/Navbar'
const BlogPage = (props) => {
const [numBlogs, numBlogsSetter]=useState(Math.floor(window.innerWidth/350))
function check(){
    numBlogsSetter(Math.floor(window.innerWidth/350));
}
function isInCategory(cat){
    if(props.blogType.indexOf(cat)===-1){
        return false;
    }
    else{
        return true;
    }
}
function Renderer(content){
    console.log(props.blogType)
    console.log(content.category)
    if(isInCategory(content.category)){
        return(
            <EasyCard content={content}/>
        )
    }
}
function TopRenderer(content){
        return(
            <EasyCard content={content}/>
        )
}


window.addEventListener("resize",check);

function CatBlogs(){
    return(
        <div className="sample-blogs" style={{gridTemplateColumns:"repeat("+(numBlogs-1)+",320px)", marginLeft:"20%"}}>
            {console.log(props.blogType[0])}
            {props.blogType[0]==="Top Blog"?props.blogs.map(TopRenderer):props.blogs.map(Renderer)}
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
