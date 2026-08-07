import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Globla Financy | Register",
	description: "Register Page",
};

export default async function RegisterLayout({ children }: any) {
	return (
		<main className="grid grid-cols-1 lg:grid-cols-2 h-screen w-screen overflow-hidden bg-background">
			<div className="hidden lg:block lg:grid-cols-1 w-full h-full border-r border-primary animeSurge">
				<Image
					src="/registerImg2.jpg"
					alt="Register Image"
					width={1000}
					height={1000}
					loading="lazy"
					className="object-cover h-full brightness-50"
				/>
			</div>

			<div className="grid-cols-1 px-20 py-20 bg-background">{children}</div>
		</main>
	);
}
