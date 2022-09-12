import React from 'react'

function Project({project}) {
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >{project.name}</button>
        </li>
    )
}

export default Project