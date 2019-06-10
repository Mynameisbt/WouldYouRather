import React, { Component } from 'react'
import { connect } from 'react-redux'


class CreateQuestionsView extends Component {

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div className='question-panel'>
                <h3>Create New Question</h3>
                <h4>Would you rather?</h4>
                <div><input type="text" name="optionOne"></input></div>
                <h4>OR</h4>
                <div><input type="text" name="optionTwo"></input></div>
                <button>Create</button>
            </div>
        )
    }
}

function mapStateToProps ( {authenticate, questions}, props) {
    return {
        currentUser: authenticate.users[authenticate.currentUser],
    }
}


export default connect(mapStateToProps)(CreateQuestionsView)