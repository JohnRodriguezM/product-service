import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  form: {
    producto: '',
    calificacion: 0,
    comentario: '',
    service: 2,
    otherProduct: '',
  },

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
        service : action.payload.service,
        otherProduct: action.payload.otherProduct,
      };
    },
  },
});

export const { setForm } = slice.actions;


export const form = (state:any) => state.slice.form;



export default slice.reducer;