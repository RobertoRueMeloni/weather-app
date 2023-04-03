import { createReducer, on } from '@ngrx/store';
// import { updateUserProfile } from './user.actions';
import { updateUserProfile } from './user.actions';

export interface UserState {
  email: string;
  name: string;
}

export const initialState: UserState = {
  email: '',
  name: ''
};

export const userReducer = createReducer(
  initialState,
  on(updateUserProfile, (state, { email, name }) => ({ ...state, email, name }))
);
