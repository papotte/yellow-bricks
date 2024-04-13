import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

type Checkbox = {
	id: string;
	tooltip?: boolean;
};
type GoalProps = {
	translationPath: string;
	checkboxes: Checkbox[];
};
const GoalForm = ({ translationPath, checkboxes }: GoalProps) => {
	const t = useTranslations(translationPath);
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
		<>
			<h3>{t("goals")}</h3>
			<form className={"flex flex-col gap-1"} onChange={changeState}>
				{checkboxes.map((checkbox) => (
					<div key={checkbox.id} className="flex items-center mb-4 checkbox-field">
						<input id={checkbox.id} type="checkbox" value="" />
						<label htmlFor={checkbox.id}>
							{t(`checkbox-${checkbox.id}`)}
							{checkbox.tooltip && (
								<span data-tooltip-target={"tooltip-" + checkbox.id}>
									<QuestionMarkCircleIcon width={12} height={12} />
								</span>
							)}
						</label>
						<div id={"tooltip-" + checkbox.id} role="tooltip" className="tooltip invisible">
							{t(checkbox.id + "-help")}
							<div className="tooltip-arrow" data-popper-arrow></div>
						</div>
					</div>
				))}
			</form>
		</>
	);
};
export default GoalForm;
