import { PagesFunction } from '@cloudflare/workers-types/2023-07-01';

interface Env {
    SERVICE: any
}
export const onRequest: (context: any) => Promise<Response> = async (context) => {
    const task = await context.env.SERVICE.post()

    return new Response("Hello, world!")
}