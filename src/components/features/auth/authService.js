export const loginUser = async (credentials) => {
    try {
        const response = await fetch('api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        if(!response.ok) throw new Error('Login failed')
        
        const data = await response.json()
        console.log('Login successful', data)
    } catch(error) {
        console.error(error)
    }
}