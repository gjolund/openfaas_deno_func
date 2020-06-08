import {
  Response as ServerResponse,
  ServerRequest,
} from "https://deno.land/std/http/server.ts";

export default async (request: ServerRequest): Promise<ServerResponse> => {
  const body = JSON.stringify({message: "Deno says Hello OpenFaaS!"});
  return {
    body,
  } as ServerResponse;
};
