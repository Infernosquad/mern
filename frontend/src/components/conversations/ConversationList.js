import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getConversations} from '../../actions/conversationActions'
import Container from "@material-ui/core/Container";

export class ConversationList extends Component {
    componentDidMount() {
        this.props.getConversations()
    }

    render() {
        const {conversations} = this.props.conversations;

        return (
            <Container component="main" maxWidth="xs">
                {conversations.map(c =>
                    <React.Fragment key={c.id}>
                        <h6>{c.id}</h6>
                    </React.Fragment>
                )}
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({conversations: state.conversations})

export default connect(mapStateToProps, {getConversations})(ConversationList)