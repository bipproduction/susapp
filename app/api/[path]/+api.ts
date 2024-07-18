export async function GET(req: Request, { path }: Record<string, string>) {
  return new Response(`Hello ${path}`);
}
