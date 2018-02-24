import { packageModules } from '../monsoon_utils';
import reducer from './operations/reducer';
import duckSaga from './operations/sagas';

export const saga = duckSaga;
export const containers = packageModules(require.context('./', true, /Container\.js$/));
export default reducer;
