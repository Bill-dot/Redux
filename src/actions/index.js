export const selectLibrary = (library) => {
    return (
        {
            type: 'select_libraryID',
            payload: library
        }
    )
}