import type {useState, FC} from "react";

import type { InputRepeatProps } from "../FormOpinion/types/type";


export const InputRepeat: FC<InputRepeatProps> = ({
  handleChange,
  handleButton,
  label,
  btnValue,
  defaultValue,
  name,
  placeholder,
  options,
}: any) => {
  return (
    <div>
      <label
        className=" block ml-2 text-gray-700 text-sm font-bold mb-2 container w-full"
        htmlFor="producto"
      >
        {label}
      </label>
      {options ? (
        <select
          name={name}
          onChange={handleChange}
          defaultValue={defaultValue}
          id="calificacion"
          className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Producto</option>
          {options.map((option: any) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          required
          onChange={handleChange}
          defaultValue={defaultValue}
          className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      )}

      {btnValue ? (
        <button
          className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButton}
        >
          {btnValue}
        </button>
      ) : null}
    </div>
  );
};
