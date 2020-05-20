import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({itemCount, toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
});
//its called a selector


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);