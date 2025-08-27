exports.handler = async (event) => {
  const { username, password, type, output } = event.queryStringParameters || {};

  // Username & password kamu
  const validUser = "user123";
  const validPass = "pass123";

  if (username !== validUser || password !== validPass) {
    return {
      statusCode: 403,
      body: "Invalid username or password",
    };
  }

  try {
    // Link M3U kamu di Netlify/GitHub/hosting
    const url = "httphttps://myplaylist3.netlify.app/.netlify/functions/playlist?token=abc123";

    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch playlist");

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
};
