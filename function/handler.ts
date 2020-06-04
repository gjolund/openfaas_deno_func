import { ServerRequest } from "https://deno.land/std/http/server.ts";

export default async (req: ServerRequest) => {
  const body = "Hello OpenFaaS!!\n"
  await req.respond({ body })
}