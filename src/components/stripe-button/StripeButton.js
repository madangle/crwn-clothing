import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100; //needs the amount in cents
    const publishableKey = 'pk_test_6eejzBKwgmvpC223ewE0avgc001ZFWDqiG';

    const onToken = token => {
        console.log(token);
        alert(' Payment Successful');
    };

    return (
        <StripeCheckout 
            label = 'Pay Now' 
            name = 'CRWN Clothing Ltd.' 
            billingAddress 
            shippingAddress 
            image = 'https://svgshare.com/i/CUz.svg' 
            description = {`Your total is $${price}`}  
            amount = {priceForStripe}
            panellabel = 'Pay Now' 
            token = {onToken} 
            stripeKey = {publishableKey}
        />
    )

}

export default StripeCheckoutButton;