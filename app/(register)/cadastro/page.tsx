import Title from "@/components/title";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import FormCadastro from "../_components/forms/form-cadastro";

export default async function Cadastro() {
	return (
		<div className="w-full h-full flex flex-col items-start animeRight">
			<Title titile="Cadastre-se" className="text-primary title text-end" />

			<div className="mt-15 mb-6">
				<FormCadastro />
			</div>

			<Separator />

			<h2 className="text-3xl text-foreground mt-10">
				Faça Login se já possui uma conta
			</h2>
			<Button variant="link" className="p-0 my-2">
				<Link href="/login">← Clique para fazer login</Link>
			</Button>
		</div>
	);
}
