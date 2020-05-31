import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';

import Spinner from '../../components/spinner/Spinner';

import CollectionPage from './Collection';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CollectionPage);

export default CollectionPageContainer;