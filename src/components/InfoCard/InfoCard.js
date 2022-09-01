import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'

export default function InfoCard() {
  return (
    <div className='InfoCard'>
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' />
            </div>
           
        </div>
        <div className="info">
            <span>
                <b>Status: </b>
            </span>
            <span>
                In a relationship💗
            </span>
        </div>

        <div className="info">
            <span>
                <b>Lives in: </b>
            </span>
            <span>
                 Duisburg, Germany 🇩🇪
            </span>
        </div>

        <div className="info">
            <span>
                <b>Works @</b>
            </span>
            <span>
                DCI👾
            </span>
        </div>

<button className='button logout-button'>Log out</button>
    </div>
  )
}
