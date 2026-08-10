"use client";

import { FaLock, FaLockOpen } from "react-icons/fa";
import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

type PasswordInputProps = React.ComponentProps<"input">;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ className, placeholder = "Escreva sua senha...", ...props }, ref) => {
		const [password, setPassword] = useState(true);

		return (
			<div className="relative">
				<input
					{...props}
					ref={ref}
					type={password ? "password" : "text"}
					placeholder={placeholder}
					className={cn(
						"h-9 w-full min-w-0 rounded-md border border-input bg-transparent pl-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 pr-11",
						className,
					)}
				/>

				{password ? (
					<FaLock
						className="absolute top-2.5 right-4 cursor-pointer text-foreground/70"
						onClick={() => setPassword(false)}
					/>
				) : (
					<FaLockOpen
						className="absolute top-2.5 right-4 cursor-pointer text-foreground/70"
						onClick={() => setPassword(true)}
					/>
				)}
			</div>
		);
	},
);
