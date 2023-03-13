export interface FormProps {
  producto: string | null;
  calificacion: string;
  comentario: string;
}

export interface InputRepeatProps {
  handleChange: (e: any) => void;
  handleButton?: () => void;
  label: string;
  btnValue?: string;
  defaultValue?: string;
  name: string;
  placeholder?: string;
  options?: any;
}