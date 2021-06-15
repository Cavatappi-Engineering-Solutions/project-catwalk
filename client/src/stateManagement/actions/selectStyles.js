import axios from 'axios'
import { API_KEY } from '../../../../config.js'

export const type = {
  GET_PRODUCT_STYLES: 'GET_PRODUCT_STYLES'
}

const getProductsStyle = (data) => ({
  type: type.GET_PRODUCT_STYLES,
  payload: data
})

export const retrieveProductStyle = (id) => dispatch => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}/styles`,
    headers: { Authorization: API_KEY }
  }
  return axios(options)
    .then(({ data }) => {
      dispatch(getProductsStyle(data))
    })
    .catch((error) => {
      console.log(error)
    })
}
