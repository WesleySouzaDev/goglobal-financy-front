import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type { FormCadastroData } from "./forms/form-cadastro";

type DialogLoginProps = {
	formData: FormCadastroData;
	open: boolean;
	setDialogOpen: (open: boolean) => void;
};

export default function DialogLogin({
	formData,
	open,
	setDialogOpen,
}: DialogLoginProps) {
	return (
		<Dialog open={open}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Cadastro</DialogTitle>
				</DialogHeader>
				<h1>Login</h1>
				<p>Login: {formData.email}</p>
			</DialogContent>
		</Dialog>
	);
}
