import Navbar from "@/components/ui/navbar";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import React from "react";

export default function Overview() {
	const t = useTranslations("overview");
	return (
		<div className={`w-full`}>
			<h1 className={`text-3xl font-bold`}>Overview</h1>
		</div>
	);
}
