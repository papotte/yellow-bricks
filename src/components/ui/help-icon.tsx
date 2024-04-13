import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import { Tooltip } from "flowbite-react";
import React from "react";

type HelpIconProps = {
	tooltip: string;
};

export default function HelpIcon({ tooltip }: HelpIconProps) {
	return (
		<span className={"mx-1 inline-flex"}>
			<Tooltip content={tooltip} trigger="click">
				<QuestionMarkCircleIcon width={12} height={12} />
			</Tooltip>
		</span>
	);
}
