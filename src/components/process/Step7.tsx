import Navbar from "@/components/ui/navbar";
import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import React from "react";

export default function Step7() {
	const t = useTranslations("process.step7");
	return (
		<div className={`w-full flex flex-col gap-4`}>
			<p>{t("description")}</p>
			<h5>{t("checklist")}</h5>
			<ul className="list-disc list-inside">
				<li>{t("checklist1")}</li>
				<li>{t("checklist2")}</li>
				<li>{t("checklist3")}</li>
				<li>{t("checklist4")}</li>
				<li>{t("checklist5")}</li>
				<li>{t("checklist6")}</li>
			</ul>
			<h3>{t("goals")}</h3>{" "}
			<ul className="list-disc list-inside">
				<li>{t("goal1")}</li>
			</ul>
		</div>
	);
}
