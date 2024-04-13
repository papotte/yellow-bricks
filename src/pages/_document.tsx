import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { Flowbite, ThemeModeScript } from "flowbite-react";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<ThemeModeScript />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
