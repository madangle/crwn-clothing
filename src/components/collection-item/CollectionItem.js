import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/CustomButton';
import {addItemToCart} from '../../redux/cart/cart.actions';

import './CollectionItem.scss';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            >
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

            <CustomButton onClick={()=>addItem(item)} inverted>
                Add to cart
            </CustomButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
});

// here we define a new prop called addItem which is a function that receives the item and whenever is called, 
//it will trigger the action addItemToCart with the given item content.

export default connect(
    null, 
    mapDispatchToProps
)(CollectionItem);
