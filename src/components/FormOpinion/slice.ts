import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  form: {
    producto: '',
    calificacion: 0,
    comentario: '',
  },
  service: 2,
  element: 'hi',
};


export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setForm : function(state, action) {
      state.form = {
        ...state.form,
        producto: action.payload.producto,
        calificacion: action.payload.calificacion,
        comentario: action.payload.comentario,
      };
      state.service = 2;
    },
    setService : function(state, action) {
      state.form = {
        ...state.form,
      };
      state.service = action.payload;
    },
    setElement : function(state, action) {
      state.element = action.payload;
    },
  },
});

export const { setForm, setService, setElement } = slice.actions;


export const form = (state:any) => state.slice.form;
export const service = (state:any) => state.slice.service;
export const element = (state:any) => state.slice.element;



export default slice.reducer;