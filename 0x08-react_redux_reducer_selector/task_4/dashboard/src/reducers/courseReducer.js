// reducers/courseReducer.js

import { fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = fromJS({
  coursesById: {}
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.mergeDeep(coursesNormalizer(action.data).entities);

    case SELECT_COURSE:
      return state.setIn(['coursesById', action.index, 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn(['coursesById', action.index, 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;
