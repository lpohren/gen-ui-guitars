# Gen UI Guitars

An AI-powered guitar recommendation chat application built with TanStack AI, React, and TypeScript. Chat with AI assistants to discover and compare guitars with an interactive, conversational interface.

## Overview

This application provides an intelligent chat interface where users can:

- Ask questions about guitars and get AI-powered recommendations
- View detailed guitar information with images and descriptions
- Compare multiple guitars side-by-side
- Get personalized recommendations based on their preferences

The app supports multiple AI providers including OpenAI, Anthropic, Google Gemini, and Ollama (local).

## Tech Stack

- **Framework**: React 19 with TanStack Router
- **AI**: TanStack AI with multi-provider support
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Language**: TypeScript
- **Linting/Formatting**: Biome

## Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd gen-ui-guitars
```

1. Install dependencies:

```bash
npm install
```

1. Configure AI providers (optional):

Create a `.env.local` file in the root directory with your API keys:

```env
# Optional: Add one or more API keys to enable providers
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here
GEMINI_API_KEY=your_gemini_key_here
```

**Note**: If no API keys are provided, the app will use Ollama (local) by default. Make sure Ollama is installed and running if you plan to use it.

1. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code with Biome
- `npm run format` - Format code with Biome
- `npm run check` - Run Biome check (lint + format)

## Project Structure

```text
src/
├── components/          # React components
│   ├── ChatPage/       # Main chat interface
│   ├── ChatInput.tsx   # Chat input component
│   ├── ChatMessages.tsx # Message display
│   └── ...
├── routes/             # TanStack Router routes
│   ├── demo/          # Demo routes and API endpoints
│   └── ...
├── lib/                # Utilities and AI configuration
│   ├── ai-hook.ts     # AI chat hook
│   ├── guitar-tools.ts # Guitar recommendation tools
│   └── ...
└── data/              # Static data (example guitars)
```

## Features

- 🤖 Multi-provider AI support (OpenAI, Anthropic, Gemini, Ollama)
- 💬 Interactive chat interface
- 🎸 Guitar recommendations with rich UI
- 🔄 Side-by-side guitar comparisons
- 🎨 Modern, responsive design
- 🔧 Developer-friendly with TanStack DevTools

## License

Private project
