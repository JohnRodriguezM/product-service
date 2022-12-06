import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConnect";

interface FormProps {
  producto: string;
  calificacion: string;
  comentario: string;
}
const initialValues = {
  producto: "",
  calificacion: "",
  comentario: "",
};

export const FormOpinion = () => {
  const [form, setForm] = useState<FormProps>(initialValues);

  const handleChange = (e: any) => {
    return setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
      });
      console.log("Document written with ID: ", docRef.id);
      setForm(initialValues);
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
    });
  };

  return (
    <div>
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
          className=" block text-gray-700 text-sm font-bold mb-2 container w-full"
          htmlFor="producto"
        >
          Producto que consumiste
        </label>
        <select
          name="producto"
          onChange={handleChange}
          defaultValue={form.producto}
          id="calificacion"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          className=" block text-gray-700 text-sm font-bold mb-2 container w-full"
          htmlFor="calificacion"
        >
          Calificacion
        </label>
        <select
          name="calificacion"
          defaultValue={form.calificacion}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>De 1 a 5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label  className="
        
        block  text-gray-700 text-sm font-bold mb-2 container w-full" htmlFor="comentario">Comentario y sugerencia de nuevo producto</label>
      
       
        <textarea
          onChange={handleChange}
          name="comentario"
          cols={30}
          rows={10}
          defaultValue={form.comentario}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id=""
        ></textarea>
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
