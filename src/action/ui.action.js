import * as types from './actionType';

export const route = (path) => ({ type: types.NAVIGATE, payload: path });