import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConnect";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Gracias por tu opinión, vuelve pronto!");

const handleSubmit = async ({
  producto,
  calificacion,
  comentario,
  service,
}: any): Promise<any> => {
  try {
    const docRef = await addDoc(collection(db, "opinions"), {
      producto,
      calificacion,
      comentario,
      service,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("final");
  }
};


export const submit = (e: any, form: any) => {
  const { producto, calificacion, comentario, service, otherProduct } = form;
  e.preventDefault();
  e.target.reset();
  handleSubmit({
    producto: producto === "otro producto" ? otherProduct : producto,
    calificacion: calificacion,
    comentario: comentario,
    service,
  });
  notify();
};