import { createAction, props } from '@ngrx/store';

export const MedicineSearchresults  = createAction(
  '[Search] Set Search Results',
  props<{ results: any[] }>()
);
