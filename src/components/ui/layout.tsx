import Navbar from "@/components/ui/navbar";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={`w-full`}>
			{/* Include shared UI here e.g. a header or sidebar */}
			<Navbar />
			<main className={`container flex flex-col mx-auto items-center justify-between ${inter.className}`}>
				{children}
			</main>
			{/* Include shared UI here e.g. a footer */}
		</div>
	);
}
