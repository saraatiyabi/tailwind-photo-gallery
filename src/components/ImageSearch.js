import React, { useState } from 'react'

export default function ImageSearch(props) {
    const [text, setText] = useState('')

    const submitSearchHandler = (e) => {
        e.preventDefault();
        props.setSearch(text)
    }
    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form className='w-full max-w-sm' onSubmit={submitSearchHandler}>
                <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
                    <input type='text' placeholder='Search Image...' onChange={e => setText(e.target.value)}
                        className='appearance-none bg-transparent border-none 
                        w-full text-gray-700 mr-3 px-2 py-1 leading-tight 
                        focus:outline-none'
                    />
                    <button type='submit' className='flex-shrink-0 bg-teal-500 
                    hover:bg-teal-700 border-teal-500 hover:border-teal-700 
                    text-sm text-white px-2 py-1 rounded'>Search</button>
                </div>
            </form>
        </div>
    )
}
