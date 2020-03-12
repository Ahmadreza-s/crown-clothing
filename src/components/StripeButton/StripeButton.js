import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Tx1spdTVHCvNSieaG7nJA3pb00zuozUbng';

    const tokenHandler = token => {
        console.log(token);
        alert('Payment Successful');
    };
    return (
        <StripeCheckout
            label='Pay now'
            name='Crown Clothing Ltd.'
            bitcoin
            billingAddress
            shippingAddress
            image={'https://sendeyo.com/up/d/f3eb2117da'}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={tokenHandler}
            stripeKey={publishableKey}
        />
    );
};

export default stripeButton;