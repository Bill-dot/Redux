import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {
    // renderItem(library){
    //     return(
    //         <ListItem
    //             library={library}
    //         />
    //     )
    // }
    render() {
        return (
            <FlatList
                data={this.props.library}
                renderItem={(item) => <ListItem
                    library={item}
                />}
                keyExtractor={library => library.id}
            />
        )
    }
}
mapStateToProps = (state) => {
    // console.log(state.library)
    return { library: state.library }
}

export default connect(mapStateToProps)(LibraryList)