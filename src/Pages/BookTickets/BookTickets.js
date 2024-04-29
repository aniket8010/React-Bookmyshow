import React from 'react'
import "./BookTickets.css"
import { useLocation } from 'react-router-dom'
import { Filters } from './Filters'
import { Theaters } from './Theaters'
const BookTickets = () => {
    const { state, search } = useLocation()
    const params = new URLSearchParams(search)
    return (
        <div className='a_book_tickets'>
            <div className='bg-white pt-5'>
                <div className="container">
                    <h1 className='fw-normal a_cursor_pointer'>{params.get("title")} - {params.get("language")}</h1>
                    <div className='d-flex gap-2 align-items-center my-2'>
                        <button style={{ width: 27, height: 27 }} className='bg-white text-secondary border-secodary border rounded-pill a_h12'>{state?.certification}</button>
                        {state?.category?.map((ele, index) => {
                            return <button style={{ height: 20 }} key={index} className='bg-white text-secondary border-secodary border rounded-pill a_h12'>{ele}</button>
                        })}
                    </div>
                </div>
                <div className="border-top">
                    <div className='container'>
                        <Filters />
                    </div>
                </div>
            </div>
            <div className='my-5'></div>
            <div className='container my-2 bg-white p-0'>
                <Theaters />
            </div>
        </div>
    )
}

export default BookTickets