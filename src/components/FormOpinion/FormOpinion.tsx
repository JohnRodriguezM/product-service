import { useState } from "react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./form.css";
import { submit } from "./utils/utils";

import { ToastContainer } from "react-toastify";
import type { FormProps } from "./types/type";

export const FormOpinion = () => {
  const [service, setService] = useState<number>(2);

  const [form, setForm] = useState<FormProps>({
    producto: "",
    calificacion: "",
    comentario: "",
  });

  const [element, setElement] = useState("");

  const handleChange = (e: any) => {
    return setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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

      <br />

      <form
        action=""
        onSubmit={(e) => submit(e, form, element, service)}
        style={{
          width: "100%",
          marginTop: "50px",
        }}
      >
        {form.producto === "otro producto" ? (
          <div>
            <label
              className=" block ml-2 text-red-600 text-sm font-bold mb-2 container w-full"
              htmlFor="producto"
            >
              Especifica el producto
            </label>

            <input
              type="text"
              name="producto"
              placeholder="Producto"
              required
              onChange={(e) => setElement(e.target.value)}
              defaultValue={""}
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setForm({
                  producto: "",
                  calificacion: "",
                  comentario: "",
                });
              }}
            >
              Volver
            </button>
          </div>
        ) : (
          <>
            <label
              className=" block ml-2 text-gray-700 text-sm font-bold mb-2 container w-full"
              htmlFor="producto"
            >
              Producto que consumiste
            </label>
            <select
              name="producto"
              onChange={handleChange}
              defaultValue={"arepa"}
              id="calificacion"
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Producto</option>
              <option value="queso">Arepa con queso</option>
              <option value="pollo">Arepa con pollo</option>
              <option value="carne">Arepa con carne</option>
              <option value="huevo">Arepa con huevo</option>
              <option value="jamón">Arepa con jamón</option>
              <option value="otro producto">otro</option>
            </select>
          </>
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
          defaultValue={form.calificacion}
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
          defaultValue={form.comentario}
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
            defaultValue={service}
            onChange={(event, newValue: any) => {
              setService(newValue);
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
