export default function fn(preState = 0, action) {
  const { type, data } = action;
  switch (type) {
    case 'add':
      return preState + data
    default:
      return preState
  }
}