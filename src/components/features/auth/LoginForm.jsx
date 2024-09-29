import { useState } from 'react';
import Input from '../../Form/Input/Input'
import Button from '../../Form/Button/Button'

const LoginForm = ({ setIsLoggedIn }) => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const hardUser = 'admin'
    const hardPassword = 'admin123'

    const handleUser = e => setUser(e.target.value)

    const handlePassword = e => setPassword(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        if(user === '' || password === '') {
            alert('The username and password are required')
            return
        }

        if(user === hardUser && password === hardPassword) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
            alert('Invalid username or password')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="User"
                type="text"
                name="user"
                value={user}
                onChange={handleUser}
            />
            <Input
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
            />
            <Button
                type="submit"
                children="Login"
            />
        </form>
    )
}

export default LoginForm