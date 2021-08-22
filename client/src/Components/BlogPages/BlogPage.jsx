import React from 'react'
import './stylesheets/BlogPageOne.css'
// function Subpart(props){
//     return(
//         <>
//         <h2 className="blog-subheading">{props.subTitle}</h2>
//         {props.subContent}
//         </>
//     )
// }
const BlogPageOne = (props) => {
    return (
        <article className="blog-content">
            <h1 className="entry-title">{props.blogTitle}</h1>
            <div className="featured-image-blog">
                <img src="https://images.unsplash.com/photo-1531096187418-86ac6b31baea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d6cd4e7c48dfc78f5e9c0fb07b692f0&auto=format&fit=crop&w=1350&q=80" alt="" />
            </div>
            
            <div className="entry-meta">
                <p><span className="author">Written by <a className="blog-link" href="user">Lavi Perchik</a></span> <span className="date">Monday, July 9, 2018</span></p>
            </div>
            <div className="entry-content" dangerouslySetInnerHTML={{ __html: props.content }}>
            </div>
            {/* <footer className="entry-footer"><p>Credit: <a className="blog-link" href="https://mor10.com/wordpress-the-15-year-revolution/">Mor10.com</a></p></footer> */}
        </article>
    );
}

export default BlogPageOne
