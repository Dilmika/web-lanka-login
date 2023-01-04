import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'


export default function Navbar() {

    const [user, setUser] = useState(null)

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"))
        setUser(user)

    }, [])

    const handleClick = () => {
        localStorage.removeItem('user')
        window.location.href = '/login'
    }


    return (
        <header>
            <div className="container">
                <nav>
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick} >Logout</button>
                        </div>
                    )}

                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}

                </nav>

            </div>

        </header>
    )
}
