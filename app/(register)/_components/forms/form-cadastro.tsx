"use client";

import { useState } from "react";

import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { FaUserPlus } from "react-icons/fa6";

import { PasswordInput } from "@/components/password-input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import DialogLogin from "../dialog-login";

const schema = z.object({
	nome: z
		.string()
		.nonempty("O nome é obrigatório")
		.trim()
		.min(3, "O nome deve ter pelo menos 3 caracteres")
		.transform((nome) =>
			nome
				.split(" ")
				.map(
					(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
				)
				.join(" "),
		),
	email: z.email("E-mail inválido"),
	senha: z
		.string()
		.min(6, "A senha deve conter no mínimo 6 caracteres")
		.regex(/[a-z]/, "A senha deve conter no mínimo uma letra")
		.regex(/[0-9]/, "A senha deve conter um no mínimo número"),
});

export type FormCadastroData = z.infer<typeof schema>;

export default function FormCadastro() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormCadastroData>({
		resolver: zodResolver(schema),
	});

	const [formData, setFormData] = useState<FormCadastroData | null>(null);
	const [dialogOpen, setDialogOpen] = useState(false);

	const onSubmit = (data: FormCadastroData) => {
		setFormData(data);
		setDialogOpen(true);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="space-y-6 w-full">
					<Field>
						<FieldLabel htmlFor="nome" className="text">
							Nome
						</FieldLabel>
						<Input
							id="nome"
							placeholder="Escreva seu nome..."
							className="w-full max-w-md"
							{...register("nome")}
						/>
						{errors.nome && <FieldError errors={[errors.nome]}></FieldError>}
					</Field>
					<Field>
						<FieldLabel htmlFor="email" className="text">
							E-mail
						</FieldLabel>
						<Input
							id="email"
							placeholder="Escreva seu e-mail..."
							className="w-full max-w-md"
							{...register("email")}
						/>
						{errors.email && <FieldError errors={[errors.email]}></FieldError>}
					</Field>

					<Field>
						<FieldLabel htmlFor="senha" className="text">
							Senha
						</FieldLabel>
						<PasswordInput id="senha" {...register("senha")} />
						{errors.senha && <FieldError errors={[errors.senha]}></FieldError>}
					</Field>

					<Button type="submit" className="bg-primary/70 cursor-pointer">
						Cadastrar
						<FaUserPlus />
					</Button>
				</div>
				{formData &&
					DialogLogin({
						formData,
						open: dialogOpen,
						setDialogOpen,
					})}
			</form>
		</>
	);
}
