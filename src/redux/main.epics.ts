import { combineEpics } from 'redux-observable';
import home from './home/epics';

const rootEpic = combineEpics<any>(...home);

export default rootEpic;
