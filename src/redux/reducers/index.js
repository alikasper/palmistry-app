import { combineReducers } from 'redux';
import lifeLine from './lifeLine';
import heartLine from './heartLine';
import headLine from './headLine';
import fateLine from './fateLine';

export default combineReducers({lifeLine, heartLine, headLine, fateLine});