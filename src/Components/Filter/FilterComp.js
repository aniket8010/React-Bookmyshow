import React, { useState } from 'react'
import { GoChevronDown } from "react-icons/go";
import { Button } from '../Buttons/Button';
import { GoChevronUp } from "react-icons/go";

export const FilterComp = ({ buttons, title }) => {

    const [open, setOpen] = useState(true)
    function togglestate() {
        setOpen(!open)
    }
    return (
        <div>
            <div className='bg-white rounded p-2 py-3 shadow-sm my-2'>
                <div onClick={togglestate} className='d-flex justify-content-between align-items-center a_cursor_pointer a_user_select_none'>
                    <div className='d-flex align-items-center gap-3'>
                        {open ? <GoChevronUp /> : <GoChevronDown />}
                        <h6 className={`${open ? "a_redlite_color2" : "text-dark"}a_h13`}>{title}</h6>
                    </div>
                    <h6 className='a_h13 text-secondary'>Clear</h6>
                </div>
                {open && <div className='mt-3 d-flex flex-wrap gap-2'>
                    {buttons.map((value) => {
                        return <Button key={value} title={value} />
                    })}

                </div>}
            </div>
        </div>
    )
}
