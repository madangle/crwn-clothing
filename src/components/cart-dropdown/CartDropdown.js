import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import {selectCartItems} from '../../redux/cart/cart.selectors';

import './CartDropdown.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

//here we receive the global store as the primary input and we destructure them and them use it and pass it to the component as props

export default connect(mapStateToProps)(CartDropdown);