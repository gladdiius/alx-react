import { bindActionCreators } from 'redux';
import { selectCourse, unSelectCourse } from './courseActionCreators';

export const boundSelectCourse = (index) => dispatch => {
  return bindActionCreators(selectCourse, dispatch)(index);
};

export const boundUnSelectCourse = (index) => dispatch => {
  return bindActionCreators(unSelectCourse, dispatch)(index);
};
