import { createAction, props } from '@ngrx/store';

export const setMedicineSearchResults = createAction(
  '[Search] Set Search Results',
  props<{ results: any[] }>()
);