import axios from 'axios'

export const type = {
  GET_PRODUCT_STYLES: 'GET_PRODUCT_STYLES'
}

const getProductsStyle = (data) => ({
  type: type.GET_PRODUCT_STYLES,
  payload: data
})

export const retrieveProductStyle = (id) => (dispatch) => {
  const options = {
    method: 'GET',
    url: `api/fec2/hrnyc/products/${id}/styles`
  }
  return axios(options)
    .then(({ data }) => {
      dispatch(getProductsStyle(data))
    })
    .catch((error) => {
      console.log(error)
    })
}
