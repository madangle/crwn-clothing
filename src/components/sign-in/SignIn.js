import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

import './SignIn.scss';

const SignIn = ({googleSignInStart, emailSignInStart}) => {

    const [state, setState] = React.useState({
        email : '',
        password : ''
    });

    const handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = state;
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email" 
                    value={state.email} 
                    name="email" 
                    onChange={handleChange}
                    label="Email"
                    required 
                />
                <FormInput 
                    type="password" 
                    value={state.password}  
                    name="password" 
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Submit</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>                
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({
        email, password
    })),
})
export default connect(null, mapDispatchToProps)(SignIn);