export async function fetcher(api, query, { variables } = {}) {
  const headers = {
    "Content-Type": "application/json",
    'Accept': 'application/json, application/xml, text/plain, text/html',
    'Origin' : process.env.SERVER,
  }

  if (api.token) {
    headers[
      "Authorization"
    ] = `Bearer ${api.token}`
  }

  const res = await fetch(api.url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  console.error(res)

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    //throw new Error("Failed to fetch API")
    return null
  }
  return json.data
}
