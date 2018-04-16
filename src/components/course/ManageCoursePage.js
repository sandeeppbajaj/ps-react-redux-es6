import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as  courseActions from '../../actions/courseActions'

export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        return (
          <h1>Manage Course</h1>
        );
    }
}

ManageCoursePage.propTypes = {
    //myProp: PropTypes.String.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
