import React from 'react'

const arrData = [
    "How will BookMyShow help grow my business?",
    "Whom should I use the BookMyShow vouchers for?",
    "Why are Incentives important?",
    "Where can the customers redeem the vouchers?",
    "What are the flexibility options for your service?",
    "If I have multiple admits on the voucher, can I split them?",
    "Can I use these vouchers in any city of India?",
    "Who can redeem the voucher?"
]

const arrData2 = [
    "Where can one redeem a Gift Voucher?",
    "Where can one redeem the WinPin voucher?",
    "Where can one redeem the Movie Pack voucher?",
    "For any concern & escalations, whom do I contact?",

]
const arrData3 = [
    "What is the mode of payment?",
    "How do I arrange for a larger corporate order? Whom do I contact for more information regarding this?"
]
const Questions = () => {

    return (
        <div className='my-5 container bg-white py-5 px-5'>
            <h5 className='fw-normal my-3'>FREQUENTLY ASKED QUESTIONS</h5>
            <div className="row py-3">
                <div className="col-12 col-md-5 text-start">
                    <h6 className='a_h18 fw-bold my-3'>General Queries</h6>
                    {arrData.map((value, index) => {
                        return <div key={index}>
                            <span className='a_h12 my-3 pb-3'>{value}</span>
                            <div className='border-top my-3'></div>
                        </div>
                    })}
                </div>
                <div className="col-12 col-md-5 text-start">
                    <h6 className='a_h18 fw-bold my-3'>Logistic Queries</h6>
                    {arrData2.map((value, index) => {
                        return <div key={index}>
                            <span className='a_h12 my-3 pb-3'>{value}</span>
                            <div className='border-top my-3'></div>
                        </div>
                    })}
                    <h6 style={{ margin: "42px 0px" }} className='a_h18 fw-bold '>Payment Queries</h6>
                    {arrData3.map((value, index) => {
                        return <div key={index}>
                            <span className='a_h12 my-3 pb-3'>{value}</span>
                            <div className='border-top my-3'></div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Questions