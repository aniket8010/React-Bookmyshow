import React from 'react'

const Partner = () => {
    const data=["axis-logo.avif","icici-logo.avif","hp-logo.avif","mastercard-logo.avif","ola-logo.avif"]
  return (
    <div className='container bg-white my-3 py-5 text-center a_partner'>
        <h6>OUR PARNTERS</h6>
        <div className='row justify-content-center mt-5'>
            {data.map((ele,Index)=>{
                return <div key={Index} style={{width:"17%"}}>
                    <div>
                        <img src={`Image/Corporates/${ele}`} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Partner