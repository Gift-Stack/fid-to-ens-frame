import { getFrameMetadata } from "@coinbase/onchainkit";
import HomePage from "./home";
import { Metadata } from "next";

const postUrl = process.env["HOST"] + `/api/ens`;
const frameImageUrl = process.env["HOST"] + `/ens.webp`;
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Click to get your ENS from your FID",
    },
  ],
  image: frameImageUrl,
  post_url: postUrl,
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  other: {
    ...frameMetadata,
  },
};

export default async function Home() {
  return <HomePage />;
}
