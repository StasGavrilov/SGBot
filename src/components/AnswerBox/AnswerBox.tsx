'use client'
import { useState, useRef, useEffect, ReactNode } from 'react'

interface AnswerBoxProps {
    children?: ReactNode
}

export default function AnswerBox({ children }: AnswerBoxProps) {
    const [copied, setCopied] = useState(false)
    const [visible, setVisible] = useState(false)
    const boxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (boxRef.current) {
            const text = boxRef.current.innerText.trim()
            setVisible(text.length > 0)
        }
    })

    const handleCopy = () => {
        if (boxRef.current) {
            const text = boxRef.current.innerText.trim()
            if (text) {
                navigator.clipboard.writeText(text)
                setCopied(true)
                setTimeout(() => setCopied(false), 1500)
            }
        }
    }

    return (
        <div
            className={`relative bg-gray-800 text-white rounded-lg p-4 shadow-md border border-gray-700 transition-all duration-300 mx-auto max-w-[700px] w-full mt-4
                ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                `}
        >
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-sm px-3 py-1 rounded transition"
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>

            <div ref={boxRef} className="whitespace-pre-wrap break-words text-sm font-mono">
                {children}
            </div>
        </div>
    )
}
