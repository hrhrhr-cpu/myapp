import { getHelloMessage } from "@/lib/hello";

export async function GET() {
  return Response.json(getHelloMessage());
}
