import React from 'react'

const BulkBooking = () => {
    return (
        <div className='my-2 text-white a_bulk_booking position-relative' style={{ background: "url(https://assets-in.bmscdn.com/webin/corporate/bulk-booking.png)" }}>
            <div className='position-absolute top-0 start-0 w-100 h-100' style={{ background: "rgba(0,0,0,0.5)", zIndex: 1 }}></div>
            <div className='row justify-content-between align-items-center position-relative' style={{ zIndex: 2 }}>
                <div className="col-12 col-md-5">
                    <h6 className='my-3'>Bulk Booking</h6>
                    <h2>Exclusive corporate experiences from BookMyShow</h2>
                </div>
                <div className="col-12 col-md-3 text-center">
                    <button className="a_redlite_color py-3 text-white btn btn-sm fw-bold a_h17 w-100">Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default BulkBooking