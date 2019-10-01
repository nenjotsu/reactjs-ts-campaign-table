import { handleActions } from 'redux-actions';
import * as ACTION from './actions';
import model from './model';

export default handleActions(
  {
    [`${ACTION.showSpinner}`]: state => ({
      ...state,
      isLoading: true,
    }),
    [`${ACTION.hideSpinner}`]: state => ({
      ...state,
      isLoading: false,
    }),
  },
  model,
);
