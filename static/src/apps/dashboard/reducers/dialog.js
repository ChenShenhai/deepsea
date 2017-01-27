const dialog = ( state = {}, action = {} ) => {
  switch ( action.type ) {
    case 'SET_DIALOG_OPTIONS':
      return action.dialogProps 
    default:
      return state
  }
}

export default dialog
