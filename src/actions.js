import { CHANGE_SEARCHFIELD } from './constants';

export const setSeatchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});