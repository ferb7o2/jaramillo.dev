"use client";
import localFont from "@next/font/local";
import { roboto, roboto_condensed } from "./fonts";
const consolas = localFont({
	src: [
		{ path: "../../public/fonts/Consolas.woff2", weight: "400" },
		{ path: "../../public/fonts/Consolas-Bold.woff", weight: "700" },
	],
});
export default function GlobalFont() {
	return (
		<style jsx global>{`
			:root {
				--roboto-condensed-font: ${roboto_condensed.style.fontFamily};
				--roboto-font: ${roboto.style.fontFamily};
				--consolas-font: ${consolas.style.fontFamily};
			}

			html,
			body,
			a,
			p,
			h1,
			h2,
			h3,
			h4,
			span {
				font-family: var(--roboto-font);
			}
		`}</style>
	);
}
