import shopActionTypes from './shop.types';

const INITIAL_DATA = {
    collections: null,
    isFetching: false,
    errorMessage: ''
};

const shopReducer = (state = INITIAL_DATA, action) => {
    switch(action.type){

        case shopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            };

        case shopActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };

        case shopActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
            
        default:
            return state;
    }
}

export default shopReducer;