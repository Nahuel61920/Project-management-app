import React from 'react'

function Bar() {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hello <span>Nahuel Esteban</span></p>
            <nav className="nav-principal">
                <a href="#!">Log Out</a>
            </nav>
        </header>
    )
}

export default Bar