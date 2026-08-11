"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { PasswordInput } from "@/components/password-input";

import { Button } from "@/components/ui/button";
import { FaDoorOpen } from "react-icons/fa6";

const schema = z.object({
	email: z.email("E-mail inválido"),
	password: z
		.string()
		.min(6, "A senha deve conter no mínimo 6 caracteres")
		.regex(/[a-z]/, "A senha deve conter no mínimo uma letra")
		.regex(/[0-9]/, "A senha deve conter um no mínimo número"),
});

type FormLoginData = z.infer<typeof schema>;

export default function FormLogin() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormLoginData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: FormLoginData) => console.log(JSON.stringify(data));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-6 w-full">
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
					<FieldLabel htmlFor="password" className="text">
						Senha
					</FieldLabel>
					<PasswordInput id="password" {...register("password")} />
					{errors.password && (
						<FieldError errors={[errors.password]}></FieldError>
					)}
				</Field>

				<Button type="submit" className="bg-primary/70 cursor-pointer">
					Entrar
					<FaDoorOpen />
				</Button>
			</div>
		</form>
	);
}
