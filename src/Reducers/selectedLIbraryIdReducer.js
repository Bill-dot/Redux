export default selectedLibraryIdReducer = (state = null, action) => {
    switch (action.type) {
        case 'select_libraryID':
            return action.payload
        default:
            return state
    }
}