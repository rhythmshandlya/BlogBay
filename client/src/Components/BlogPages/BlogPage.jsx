import React from 'react'
import './stylesheets/BlogPageOne.css'
const BlogPageOne = () => {
    return (
        <article className="blog-content">
            <h1 className="entry-title">Flexible Post Layout using CSS Grid</h1>
            <div className="featured-image-blog">
                <img src="https://images.unsplash.com/photo-1531096187418-86ac6b31baea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d6cd4e7c48dfc78f5e9c0fb07b692f0&auto=format&fit=crop&w=1350&q=80" alt="" />
            </div>
            
            <div className="entry-meta">
                <p><span className="author">Written by <a className="blog-link" href="user">Lavi Perchik</a></span> <span className="date">Monday, July 9, 2018</span></p>
            </div>
            <div className="entry-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, necessitatibus, veritatis voluptates corrupti ipsum minus accusamus dicta mollitia inventore doloribus omnis ex! Nemo doloribus molestias saepe, rerum possimus molestiae est.</p>
                <p>Obcaecati laboriosam non sunt, consequuntur nam quae repudiandae animi dolore atque aut aliquam aspernatur praesentium officiis magnam esse aliquid eveniet veritatis consequatur ducimus! Totam aperiam ex porro nostrum rem quos!</p>
                <p>A quos tenetur dolor laboriosam, eveniet ex qui ullam quibusdam magnam eius debitis possimus nesciunt distinctio dolores dignissimos! Alias explicabo maiores cum iure inventore harum deleniti odio doloribus sequi magnam!</p>
                <h2 className="blog-subheading"> Secondary Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, omnis quo? Hic assumenda adipisci cupiditate labore et animi illum magnam at. Sed est nobis similique doloribus? Culpa laudantium laboriosam asperiores?</p>
                <h2 className="blog-subheading" >Another One</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos rem error laudantium eveniet, sed, eius rerum omnis cupiditate odio tenetur accusantium quaerat explicabo provident vero a qui optio. Ut, magni.</p>
                <p>Enim natus modi aspernatur eaque, facere eius nihil perspiciatis at? Temporibus, sequi cum similique veniam corrupti, obcaecati eligendi expedita rerum necessitatibus iste exercitationem voluptatem, maiores voluptatibus impedit enim assumenda quisquam.</p>
            </div>
            <footer className="entry-footer"><p>Credit: <a className="blog-link" href="https://mor10.com/wordpress-the-15-year-revolution/">Mor10.com</a></p></footer>
        </article>
    );
}

export default BlogPageOne
