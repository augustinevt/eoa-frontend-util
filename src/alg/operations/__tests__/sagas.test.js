import { take, put, yeild, call, takeLatest } from 'redux-saga/effects';

import api from './../../../api';
jest.mock('./../../../api', ()=> {
  return () => 42;
});

import saga, {fetchUser} from '../sagas';

it('root', () => {
  const gen = saga();
  expect(gen.next().value).toEqual(takeLatest("USER_FETCH_REQUESTED", fetchUser));
});

it('fetchUser', () => {
  const gen = fetchUser();
  expect( gen.next().value ).toEqual( call(api, 'fake_data', {txnId: 3}) );
});
