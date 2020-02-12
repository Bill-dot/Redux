import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import selectedLIbraryIdReducer from './selectedLIbraryIdReducer'

export default combineReducers({
    library: LibraryReducer,
    selectedLibraryId: selectedLIbraryIdReducer
})
