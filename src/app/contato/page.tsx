"use client"
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

export default function Contato() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4">
      {/* Campo "Nome" */}
      <div className="mb-4">
        <label htmlFor="nome" className="block font-bold mb-2"> Nome </label>
        <input
          id="nome"
          type="text"
          {...register("nome", { required: "O nome é obrigatório" })}
          className={`w-full px-3 py-2 text-gray-900 border ${errors.nome ? "border-red-500" : "border-gray-300"} rounded`}
        />
        {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
      </div>

      {/* Campo "Email" */}
      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-2"> Email </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "O email é obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Formato de email inválido",
            },
          })}
          className={`w-full px-3 py-2 text-gray-900 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Campo "Assunto" */}
      <div className="mb-4">
        <label htmlFor="assunto" className="block font-bold mb-2"> Assunto </label>
        <input
          id="assunto"
          type="text"
          {...register("assunto", { required: "O assunto é obrigatório" })}
          className={`w-full px-3 py-2 text-gray-900 border ${errors.assunto ? "border-red-500" : "border-gray-300"} rounded`}
        />
        {errors.assunto && <p className="text-red-500 text-sm mt-1">{errors.assunto.message}</p>}
      </div>

      {/* Campo "Mensagem" */}
      <div className="mb-4">
        <label htmlFor="mensagem" className="block font-bold mb-2"> Mensagem </label>
        <textarea
          id="mensagem"
          {...register("mensagem", { required: "A mensagem é obrigatória" })}
          className={`w-full px-3 py-2 text-gray-900 border ${errors.mensagem ? "border-red-500" : "border-gray-300"} rounded`}
          rows={5}
        />
        {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
        Enviar
      </button>
    </form>
  );
}