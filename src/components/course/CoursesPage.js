import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(storeState, ownProps) {
  return {
    courses: storeState.courses //Reducer alias in rootReducer
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// Multi-line method
// const connectedStatesAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStatesAndProps(CoursesPage);

// Single-line method
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
