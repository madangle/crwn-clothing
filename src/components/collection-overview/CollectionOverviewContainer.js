import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import Spinner from '../spinner/Spinner';
import CollectionOverview from './CollectionOverview';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CollectionOverview);
//compose is used to chain the functions nested in the HOC
export default CollectionOverviewContainer;

