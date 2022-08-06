import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header'
import Card from '../../components/Card'
import ModalDelete from '../../components/ModalDelete'

export default function Home() {
    // MODAL DELETE
    const [showModalDelete, setShowModalDelete] = useState(false);
    const handleCloseModalDelete = () => setShowModalDelete(false);
    const handleShowModalDelete = () => setShowModalDelete(true);

    return (
        <>
            <Header />

            <div className='home-container'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <ModalDelete show={showModalDelete} handleClose={handleCloseModalDelete} />
        </>
    )
}