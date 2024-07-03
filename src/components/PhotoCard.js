import React from 'react'

export default function PhotoCard(props) {
    const tags = props.tags ? props.tags.split(",") : []
    console.log(tags)
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={props.webformatURL} alt="" className="w-full" />
            <div className="px-4 py-6">
                <div className="font-bold text-purple-500 text-xl bs-2">
                    Photo By {props.user}
                </div>
                <ul>
                    <li>
                        <strong>Views:</strong>
                        {" "}
                        {props.views}
                    </li>
                    <li>
                        <strong>Likes:</strong>
                        {" "}
                        {props.likes}
                    </li>
                    <li>
                        <strong>Downloads:</strong>
                        {" "}
                        {props.downloads}
                    </li>
                </ul>
            </div>
            <div className='px-4 py-6'>
                {
                    tags.map(tag => (
                        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1 mt-2'>
                            #{tag}
                        </span>
                    ))
                }

            </div>
        </div>
    )
}
