import { type } from '../actions/selectStyles'

const productStylesReducer = (state = {}, action) => {
  switch (action.type) {
    case type.GET_PRODUCT_STYLES:
      return action.payload
    default:
      return state
  }
}

export default productStylesReducer
