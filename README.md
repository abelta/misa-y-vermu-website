# Misa Y Vermú - Retro Landing Page

A minimal, retro-styled landing page served with **Bun** and styled with Tailwind CSS.

## Features

- **Bun Runtime**: Ultra-fast JavaScript runtime optimized for server applications
- **No bloat**: Static HTML, pure CSS, no JavaScript
- **Retro aesthetic**: Purple and gold color scheme with monospace typography
- **Terminal vibe**: TUI-inspired design with pixel-perfect styling
- **Self-hosted friendly**: Simple Bun HTTP server with built-in `Bun.serve()`

## Project Structure

```
misa-y-vermu-website/
├── package.json              # Dependencies & scripts (Bun-compatible)
├── tailwind.config.js        # Tailwind customization
├── postcss.config.js         # PostCSS configuration
├── input.css                 # Tailwind directives
├── server.ts                 # Bun HTTP server
├── index.html                # Main landing page
├── eslint.config.js          # ESLint configuration (flat config)
├── .prettierrc                # Prettier configuration
├── .prettierignore           # Prettier ignore patterns
├── dist/
│   └── style.css            # Compiled Tailwind CSS (generated)
├── public/                   # Static assets (images, etc.)
└── .gitignore
```

## Getting Started

### Prerequisites

- Bun 1.0+ (https://bun.sh)

### Installation

```bash
# Install dependencies with Bun
bun install

# Build Tailwind CSS
bun run build
```

### Development

```bash
# Start the development server
bun run dev
# or
bun run start
```

Server will be available at `http://localhost:3000`

### Watch Mode (for CSS changes)

```bash
bun run watch
```

This will automatically rebuild Tailwind CSS whenever you modify the HTML or CSS files.

## Code Quality

### Linting with ESLint

```bash
# Check for linting errors
bun run lint

# Automatically fix linting errors
bun run lint:fix
```

ESLint configuration (eslint.config.js) enforces:

- TypeScript best practices
- Consistent code style
- Integration with Prettier for formatting

### Formatting with Prettier

```bash
# Format all files
bun run format

# Check if files are formatted correctly
bun run format:check
```

Prettier configuration (.prettierrc) enforces:

- Consistent semicolons and quotes
- 2-space indentation
- 100-character line width
- LF line endings

## Building for Deployment

The project is ready to deploy as-is. To optimize for production:

1. Ensure `dist/style.css` is built: `bun run build`
2. Copy the entire directory to your server
3. Run `bun install --production` to install only runtime dependencies
4. Start the server: `bun run start`

## Architecture

- **Server**: Bun's native `Bun.serve()` HTTP API (server.ts)
- **Styling**: Tailwind CSS with custom theme configuration
- **Design**: Retro/TUI aesthetic with purple (#a855f7) primary and gold (#fbbf24) accent colors
- **Typography**: JetBrains Mono (loaded via Google Fonts) with Courier New fallback
- **Runtime**: Bun for maximum performance and minimal overhead

## Color Palette

- **Primary Purple**: `#a855f7`
- **Dark Purple**: `#7c3aed`
- **Light Purple**: `#d8b4fe`
- **Accent Gold**: `#fbbf24`
- **Light Gold**: `#fcd34d`
- **Background**: `#0f172a` (retro-dark)

## Customization

Edit the following files to customize:

- `index.html` - Content and structure
- `input.css` - Custom CSS and component definitions
- `tailwind.config.js` - Theme colors, fonts, and Tailwind configuration
- `public/` - Add images or other static assets

Rebuild CSS after changes: `bun run build`

## Deployment

For self-hosted deployment:

1. Push to your repository
2. Clone on your server
3. Install Bun: `curl -fsSL https://bun.sh/install | bash`
4. Run `bun install --production`
5. Start with `bun run start`
6. Use a process manager to keep it running (e.g., systemd, PM2, supervisor)

Example with systemd:

```ini
[Unit]
Description=Misa Y Vermú Website
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/misa-y-vermu-website
ExecStart=/home/username/.bun/bin/bun run start
Restart=on-failure
Environment="NODE_ENV=production"

[Install]
WantedBy=multi-user.target
```

## Performance

Bun provides:

- **Fast startup**: ~5-10ms server initialization
- **Low memory footprint**: Minimal overhead vs Node.js
- **Native JSX/TypeScript support**: No transpilation needed
- **Built-in bundling and transpilation**

## License

Created with ♥
