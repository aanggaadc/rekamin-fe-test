import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header'
import Card from '../../components/Card'
import ModalDelete from '../../components/ModalDelete'
import CreateEditModal from '../../components/CreateEditModal'

export default function Home() {
    // MODAL CREATE & EDIT
    const [showModalCreateEdit, setShowModalCreateEdit] = useState(false);
    const handleCloseModalCreateEdit = () => setShowModalCreateEdit(false);
    const handleShowModalCreateEdit = () => setShowModalCreateEdit(true);

    // MODAL DELETE
    const [showModalDelete, setShowModalDelete] = useState(false);
    const handleCloseModalDelete = () => setShowModalDelete(false);
    const handleShowModalDelete = () => setShowModalDelete(true);

    return (
        <>
            <Header />

            <div className='home-container'>
                <Card handleShowModalCreateEdit={handleShowModalCreateEdit} />
                <Card />
                <Card />
                <Card />
            </div>

            <ModalDelete show={showModalDelete} handleClose={handleCloseModalDelete} />
            <CreateEditModal show={showModalCreateEdit} handleClose={handleCloseModalCreateEdit} />
        </>
    )
}