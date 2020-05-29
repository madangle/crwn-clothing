import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';


import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/Collection';
import Spinner from '../../components/spinner/Spinner';

const CollectionOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends React.Component {
    
    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }
    
    render (){
        const {match, isCollectionFetching, isCollectionLoaded } = this.props;
        return (
            <div className="shop-page">
                
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => (
                        <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} /> 
                    )} 
                />
                        
                <Route 
                    exact 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => (
                        <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} /> 
                    )} 
                />

            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching : selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
