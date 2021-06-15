import axios from 'axios'
import { API_KEY } from '../../../../config.js'

export const type = {
  GET_PRODUCT: 'GET_PRODUCT'
}

const getProducts = (data) => ({
  type: type.GET_PRODUCT,
  payload: data
})

export const retrieveProduct = (id) => dispatch => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}`,
    headers: { Authorization: API_KEY }
  }
  return axios(options)
    .then(({ data }) => {
      dispatch(getProducts(data))
    })
    .catch((error) => {
      console.log(error)
    })
}
