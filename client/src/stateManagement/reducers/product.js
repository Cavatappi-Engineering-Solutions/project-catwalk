import { type } from '../actions/product';

const productReducer = (state = {}, action) => {
    switch(action.type) {
        case type.GET_PRODUCT:
            return action.payload;
        default:
            return state;
    }  
}

export default productReducer;