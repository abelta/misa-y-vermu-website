/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { readFile } from 'fs/promises'
import { extname, join } from 'path'

const PORT = 3000
const __dirname = import.meta.dir
const PUBLIC_DIR = join(__dirname, 'public')
const DIST_DIR = join(__dirname, 'dist')

// MIME type mapping
const mimeTypes: Record<string, string> = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
}

function getMimeType(filePath: string): string {
  const ext = extname(filePath).toLowerCase()
  return mimeTypes[ext] || 'application/octet-stream'
}

const _server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url)
    let filePath = url.pathname

    // Root path serves index.html
    if (filePath === '/' || filePath === '') {
      filePath = '/index.html'
    }

    try {
      // Try to serve from dist/ for CSS files
      if (filePath.startsWith('/dist/')) {
        const distFile = join(DIST_DIR, filePath.slice(6))
        const file = await readFile(distFile)
        return new Response(file, {
          headers: { 'Content-Type': getMimeType(distFile) },
        })
      }

      // Try to serve from public/ for static assets
      const publicFile = join(PUBLIC_DIR, filePath)
      try {
        const file = await readFile(publicFile)
        return new Response(file, {
          headers: { 'Content-Type': getMimeType(publicFile) },
        })
      } catch {
        // File not found in public, continue
      }

      // Default: serve index.html for root
      if (filePath === '/index.html') {
        const indexFile = join(__dirname, 'index.html')
        const file = await readFile(indexFile)
        return new Response(file, {
          headers: { 'Content-Type': 'text/html' },
        })
      }

      return new Response('404 - Not Found', { status: 404 })
    } catch {
      return new Response('404 - Not Found', { status: 404 })
    }
  },
})

console.log(`🚀 Server running at http://localhost:${PORT}`)
console.log('Press Ctrl+C to stop the server')
