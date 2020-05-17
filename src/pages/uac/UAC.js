import React from 'react';
import './UAC.scss';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const UAC = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />

        <SignUp />
    </div>
)

export default UAC;