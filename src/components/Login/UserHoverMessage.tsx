import React from 'react'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function UserHoverMessage() {
    return (
        <div className="relative w-full flex justify-end">
            <div className="flex items-center justify-center w-5 h-5 group border border-main rounded-full">
                <FontAwesomeIcon icon={faInfo} className="text-xs flex items-center justify-center≈" />
                <div className="absolute hidden group-hover:flex flex-col items-center top-full mt-2 w-full">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-md w-[150px] text-center">
                        Hello, This login option is only for the owner. Sorry!
                    </span>
                </div>
            </div>
        </div>
    )
}
