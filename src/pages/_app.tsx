import Layout from "@/components/ui/layout";

import { api } from "@/plugins/trpc/api";
import "@/styles/globals.scss";

import { ConfigProvider, theme } from "antd";
import "flowbite";
import type { Session } from "next-auth";
import { NextIntlClientProvider } from "next-intl";
import type { AppType } from "next/app";

import { Inter, Lexend, Spicy_Rice } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spicyRice = Spicy_Rice({ weight: "400", subsets: ["latin"], variable: "--font-spicy-rice" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

type AppProps = {
	session: Session | null;
	messages: any;
};

const MyApp: AppType<AppProps> = ({ Component, pageProps: { session, messages, ...pageProps } }) => {
	const router = useRouter();

	return (
		<NextIntlClientProvider locale={router.locale} timeZone="Europe/Berlin" messages={messages}>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,
				}}
			>
				<main className={`${inter.variable} ${spicyRice.variable} ${lexend.variable} ${lexend.className}`}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</main>
			</ConfigProvider>
		</NextIntlClientProvider>
	);
};

export default api.withTRPC(MyApp);
