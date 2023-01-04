import React, {useState} from 'react'

export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [contactNo, setContactNo] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:5000/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({name,email,password,address,contactNo})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        setIsLoading(false)

        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            window.location.href = '/'
        }

    }

  return (
    <form className="signup" onSubmit={handleSubmit}>
    <h3>Sign Up</h3>

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
        <label>Contact No:</label>

        <input
        type="number"
        onChange={(e) => setContactNo(e.target.value)}
        value={contactNo}
    />
        <label>Address:</label>

        <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
    />
        <label>Name:</label>

        <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
    />

    <button disabled={isLoading}>Sign up</button>
    {error && <div className='error'>{error}</div>}
</form>
  )
}
