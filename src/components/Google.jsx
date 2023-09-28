import React from "react"
import './Google.css'
import { MdContentPasteSearch } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Google = () => {
    return (
        <>
            <div className="container">
                <div className="nav">
                    <ul >
                        <li className="text">Gmail</li>
                        <li className="text">Images</li>
                        <li className="icons"><MdContentPasteSearch /></li>
                        <li className="icons"><BsGrid3X3GapFill /></li>
                        <li className="icons"><MdAccountCircle /></li>
                    </ul>
                </div>
                <div className="heading">
                    <span className="G">G</span>
                    <span className="o1">O</span>
                    <span className="o2">O</span>
                    <span className="G2">G</span>
                    <span className="L">L</span>
                    <span className="E">E</span>
                </div>
                <div className="searchBar">
                    <input type="search" placeholder="search Google or type a url..."/>
                </div>
            </div>
        </>
    )

}

export default Google
