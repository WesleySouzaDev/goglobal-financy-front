import Title from "@/components/title";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { PasswordInput } from "@/components/password-input";

import Link from "next/link";
import FormLogin from "../_components/forms/form-login";

export default function Login() {
	return (
		<div className="w-full h-full flex flex-col items-start animeLeft">
			<Title titile="Login" className="text-primary title text-end" />

			<div className="mt-15 mb-6">
				<FormLogin />
			</div>

			<Button variant="link" className="p-0">
				Esqueceu sua senha?
			</Button>

			<Separator />

			<h2 className="text-3xl text-foreground mt-10">
				Ainda não possui uma conta?
			</h2>
			<Button variant="link" className="p-0 my-2">
				<Link href="/cadastro">Cadastre-se →</Link>
			</Button>
		</div>
	);
}
