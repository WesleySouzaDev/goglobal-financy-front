"use client";

import Image from "next/image";
import { Suspense } from "react";

export default function ImageRegister() {
	return (
		<div className="w-full h-full flex flex-col items-start">
			<Suspense fallback={<div className="w-full h-full">carregando...</div>}>
				<Image
					src="/registerImg2.jpg"
					alt="Register Image"
					width={1000}
					height={1000}
					loading="lazy"
					className="object-cover h-full brightness-50"
				/>
			</Suspense>
		</div>
	);
}
