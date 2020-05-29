import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/Collection';
import Spinner from '../../components/spinner/Spinner';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends React.Component {
    
    state = {
        loading: true
    };
    //react will handle the constructor functionality behind the hood

    unsubcribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        //observable pattern
        this.unsubcribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });

        //promise pattern
        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // })
    }
    
    render (){
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => (
                        <CollectionOverviewWithSpinner isLoading={loading} {...props} /> 
                    )} 
                />
                        
                <Route 
                    exact 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => (
                        <CollectionPageWithSpinner isLoading={loading} {...props} /> 
                    )} 
                />
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
