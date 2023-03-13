import { useState } from "react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./css/form.css";
import { submit } from "./utils/utils";

import { ToastContainer } from "react-toastify";
//import type { FormProps } from "./types/type";

import { useDispatch, useSelector } from "react-redux";
import { InputRepeat } from "./../atoms/InputRepeat";
import { setForm, form } from "./slice";

export const FormOpinion = () => {
  const dispatch = useDispatch();
  const formSelector = useSelector(form);

  const handleChange = (e: any) => {
    return dispatch(
      setForm({ ...formSelector, [e.target.name]: e.target.value })
    );
  };

  return (
    <div className="form">
      <h1 className="title">Danos tú opinión</h1>

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

      <br />
      <form
        action=""
        onSubmit={(e) => submit(e, formSelector)}
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        {formSelector.producto === "otro producto" ? (
          <InputRepeat
            handleChange={(e: any) =>
              dispatch(
                setForm({
                  ...formSelector,
                  [e.target.name]: e.target.value,
                })
              )
            }
            handleButton={() => {
              dispatch(
                setForm({
                  producto: "",
                  calificacion: "",
                  comentario: "",
                })
              );
            }}
            label="Especifica el producto"
            btnValue="Volver"
            name="otherProduct"
            placeholder="Producto"
            defaultValue={""}
          />
        ) : (
          <InputRepeat
            handleChange={handleChange}
            label="Producto que consumiste"
            name="producto"
            placeholder="Producto"
            defaultValue={"arepa"}
            options={[
              { value: "queso", label: "Arepa con queso" },
              { value: "pollo", label: "Arepa con pollo" },
              { value: "carne", label: "Arepa con carne" },
              { value: "huevo", label: "Arepa con huevo" },
              { value: "otro producto", label: "Otro producto" },
            ]}
          />
        )}

        <br />

        <label
          className=" block ml-2 text-gray-700 text-sm font-bold mb-2 container w-full"
          htmlFor="calificacion"
        >
          Calificacion del producto
        </label>
        <select
          name="calificacion"
          defaultValue={formSelector.calificacion}
          onChange={handleChange}
          className=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>De 1 a 5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label
          className=" block ml-2 text-gray-700 text-sm font-bold mb-2 container w-full"
          htmlFor="comentario"
        >
          Comentario y sugerencia de nuevo producto
        </label>

        <textarea
          onChange={handleChange}
          name="comentario"
          cols={30}
          rows={10}
          defaultValue={formSelector.comentario}
          className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id=""
        ></textarea>
        <Box
          sx={{
            "& > legend": { mt: 1 },
          }}
        >
          <Typography component="legend">
            Calificación de nuestro servicio
          </Typography>
          <Rating
            name="simple-controlled"
            defaultValue={formSelector.service}
            onChange={(event, newValue: any) => {
              dispatch(
                setForm({
                  ...formSelector,
                  service: newValue,
                })
              );
            }}
          />
        </Box>
        <button
          className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <div></div>
    </div>
  );
};
