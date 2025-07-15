import React from 'react'
import Input from '../shared/common/Input'
import Button from '../shared/common/Button'

const SearchBox = () => {
  return (
    <div className='space-y-3'>
      <h1 className='text-[17px] font-semibold text-gray-800'>What are you Looking For?</h1>
      <div className="relative">
        <Input placeholder="Search..." type="text" className="relative border border-gray-200 rounded-2xl px-3 py-2 focus:outline-none" />
        <Button className="absolute right-0 bg-black text-sm text-white rounded-2xl px-3 py-2" name="Search" />
      </div>
      <p className='text-sm px-2'>style, technology, travel, tips...</p>
    </div>
  )
}

export default SearchBox
