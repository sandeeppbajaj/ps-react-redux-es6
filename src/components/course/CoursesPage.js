import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
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
