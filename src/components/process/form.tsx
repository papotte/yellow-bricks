import HelpIcon from "@/components/ui/help-icon";
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
							{checkbox.tooltip && <HelpIcon tooltip={t(checkbox.id + "-help")} />}
						</label>
					</div>
				))}
			</form>
		</>
	);
};
export default GoalForm;
