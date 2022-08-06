import React from 'react'
import './Home.css'
import Header from '../../components/Header'
import Card from '../../components/Card'

export default function Home() {
    return (
        <div>
            <Header />

            <div className='home-container'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}