import { createReducer, on } from '@ngrx/store';
import { MedicineSearchresults } from './Medicinesearchresults.Actions';
import { initialState, MedicinesearchState } from './medicinesearch.state';
export const MedicineSearchresultsReducer = createReducer(
    initialState,
    on(MedicineSearchresults, (state, { results }) => ({...state, searchResults : results })));