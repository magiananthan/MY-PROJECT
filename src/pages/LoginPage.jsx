import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Sign In</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <button className="primary mb-2">SIGN IN</button>
                    <button className="primary mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.9 0 6.8 1.6 8.4 3.3l6.2-6.2C34.9 3.6 30 1.5 24 1.5 14.5 1.5 6.9 7.1 3.8 15.5l7.4 5.7C12.6 16.7 17.8 9.5 24 9.5z"></path>
                            <path fill="#4285F4" d="M46.6 24.5c0-1.6-.1-2.8-.4-4.1H24v8.4h12.8c-.6 3.3-2.3 6.1-4.9 8L41 42c5-4.6 7.6-11.4 7.6-17.5z"></path>
                            <path fill="#FBBC05" d="M12.5 28.3c-2.2-1.5-3.8-3.4-4.8-5.6L.3 28.4c2.3 4.6 5.7 8.3 10 10.8l7.9-6.2c-1.6-.8-3-2-4.2-3.5z"></path>
                            <path fill="#34A853" d="M24 46.5c5.3 0 9.7-1.7 12.9-4.6l-7.9-6.2c-2.1 1.4-4.7 2.2-7.5 2.2-5.7 0-10.5-3.9-12.2-9.2l-7.9 6.2C6.9 42.9 14.5 46.5 24 46.5z"></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                        Sign Up with Google
                    </button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet?
                        <Link className="underline text-bn" to={'/register'}> Register Now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}


