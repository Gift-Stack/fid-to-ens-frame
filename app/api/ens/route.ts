import { getFrameHtmlResponse } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";

async function getResponse(req?: NextRequest): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `We love BOAT`,
        },
      ],
      image: "/release/v-0-17.png",
      post_url: "/api/frame",
    })
  );
}

export async function GET() {
  const postUrl = process.env["HOST"] + `/api/ens`;
  const frameImageUrl = process.env["HOST"] + `/ens.webp`;

  return Response.json(
    getFrameHtmlResponse({
      buttons: [
        {
          label: "Click to get your ENS from your FID",
        },
      ],
      image: frameImageUrl,
      post_url: postUrl,
    })
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
