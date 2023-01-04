import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'


export default function Login() {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email,password})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
          setIsLoading(false)
            localStorage.setItem('user',JSON.stringify(json))
            window.location.href = '/'
            
        }


    
      }

  return (
    <form className="login" onSubmit={handleSubmit}>
    <h3>Log In</h3>

    <label>Email address:</label>
    <input
      type="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    />
    <label>Password:</label>
    <input
      type="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
    />

    <button disabled={isLoading} >Log in</button>
    {error && <div className='error'>{error}</div>}

  </form>
  )
}
