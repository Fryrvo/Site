import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { owner, repo, filePath } = params;
  const token = import.meta.env.GITHUB_TOKEN;

  if (!owner || !repo || !filePath) {
    return new Response("Missing parameters", { status: 400 });
  }

  const githubUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${filePath}`;

  try {
    const response = await fetch(githubUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": "Astro-App",
      },
    });

    if (!response.ok) {
      return new Response("Image not found", { status: 404 });
    }

    return new Response(response.body, {
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "image/jpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    return new Response("Error fetching image", { status: 500 });
  }
};