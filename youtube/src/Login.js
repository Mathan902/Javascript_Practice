import { useReducer } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';

const reducer = (state, action) => {
    switch (action.type) {
        case 'Email':
            return { ...state, email: action.email };
        case 'Password':
            return { ...state, password: action.password };
        default:
            return state;
    }
};

const Login = () => {
    const initialValues = {
        email: '',
        password: ''
    };
    
    const [values, dispatch] = useReducer(reducer, initialValues);
    const dispatchLogin = useDispatch();

    const handleLogin = () => {
        console.log(values);
        dispatchLogin({
            type: 'LOGIN',
            payload: {
                email: values.email,
                password: values.password
            }
        });
    };

    const handleEmailChange = (e) => {
        dispatch({ type: 'Email', email: e.target.value });
    };

    const handlePasswordChange = (e) => {
        dispatch({ type: 'Password', password: e.target.value });
    };

    return (
        <div className="login-container">
            <div className="login-field-container">
                <input
                    placeholder="Email"
                    className="input-field"
                    onChange={handleEmailChange}
                />
                <input
                    placeholder="Password"
                    className="input-field"
                    type="password"
                    onChange={handlePasswordChange}
                />
                <button className="sign-in-button" onClick={handleLogin}>
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Login;
