import React from 'react'
import './stylesheets/p404.css'
import Navbar from '../NavbarComponents/Navbar';

const P404 = () => {
    return (
        <>
        <Navbar/>
        <div className="cover-404">
            <a href="https://codepen.io/ZonFire99/full/njdls/" className="viewFull-404" target="_parent">View in full it looks way better :)</a>
            <div className="error-404">

                <div className="wrap-404">
                    <div className="404">
                        <pre>
                            <code>
                                <span className="green-404">&lt;!</span><span>DOCTYPE html</span><span className="green-404">&gt;</span><br />
                                <span className="orange-404">&lt;html&gt;</span>
                                <br />
                                <span className="orange-404">&lt;style&gt;</span>
                                <br />
                                <span className="green-404">everything</span>:<span className="blue-404">awesome</span>;
                                <br />
                                <span className="orange-404">&lt;/style&gt;</span>
                                <br />
                                <span className="orange-404">&lt;body&gt;</span>
                                <br />
                                ERROR 404!
                                FILE NOT FOUND!
                                <br />
                                <span className="comment-404">&lt;!--The file you are looking for,
                                    is not where you think it is.--&gt;
                                </span>
                                <span className="orange-404"></span>           
                                <span className="info-404">
                                    <span className="orange-404">&nbsp;&lt;/body&gt;</span>
                                    <span className="orange-404">&lt;/html&gt;</span>
                                </span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default P404
