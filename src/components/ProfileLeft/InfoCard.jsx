import React from 'react'
import { UilEdit } from '@iconscout/react-unicons'
import { UilEnvelopeHeart } from '@iconscout/react-unicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilBag } from '@iconscout/react-unicons'

const InfoCard = () => {
    return (
        <div className='flex flex-col gap-3 bg-[color:var(--card-color)] py-9 px-7 rounded-md'>
            <div className='flex justify-between'>
                <h4 className='font-bold text-lg'>Your Info</h4>
                <div className='cursor-pointer'>
                    <UilEdit />
                </div>
            </div>

            <div className='py-4 flex flex-col gap-3'>
                <div className='info'>
                    <UilEnvelopeHeart />
                    <span>Status </span>
                    <span className='font-bold'>in Relationship</span>
                </div>

                <div className='info'>
                    <UilEstate />
                    <span>Lives in </span>
                    <span className='font-bold'>Tangerang</span>
                </div>

                <div className='info'>
                    <UilBag />
                    <span>Works at </span>
                    <span className='font-bold'>PT Max Solution Indonesia</span>
                </div>
            </div>

            <button className='button py-2 mt-6'>Logout</button>
        </div>
    )
}

export default InfoCard