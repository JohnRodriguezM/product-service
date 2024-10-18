import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { submit } from "./utils/utils";
import { InputRepeat } from "../atoms/InputRepeat";
import { setForm, form } from "./slice";
import "./css/form.css";

interface FormState {
  producto: string;
  otherProduct?: string;
  calificacion: string;
  comentario: string;
  service?: number;
}

export const FormOpinion: React.FC = () => {
  const dispatch = useDispatch();
  const formSelector = useSelector(form) as FormState;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      dispatch(setForm({ ...formSelector, [name]: value }));
    },
    [dispatch, formSelector]
  );

  const handleServiceChange = useCallback(
    (event: React.ChangeEvent<{}>, newValue: number | null) => {
      dispatch(setForm({ ...formSelector, service: newValue ?? 0 }));
    },
    [dispatch, formSelector]
  );

  const handleResetProduct = useCallback(() => {
    dispatch(
      setForm({
        producto: "",
        calificacion: "",
        comentario: "",
        otherProduct: "",
      })
    );
  }, [dispatch]);

  return (
    <div className="form">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <form
        onSubmit={(e) => submit(e, formSelector)}
        style={{
          width: "100%",
          marginTop: "7rem",
        }}
      >
        {formSelector.producto === "otro producto" ? (
          <InputRepeat
            handleChange={handleChange}
            handleButton={handleResetProduct}
            label="Especifica el producto"
            btnValue="Volver"
            name="otherProduct"
            placeholder="Producto"
            defaultValue=""
          />
        ) : (
          <InputRepeat
            handleChange={handleChange}
            label="Producto que consumiste"
            name="producto"
            placeholder="Producto"
            defaultValue="arepa"
            options={[
              { value: "queso", label: "Arepa con queso" },
              { value: "pollo", label: "Arepa con pollo" },
              { value: "carne", label: "Arepa con carne" },
              { value: "huevo", label: "Arepa con huevo" },
              { value: "otro producto", label: "Otro producto" },
            ]}
          />
        )}

        <div className="form-group">
          <label
            htmlFor="calificacion"
            className="block ml-2 text-gray-700 text-sm font-bold mb-2 container w-full"
          >
            Calificación del producto
          </label>
          <select
            id="calificacion"
            name="calificacion"
            value={formSelector.calificacion}
            onChange={handleChange}
            className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">De 1 a 5</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num.toString()}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label
            htmlFor="comentario"
            className="block ml-2 text-gray-700 text-sm font-bold mb-2 container w-full"
          >
            Comentario y sugerencia de nuevo producto
          </label>
          <textarea
            id="comentario"
            name="comentario"
            value={formSelector.comentario}
            onChange={handleChange}
            className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            rows={10}
            placeholder="Escribe tu comentario aquí..."
          ></textarea>
        </div>

        <Box sx={{ mt: 2 }}>
          <Typography component="legend">
            Calificación de nuestro servicio
          </Typography>
          <Rating
            name="service"
            value={formSelector.service || 0}
            onChange={handleServiceChange}
          />
        </Box>
        <button
          className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};