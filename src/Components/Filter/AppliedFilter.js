import React from 'react'
import { Button } from '../Buttons/Button'

export const AppliedFilter = ({ title, buttons }) => {
    return (
        <div>
            <h4>{title}</h4>
            <div className='d-flex gap-2 mt-2 flex-wrap'>
                {buttons.map((ele) => {
                 return   <Button isRounded={true} title={ele} />
                })}
            </div>
        </div>
    )
}
