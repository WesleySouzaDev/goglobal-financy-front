"use client";

import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";

import { useState } from "react";

import { cn } from "@/lib/utils";

type PasswordInputProps = {
	className?: string;
	placeholder?: string;
	id?: string;
	name?: string;
};

export function PasswordInput({
	className,
	placeholder = "Escreva sua senha...",
	id,
	name,
	...props
}: PasswordInputProps) {
	const [password, setPassword] = useState(false);

	return (
		<div className="relative">
			<input
				type={password ? "password" : "text"}
				placeholder={placeholder}
				id={id}
				data-slot="input"
				className={cn(
					"h-9 w-full min-w-0 rounded-md border border-input bg-transparent pl-2.5 pr-11 py-1 truncate text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
					className,
				)}
				{...props}
			/>

			{password ? (
				<FaLock
					className="absolute top-2.5 right-4 text-foreground/50 cursor-pointer bg-background"
					onClick={() => setPassword(!password)}
				/>
			) : (
				<FaLockOpen
					className="absolute top-2.5 right-4 text-foreground/50 cursor-pointer bg-background"
					onClick={() => setPassword(!password)}
				/>
			)}
		</div>
	);
}
