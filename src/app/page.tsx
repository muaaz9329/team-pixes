import { Metadata } from "next";
import Home from "./home";

export const metadata: Metadata = {
  title: "Team Pixes | Digital Development & Design Studio",
  description:
    "Professional Digital Development & Design Studio - We Code Dreams",
  keywords:
    "team pixes, Team Pixes, TeamPixes, web development, design studio, digital agency, Pakistan",
  openGraph: {
    title: "TeamPixes",
    description: "Where Vision Takes Form - Professional Development & Design",
    images: "/og-image.jpg",
  },
};

function page() {
  return <Home />;
}

export default page;
