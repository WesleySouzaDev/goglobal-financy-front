import Image from "next/image";
import { Metadata } from "next";
import ImageRegister from "./_components/image-register";

export const metadata: Metadata = {
	title: "Globla Financy | Login",
	description: "Register Page",
};

export default async function RegisterLayout({ children }: any) {
	return (
		<main className="grid grid-cols-1 lg:grid-cols-2 h-screen w-screen overflow-hidden bg-background">
			<div className="hidden lg:block lg:grid-cols-1 w-full h-full border-r border-primary animeSurge">
				<ImageRegister />
			</div>

			<div className="grid-cols-1 px-10 lg:px-20 py-20 bg-background">
				{children}
			</div>
		</main>
	);
}
