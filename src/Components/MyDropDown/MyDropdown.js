import React, { useEffect, useState } from 'react'
import "./MyDropdown.css"
import { findIsExist } from '../../Lib/Helpers'
const MyDropdown = ({ data = [], title, initialValue = [], onFilterChange }) => {
  const [selected, setSelected] = useState([])

  function selectHandler(newEle, checked) {
    const isExist = findIsExist(selected, newEle.value, "value")
    if (isExist && !checked) {
      setSelected(selected.filter((ele) => ele.value !== newEle.value))
    } else {
      setSelected([...selected, newEle])
    }
  }

  //adding a selected item as initial
  useEffect(() => {
    if (initialValue && data) {
      const newFilteredValues = data.filter((ele) => initialValue.includes(ele.value))
      setSelected(newFilteredValues)
    }
  }, [initialValue, data])

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(selected)
    }
  }, [selected, onFilterChange])

  return (
    <div className='w-100 a_dropdown'>
      <div className="dropdown w-100">
        <span className='dropdown-toggle a_h12 text-center' type="button" data-bs-toggle="dropdown" aria-expanded="false">{title}</span>
        <ul className='dropdown-menu a_dropdown_menu border-0 shadow rounded-0  rounded-bottom a_h13'>
          {data.map((ele, index) => {
            return <li key={index} className='d-flex gap-2 align-items-center px-3 py-2'>
              <input checked={findIsExist(selected, ele.value, "value")} onChange={({ target: { checked } }) => selectHandler(ele, checked)} type="checkbox" id={ele.value} />
              <label className='a_h11 w-100' htmlFor={ele.value}>{ele.lable}</label>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default MyDropdown