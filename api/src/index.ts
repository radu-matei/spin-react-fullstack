import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk"

const encoder = new TextEncoder()

export const handleRequest: HandleRequest = async function(request: HttpRequest): Promise<HttpResponse> {
    return {
        status: 200,
        headers: { "foo": "bar" },
        body: encoder.encode("Hello, Fermyon! This is the response of a Spin component written in TypeScript, running in the backend!").buffer
    }
}
