import React, { Component } from 'react'
import { CardSection } from './commons'
import { Text, TouchableWithoutFeedback, View, StyleSheet, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import * as action from '../actions'

class ListItem extends Component {
    
    componentWillUpdate(){
        LayoutAnimation.spring()
    }

    renderDescription() {
        const { library, enabled } = this.props
        if (enabled) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.item.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { item } = this.props.library
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(item.id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{item.title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
})

mapStateToProps = (state, ownProps)=>{
    const enabled = state.selectedLibraryId === ownProps.library.item.id
    return { enabled }
}


export default connect(mapStateToProps, action)(ListItem)