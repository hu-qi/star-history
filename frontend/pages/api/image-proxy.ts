import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    if (req.method === "OPTIONS") {
        res.status(200).end()
        return
    }

    if (req.method !== "GET") {
        res.status(405).json({ error: "Method Not Allowed" })
        return
    }

    const rawUrl = req.query.url
    if (!rawUrl || typeof rawUrl !== "string") {
        res.status(400).json({ error: "Missing url parameter" })
        return
    }

    let target: URL
    try {
        target = new URL(rawUrl)
    } catch {
        res.status(400).json({ error: "Invalid url parameter" })
        return
    }

    if (target.protocol !== "http:" && target.protocol !== "https:") {
        res.status(400).json({ error: "Only http/https are supported" })
        return
    }

    try {
        const response = await fetch(target.toString(), {
            // Follow redirects to reach the actual image
            redirect: "follow",
            headers: {
                // Some CDNs block unknown agents; emulate a browser
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
                Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
                Referer: target.origin,
            },
        })

        if (!response.ok) {
            res.status(response.status).json({ error: `Upstream request failed: ${response.statusText}` })
            return
        }

        const contentType = response.headers.get("content-type") || "image/png"
        const arrayBuffer = await response.arrayBuffer()
        const base64 = Buffer.from(arrayBuffer).toString("base64")
        const dataUrl = `data:${contentType};base64,${base64}`

        // Cache for a day to reduce repeat fetches
        res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400")
        res.status(200).json({ dataUrl })
    } catch (err: any) {
        res.status(500).json({ error: "Proxy fetch failed", detail: err?.message })
    }
}