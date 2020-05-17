import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {signInWithGoogle} from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            'email' : '',
            'password' : ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name] : value
        })
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        value={this.state.email} 
                        name="email" 
                        onChange={this.handleChange}
                        label="Email"
                        required 
                    />
                    <FormInput 
                        type="password" 
                        value={this.state.password}  
                        name="password" 
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Submit</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;