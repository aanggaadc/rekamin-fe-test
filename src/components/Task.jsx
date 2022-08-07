import React from 'react'
import './Task.css'
import TenPercent from '../assets/TenPercent.svg'
import TwentyPercent from '../assets/TwentyPercent.svg'
import ThirtyPercent from '../assets/ThirtyPercent.svg'
import FourtyPercent from '../assets/ThirtyPercent.svg'
import FivtyPercent from '../assets/FivtyPercent.svg'
import SixtyPercent from '../assets/SixtyPercent.svg'
import SeventyPercent from '../assets/SeventyPercent.svg'
import EightyPercent from '../assets/EightyPercent.svg'
import NinetyPercent from '../assets/NinetyPercent.svg'
import Incompleted from '../assets/Incompleted.svg'
import Completed from '../assets/Completed.svg'
import { BsThreeDots } from "react-icons/bs";

export default function Task({ name, progress }) {
    const progressHandler = () => {
        if (progress === 0) {
            return <img src={Incompleted} alt="TenPercent" />
        } else if (progress > 0 && progress <= 10) {
            return <img src={TenPercent} alt="TenPercent" />
        } else if (progress > 10 && progress <= 20) {
            return <img src={TwentyPercent} alt="TwentyPercent" />
        } else if (progress > 20 && progress <= 30) {
            return <img src={ThirtyPercent} alt="TwentyPercent" />
        } else if (progress > 30 && progress <= 40) {
            return <img src={FourtyPercent} alt="TwentyPercent" />
        } else if (progress > 40 && progress <= 50) {
            return <img src={FivtyPercent} alt="TwentyPercent" />
        } else if (progress > 50 && progress <= 60) {
            return <img src={SixtyPercent} alt="TwentyPercent" />
        } else if (progress > 60 && progress <= 70) {
            return <img src={SeventyPercent} alt="TwentyPercent" />
        } else if (progress > 70 && progress <= 80) {
            return <img src={EightyPercent} alt="TwentyPercent" />
        } else if (progress > 80 && progress <= 99) {
            return <img src={NinetyPercent} alt="TwentyPercent" />
        } else {
            return <img src={Completed} alt="TwentyPercent" />
        }
    }
    return (
        <div className='task-container'>
            <div className='top'>
                {name}
            </div>
            <div className='line' />
            <div className='bottom'>
                {progressHandler()}
                <BsThreeDots color='#1D1F20' />
            </div>
        </div>
    )
}