import type { APIContext } from "astro"

export async function GET({}: APIContext) {
  return Response.json({
    body: 'export const search = () => {return {results: []}}'
  })
}