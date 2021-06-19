import axios from 'axios'

export const type = {
  GET_PRODUCT: 'GET_PRODUCT'
}

const getProducts = (data) => ({
  type: type.GET_PRODUCT,
  payload: data
})

export const retrieveProduct = (id) => (dispatch) => {
  const options = {
    method: 'GET',
    url: `api/fec2/hrnyc/products/${id}`
  }
  return axios(options)
    .then(({ data }) => {
      dispatch(getProducts(data))
    })
    .catch((error) => {
      console.log(error)
    })
}
