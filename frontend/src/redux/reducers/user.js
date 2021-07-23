
const fn = (preState = {}, action) => {
  const { type, data } = action
  switch (type) {
    case 'addUser':
      return data
    default:
      return preState
  }
}
export default fn