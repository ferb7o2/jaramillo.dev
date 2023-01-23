import Halsey_web from "./images/halsey-project-prev.webp";
import Sanangel_web from "./images/sanangel-project-prev.webp";
import Pjl_web from "./images/pjl-project-prev.webp";
import Myflick_web from "./images/myflick-project-prev.webp";
import Lyrics_web from "./images/lyrics-project-prev.webp";
import Open_web from "./images/Open-project-prev.webp";
import Currently_web from "./images/currently-project-prev.webp";
import TsLogo from "./svgs/typescript-logo.svg";
import CssLogo from "./svgs/css3-logo.svg";
import ReactLogo from "./svgs/react-logo.svg";
import AmplifyLogo from "./svgs/awsamplify-logo.svg";
import DynamoLogo from "./svgs/amazondynamodb-logo.svg";
import JestLogo from "./svgs/jest-logo.svg";
import NodeLogo from "./svgs/nodedotjs.svg";
import XcodeLogo from "./svgs/xcode.svg";
import ExpressLogo from "./svgs/express-logo.svg";
import HtmlLogo from "./svgs/html5.svg";
import ServerlessLogo from "./svgs/serverless-logo.svg";
import SwiftLogo from "./svgs/swift-logo.svg";
import MongoLogo from "./svgs/mongodb-logo.svg";
import GitLogo from "./svgs/github-logo.svg";
import NextLogo from "./svgs/nextdotjs.svg";
import JsLogo from "./svgs/javascript.svg";

const TsLogox = (
	<TsLogo width={30} height={30} fill={"black"} pointer-events="all" />
);

const CssLogox = (
	<CssLogo width={30} height={30} fill={"black"} pointer-events="all" />
);
const ReactLogox = (
	<ReactLogo width={30} height={30} fill={"black"} pointer-events="all" />
);

const AmplifyLogox = (
	<AmplifyLogo width={30} height={30} fill={"black"} pointer-events="all" />
);

const DynamoLogox = (
	<DynamoLogo width={30} height={30} fill={"black"} pointer-events="all" />
);

const JestLogox = (
	<JestLogo width={30} height={30} fill={"black"} pointer-events="all" />
);
const NodeLogox = (
	<NodeLogo width={30} height={30} fill={"black"} pointer-events="all" />
);
const XcodeLogox = (
	<XcodeLogo width={30} height={30} fill={"black"} pointer-events="all" />
);
const ExpressLogox = (
	<ExpressLogo width={30} height={30} fill={"black"} pointer-events="all" />
);
const HtmlLogox = (
	<HtmlLogo width={30} height={30} fill={"black"} pointer-events="all" />
);
const ServerlessLogox = (
	<ServerlessLogo width={30} height={30} fill={"black"} pointer-events="all" />
);
const SwiftLogox = (
	<SwiftLogo width={30} height={30} fill={"black"} pointer-events="all" />
);
const MongoLogox = (
	<MongoLogo width={30} height={30} fill={"black"} pointer-events="all" />
);
const GitLogox = (
	<GitLogo width={30} height={30} fill={"black"} pointer-events="all" />
);
const NextLogox = (
	<NextLogo width={30} height={30} fill={"black"} pointer-events="all" />
);
const JsLogox = (
	<JsLogo width={30} height={30} fill={"black"} pointer-events="all" />
);

export const projectData = [
	{
		name: "SanAngel MX",
		imgSrc: Sanangel_web,
		shortDescription: "Business front-end website",
		description:
			"ReactJs Front-end website that dynamically displays product data from business' Point-of-Sale system via the our API, which fetches product data from the Clover API, pre-processes it & serves it",
		webLink: "https://www.sanangelmx.com/",
		repoLink: "https://github.com/JoseJaramillo04/sanangelmx.com",
		icons: [TsLogox, CssLogox, ReactLogox, AmplifyLogox, NodeLogox],
	},
	{
		name: "Inventory Tracker",
		imgSrc: Pjl_web,
		shortDescription: "Business fullstack website",
		description:
			"ReactJS | AWS Amplify | DynamoDB site which fulfills business' inventory tracking needs",
		webLink: "https://www.pjl.sanangelmx.com/",
		repoLink: "https://github.com/JoseJaramillo04/productinventorytracker",
		icons: [TsLogox, CssLogox, ReactLogox, AmplifyLogox, DynamoLogox],
	},
	{
		name: "MyFlick",
		imgSrc: Myflick_web,
		shortDescription: "Mobile (Dating) App",
		description:
			"Fullstack React Native University group project which helps match those of similar movie interests",
		webLink: "https://github.com/JoseJaramillo04/MyFlick",
		repoLink: "https://github.com/JoseJaramillo04/MyFlick",
		icons: [TsLogox, AmplifyLogox, DynamoLogox, JestLogox],
	},
	{
		name: "Halsey Tweet Generator",
		imgSrc: Halsey_web,
		shortDescription: "Personal front-end website",
		description:
			"A Next-JS 13 front-end web application that creates a random tweet from Halsey's discography. Consumes data from our Halsey-Lyrics API",
		webLink: "https://halsey-tweet.netlify.app/",
		repoLink: "https://github.com/JoseJaramillo04/halsey-tweet-generator",
		icons: [TsLogox, CssLogox, HtmlLogox, NextLogox],
	},
	{
		name: "Halsey Lyrics API",
		imgSrc: Lyrics_web,
		shortDescription: "Personal backend API",
		description:
			"A NodeJs | Express API which gathers data from our MongoDB Database and serves it based on REST routing requests",
		webLink: "https://rapidapi.com/JoseJaramillo04/api/halsey-lyric-snippets",
		repoLink: "https://github.com/JoseJaramillo04/halsey-lyrics-api",
		icons: [JsLogox, NodeLogox, ExpressLogox, ServerlessLogox, MongoLogox],
	},
	{
		name: "Open Food Facts",
		imgSrc: Open_web,
		shortDescription: "contributions to open-source software",
		description:
			"Small contributions to the Open Food Facts Project | Changed site metadata information to update the link preview Icon | opened issue requests that were successfully completed and closed (documentation)",
		webLink: "https://world.openfoodfacts.org/",
		repoLink: "https://github.com/JoseJaramillo04/openfoodfacts-server",
		icons: [HtmlLogox, GitLogox],
	},
	{
		name: "Currently Playing Iphone Widget",
		imgSrc: Currently_web,
		shortDescription: "Work in progress..",
		description:
			"A Swift | Spotify API app which display's friend's currently listening songs on an Iphone widget + shows relevant past-listening data.",
		webLink: "https://developer.spotify.com/documentation/ios/",
		repoLink: "https://github.com/JoseJaramillo04",
		icons: [SwiftLogox, XcodeLogox, MongoLogox],
	},
];
