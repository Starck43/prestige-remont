export async function fetcher(
    url,
    variables = {},
    query = "",
    header = {},
    method = "post"
) {
    if (!url) {
        return { error: "Не задан url адрес." }
    }

    let headers = {
        "Content-Type": "application/json",
        Accept: "application/json, application/xml, text/plain, text/html",
        Origin: process.env.SERVER,
    }

    if (Object.keys(header).length) {
        headers = { ...headers, ...header }
    }

    if (Object.keys(variables).length && !query) {
        let params = new URLSearchParams(variables)
        url = url + "?" + params.toString()
    }

    try {
        const res = await fetch(url, {
            method,
            headers,
            body: JSON.stringify({
                query,
                variables,
            }),
        })

        const json = await res.json()
        return json?.errors ? { error: json.errors?.[0] } : json
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}
