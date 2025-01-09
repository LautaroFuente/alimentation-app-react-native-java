import { useState } from "react";

// Definir un tipo genérico para el formulario
type FormFields = Record<string, string>; // Esto permite que las claves sean dinámicas (nombres de los campos) y los valores sean cadenas (strings)

// Tipos para el hook useForm
export const useForm = <T extends FormFields>(initialForm: T) => {
  // El estado form es de tipo T, que es el tipo del formulario pasado
  const [form, setForm] = useState<T>(initialForm);

  // El estado de errores tiene la misma forma que el formulario
  const [errorForm, setErrorForm] = useState<T>(initialForm);

  // Maneja el cambio de input. Recibe el nombre del campo y el valor
  const handleInputChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  // Maneja los errores de los campos
  const handleErrorForm = (fieldError: string, message: string) => {
    setErrorForm({ ...errorForm, [fieldError]: message });
  };

  // Resetea el formulario al valor inicial
  const resetForm = () => {
    setForm(initialForm);
  };

  // Resetea los errores del formulario
  const resetErrorForm = () => {
    setErrorForm(initialForm);
  };

  return {
    form,
    errorForm,
    handleInputChange,
    handleErrorForm,
    resetForm,
    resetErrorForm,
  };
};
