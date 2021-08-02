import React from 'react'
import './stylesheets/ShoppingCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { BsStar} from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const ShoppingCard = () => {
    return (
        <div>
            <div id="container_sh">
                <div className="product-details">
                    <h1>CHRISTMAS TREE</h1>
                    <span className="hint-star star">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </span>
		
                    <p className="information_sh">" Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>
                    <div className="control">
                        <button className="btn_sh">
                            <span className="price">$250</span>
                            <span className="shopping-cart"><FontAwesomeIcon icon={faShoppingBag} /></span>
                            <span className="buy">Get now</span>
                        </button>
                    </div>
                </div>
                <div className="product-image">
                    <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className="info">
                        <h2> Description</h2>
                        <ul>
                            <li><strong>Height : </strong>5 Ft </li>
                            <li><strong>Shade : </strong>Olive green</li>
                            <li><strong>Decoration: </strong>balls and bells</li>
                            <li><strong>Material: </strong>Eco-Friendly</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCard;
