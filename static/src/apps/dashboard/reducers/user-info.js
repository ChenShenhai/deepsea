const userInfo = ( state = {}, action ) => {
  switch ( action.type ) {
    case 'SET_USER_INFO':
      return action.userInfo
    default:
      return state
  }
}

export default userInfo
