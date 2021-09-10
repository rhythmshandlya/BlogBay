import React from 'react'
import './NewCard.css'

const NewCard = ({blog}) => {
    return (
        <div className="newcard">
            <h1>{blog.title}</h1>
            <img src={blog.blogImages[0]} alt="" />
            <p className="newcard-date">{blog.date.toLocaleString().slice(0,blog.date.toLocaleString().indexOf('T') )}</p>
            <p className='newCard-summary'>{`${blog.summary.slice(0, 65)}`}</p>
            <a href={`blog/${blog._id}`} className="newCard-readmore">read more</a>
        </div>
    )
}

export default NewCard
