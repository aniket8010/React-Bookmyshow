import React from 'react'
import "./AppModel.css"
import { IoClose } from "react-icons/io5";

const AppModel = ({ width = 30, onClose, open = false, children }) => {

    if (!open) return null
    return (
        <div className='a_app_modal'>
            <div style={{ width: `${width}%` }} className="a_modal_content_box bg-white rounded-2">
                {children}
                <div onClick={onclose} className="a_close_btn">
                    <IoClose />
                </div>
            </div>
        </div>
    )
}

export default AppModel