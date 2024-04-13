import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { Flowbite, ThemeModeScript } from "flowbite-react";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<ThemeModeScript />
			</Head>
			<body>
				<Flowbite>
					<Main />
					<NextScript />
				</Flowbite>
			</body>
		</Html>
	);
}
