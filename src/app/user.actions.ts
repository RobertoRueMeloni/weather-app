import { createAction, props } from '@ngrx/store';

export const updateUserProfile = createAction(
  '[User] Update User Profile',
  props<{ email: string; name: string }>()
);
