OpenFaaS Deno HTTP function
=============================================

An OpenFaaS of-watchdog function written for Deno.

## Installation

```sh
faas template pull https://github.com/austinrivas/deno-http-template
```

## Create Function

```sh
faas new <name> --lang deno-http
```

## Testing

Deno ships with a built in test runner

```sh
deno test --allow-net
```

This repo also includes vscode debug configurations for local debugging.
  - Run Tests
  - Debug Current Test File
  - Debug Seleted Test Case
  
### Linting

Deno also provides a built in code linter.

```sh
deno fmt
```

## Deployment

```sh
faas up -f function.yml --gateway $GATEWAY_URL
```

## Remote Debugging

This function includes an `okteto.yml` function to facilitate remote dev and debugging.

To launch to remote debugger you must start the debug process in oketeto.

```bash
cd function
okteto up
 ✓  Development environment activated
 ✓  Files synchronized
    Namespace: austinrivas
    Name:      deno-hello
    Forward:   3000 -> 3000
               8080 -> 8080
               9229 -> 9229
okteto> fwatchdog
```

Once the debug session is listening you can attach to it from [chrome://inspect](chrome://inspect) and set breakpoints as required.

When you are done debugging you should `exit` the okteto shell and run `okteto down` to restore the OpenFaaS function context.

## [Template](https://github.com/austinrivas/deno-http-template)

This function is based on the OpenFaaS [deno-http-template](https://github.com/austinrivas/deno-http-template).

This template provides a [thin wrapper](https://github.com/austinrivas/deno-http-template/blob/master/template/deno-http/lib/wrapper.ts) around the [Deno Http Server](https://doc.deno.land/https/deno.land/std/http/server.ts) provided by the Deno stdlib. The wrapper implementation closely mirrors the Deno [serve](https://doc.deno.land/https/deno.land/std/http/server.ts#serve) function.

## [Function Handler](https://github.com/austinrivas/openfaas_deno_func/blob/master/function/handler.ts)

The function handler in this example is as simple as possible. It merely consumes the Deno [ServerRequest](https://doc.deno.land/https/deno.land/std/http/server.ts#ServerRequest) and responds with a "Deno says Hello OpenFaaS!" message.

## Extras

This repo also contains an [Okteto Remote Development Configuration](https://github.com/austinrivas/openfaas_deno_func/blob/master/function/okteto.yml) for use on the [Okteto Platform](https://okteto.com/).

A [Test and Enforce Deno Format github action](https://github.com/austinrivas/openfaas_deno_func/blob/master/.github/workflows/test-fmt-deno.yml) is included that will trigger on pull request. This action runs the deno tests and throws an error if `deno fmt` returns changes.
