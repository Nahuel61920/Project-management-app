import React from 'react'
import { Link } from "react-router-dom";

function hola() {
  return (
    <div>
        <button>
            <Link to={"/chau"} className="enlace-cuenta">
                Sign In
            </Link>
        </button>
    </div>
  )
}

export default hola