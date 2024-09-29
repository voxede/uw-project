import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <h1>My App</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header