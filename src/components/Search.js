import React from 'react'

export default function Search(props) {
    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <input
                        onChange={props.handleChange}
                        type="text"
                        placeholder="Search.. by subject"
                        value={props.searchTerm}
                    />
                </div>
            </form>
        </div>
    )
}
