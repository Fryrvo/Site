import type { APIRoute } from 'astro';

export const prerender = false;

async function verifySignature(filePath: string, tokenParam: string | null, secret: string): Promise<boolean> {
  if (!tokenParam || !secret) return false;
  
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const msgData = encoder.encode(filePath);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signatureBuffer = await crypto.subtle.sign("HMAC", cryptoKey, msgData);
  const hashArray = Array.from(new Uint8Array(signatureBuffer));
  const expectedHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return tokenParam === expectedHash;
}

export const GET: APIRoute = async ({ params, request, locals }) => {
  const { owner, repo, filePath } = params;
  
  
  const runtimeEnv = (locals as any)?.runtime?.env || {};
  const token = runtimeEnv.GITHUB_TOKEN || import.meta.env.GITHUB_TOKEN;
  const secret = runtimeEnv.IMAGE_SECRET_KEY || import.meta.env.IMAGE_SECRET_KEY;

  const urlObj = new URL(request.url);
  const sig = urlObj.searchParams.get("sig");

  const isValid = await verifySignature(filePath || "", sig, secret || "");
  if (!isValid) {
    return new Response("Access denied: Invalid or missing token", { status: 403 });
  }

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
        "Cache-Control": "private, max-age=86400",
      },
    });
  } catch (error) {
    return new Response("Error fetching image", { status: 500 });
  }
};