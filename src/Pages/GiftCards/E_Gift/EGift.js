import React, { useEffect, useState } from 'react'
import { dataCard } from './Data';

const EGift = () => {
    const [active, setActive] = useState("All");
    const [data, setData] = useState(dataCard)
    const btnsData = ["All", "Generic", "Combos"];

    useEffect(() => {
        const newData = dataCard.filter(({ type }) => {
            if (active === "All") {
                return true
            } else {
                return type === active
            }
        })
        setData(newData)
    }, [active])
    return (
        <div className='a_e_gift'>
            <h6 className='text-center text-secondary'>
                Pick a card from one of our themes
            </h6>
            <div className='d-flex justify-content-center my-3 gap-2'>
                {btnsData.map((ele, index) => {
                    return <button onClick={() => setActive(ele)} key={index} className={`a_e_gift_btn ${active === ele ? "active" : ""}`}>{ele}</button>
                })}
            </div>
            <div className="row">
                {data.map(({ imgpath, contentData }, index) => {
                    return <div key={index} className='col-12 col-md-3 mt-4'>
                        <div className="a_hover_content_box">
                            <div className="a_img_box">
                                <img src={imgpath} alt="" />
                            </div>
                            {contentData && <div className="a_content">
                                <table>
                                    <tbody>
                                        <tr style={{ height: 50 }}>
                                            <td style={{ width: 200 }}><h6 className='a_h15'>{contentData?.title1}</h6></td>
                                            <td style={{ textAlign: "end", alignSelf: "baseline" }}> <h6 className='a_h15'>₹ {contentData?.price1}</h6></td>
                                        </tr>
                                        <tr style={{ height: 20 }}>
                                            <td style={{ width: 200 }}><h6 className="a_h13">{contentData?.title2}</h6></td>
                                            <td style={{ textAlign: "end" }}> <h6 className="a_h13">₹ {contentData?.price2}</h6></td>
                                        </tr>
                                        <tr style={{ height: 30 }}>
                                            <td style={{ width: 200 }}><h6 className="a_h13">BookMyShow Instant Gift Card</h6></td>
                                            <td style={{ textAlign: "end" }}> <h6 className="a_h13">₹ {contentData?.price3}</h6></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className='border-0 p-2 rounded-3 mt-3 w-75 mx-auto text-white a_redlite_color'>Buy Now</button>
                            </div>}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default EGift