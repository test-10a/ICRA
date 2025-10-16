// app/api/submit/route.ts
export const runtime = "edge"; // optional — makes it faster on Vercel Edge

// Handle GET requests (e.g. /api/submit?number=9292929)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const number = searchParams.get("number") || "no number provided";

  const response = {
    status: "success",
    method: "GET",
    number_received: number,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

// Handle POST requests (optional)
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const response = {
    status: "success",
    method: "POST",
    body,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

// Handle preflight (CORS)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
