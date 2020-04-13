import React from 'react'

export default function Button( {children, onClick, type, style, className}) {
    return (
        <button 
        className={className}
        style={style}
        onClick={onClick}
        >
            {children}
        </button>
    )
}
