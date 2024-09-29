import LoginForm from "../components/features/auth/LoginForm";
import Header from "../components/Header/Header";

const LoginPage = ({ setIsLoggedIn }) => {
    return (
        <div>
            <Header/>
            <main>
                <LoginForm setIsLoggedIn={setIsLoggedIn}/>
            </main>
        </div>
    )
}

export default LoginPage