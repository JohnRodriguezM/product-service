import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConnect";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./form.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { FormProps } from "./type";

export const FormOpinion = () => {
  const [value, setValue] = useState<number | null>(2);
  const [form, setForm] = useState<FormProps>({
    producto: "",
    calificacion: "",
    comentario: "",
  });

  const handleChange = (e: any) => {
    return setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const notify = () => toast("Gracias por tu opinión, vuelve pronto!");

  const handleSubmit = async ({
    producto,
    calificacion,
    comentario,
  }: any): Promise<any> => {
    try {
      const docRef = await addDoc(collection(db, "opinions"), {
        producto,
        calificacion,
        comentario,
        servicio: value,
      });
      console.log("Document written with ID: ", docRef.id);
      setForm({
        producto: "",
        calificacion: "",
        comentario: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log("final");
    }
  };
  const submit = (e: any) => {
    e.preventDefault();
    handleSubmit({
      producto: form.producto,
      calificacion: form.calificacion,
      comentario: form.comentario,
      servicio: value,
    });
    notify();
    setForm({
      producto: "",
      calificacion: "",
      comentario: "",
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
        onSubmit={submit}
        style={{
          width: "100%",
          marginTop: "50px",
        }}
      >
        <label
          className=" block ml-2 text-gray-700 text-sm font-bold mb-2 container w-full"
          htmlFor="producto"
        >
          Producto que consumiste
        </label>
        <select
          name="producto"
          onChange={handleChange}
          defaultValue={form.producto}
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
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
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
