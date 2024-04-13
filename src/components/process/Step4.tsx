import Navbar from "@/components/ui/navbar";
import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import React from "react";

export default function Step4() {
	const t = useTranslations("process.step4");
	return (
		<div className={`w-full flex flex-col gap-4`}>
			<p>{t("description")}</p>
			<h3>{t("how")}</h3>
			<ul className="list-disc list-inside">
				<li>{t("how1")}</li>
				<li>{t("how2")}</li>
			</ul>
			<h5>{t("tips")}</h5>
			<ul className="list-disc list-inside">
				<li>{t("tip1")}</li>
			</ul>
			<h3>{t("goals")}</h3>{" "}
			<ul className="list-disc list-inside">
				<li>{t("goal1")}</li>
			</ul>
		</div>
	);
}
