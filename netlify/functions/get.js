import fetch from "node-fetch";

export async function handler(event) {
  const { username, password, type, output } = event.queryStringParameters;

  // Username & password yang kamu tentukan
  const validUser = user123";
  const validPass = "user123";

  if (username !== validUser || password !== validPass) {
    return {
      statusCode: 403,
      body: "Invalid username or password",
    };
  }

  try {
    // Link M3U kamu (ubah sesuai link Netlify / GitHub)
    const url = "https://myplaylist3.netlify.app/.netlify/functions/playlist?token=abc123";
    const response = await fetch(url);
    if (!response.ok) throw new Error("Fetch failed");

    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/x-mpegurl",
        "Content-Disposition": 'inline; filename="playlist.m3u"',
      },
      body: data,
    };
  } catch (err) {
    return { statusCode: 500, body: "Server error: " + err.message };
  }
}

