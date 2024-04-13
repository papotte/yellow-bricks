import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const checkboxes = [{ id: "goal-1" }, { id: "goal-2" }];
export default function Consultation() {
	const t = useTranslations("process.first-consultation");

	const [formState, setFormState] = useState({});

	useEffect(() => {
		console.log(formState);
	}, [formState]);

	const changeState = (e: any) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.checked,
		});
	};
	return (
		<div className={`w-full flex flex-col gap-4`}>
			<p>{t("description")}</p>
			<h3>{t("how")}</h3>
			<p>{t("how-summary")}</p>
			<ul className="list-disc list-inside">
				<li>
					{t.rich("how1", {
						bold: (chunks) => <b>{chunks}</b>,
						tel: (chunks) => <a href="tel:116117">{chunks}</a>,
					})}
				</li>
				<li>
					{t.rich("how2", {
						link: (chunks) => <a href="https://116117.de">{chunks}</a>,
					})}
				</li>
				<li>{t("how3")}</li>
			</ul>
			<h5>{t("tips")}</h5>
			<ul className="list-disc list-inside">
				<li>
					{t("tips-keywords")}
					<span data-tooltip-target="tooltip-keywords">
						<QuestionMarkCircleIcon width={12} height={12} />
					</span>
				</li>

				<li>{t("tips-seats")}</li>
			</ul>
			<div
				id="tooltip-keywords"
				role="tooltip"
				className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
			>
				{t("tips-keywords-help")}
				<div className="tooltip-arrow" data-popper-arrow></div>
			</div>
			<h3>{t("goals")}</h3>
			<form className={"flex flex-col gap-1"} onChange={changeState}>
				{checkboxes.map((checkbox) => (
					<div key={checkbox.id} className="flex items-center mb-4 checkbox-field">
						<input id={checkbox.id} type="checkbox" value="" />
						<label htmlFor={checkbox.id}>
							{t(`checkbox-${checkbox.id}`)}
							<span data-tooltip-target={"tooltip-" + checkbox.id}>
								<QuestionMarkCircleIcon width={12} height={12} />
							</span>
						</label>
						<div id={"tooltip-" + checkbox.id} role="tooltip" className="tooltip invisible">
							{t(checkbox.id + "-help")}
							<div className="tooltip-arrow" data-popper-arrow></div>
						</div>
					</div>
				))}
			</form>
		</div>
	);
}
