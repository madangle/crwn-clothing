import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

import './CollectionOverview.scss';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
    {
        collections.map(({id, ...otherCollectionParams}) => (
            <CollectionPreview key={id} {...otherCollectionParams} />
        ))  
    }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
