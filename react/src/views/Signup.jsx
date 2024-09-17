import { Link } from "react-router-dom";

export default function Signup() {

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Signup</h1>
                    <input type="email" placeholder="Full name" />
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Password confirmation" />
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                        Already Registered? <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}