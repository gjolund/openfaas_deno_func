OpenFaaS Deno HTTP function
=============================================

An OpenFaaS of-watchdog function written for Deno.

## Installation

```sh
faas template pull https://github.com/austinrivas/deno-http-template
```

## Deployment

```sh
faas up -f function.yml --gateway $GATEWAY_URL
```

## [Template](https://github.com/austinrivas/deno-http-template)

This function is based on the OpenFaaS [deno-http-template](https://github.com/austinrivas/deno-http-template).

This template provides a thin wrapper around the [Deno Http Server](https://doc.deno.land/https/deno.land/std/http/server.ts) provided by the Deno stdlib. The wrapper implementation closely mirrors the Deno [serve](https://doc.deno.land/https/deno.land/std/http/server.ts#serve) function.

### [Template Wrapper](https://github.com/austinrivas/deno-http-template/blob/master/template/deno-http/main.ts)

## [Function Handler](https://github.com/austinrivas/openfaas_deno_func/blob/master/function/handler.ts)

The function handler in this example is as simple as possible. It merely consumes the Deno [ServerRequest](https://doc.deno.land/https/deno.land/std/http/server.ts#ServerRequest) and responds with a "Hello OpenFaaS!!" message.

## Extras

This repo also contains an [Okteto Remote Development Configuration](https://github.com/austinrivas/openfaas_deno_func/blob/master/function/okteto.yml) for use on the [Okteto Platform](https://okteto.com/).
