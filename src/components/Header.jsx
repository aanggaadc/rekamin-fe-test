import React from 'react'
import './Header.css'
import { BsPlus } from "react-icons/bs";

export default function Header() {
    return (
        <header id='header'>
            <h1>Product Roadmap</h1>
            <button>
                <BsPlus size={20} />
                Add New Group
            </button>
        </header>
    )
}