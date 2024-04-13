import Navbar from "@/components/ui/navbar";
import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import React from "react";

export default function Step9() {
	const t = useTranslations("process.step9");
	return (
		<div className={`w-full flex flex-col gap-4`}>
			<p>{t("description")}</p>
		</div>
	);
}
