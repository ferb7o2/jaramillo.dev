import { Inter, Roboto_Condensed, Roboto } from "@next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	variable: "--inter-font",
});

export const roboto_condensed = Roboto_Condensed({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	variable: "--roboto-condensed-font",
});

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	variable: "--roboto-font",
});
