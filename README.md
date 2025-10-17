# AI Agent Workflows Course Template

Starter template for building resilient AI agents with streaming responses, multi-turn tool calling, and RAG using Vercel Workflows and the AI SDK.

**Course:** [AI Agent Workflows](/ai-agent-workflows)

## What You'll Build

This template scaffolds an AI agent system with:
- **Streaming AI responses** with workflow resilience (Section 1)
- **Multi-turn tool calling** with automatic retries (Section 2)
- **RAG pipeline** with embeddings and vector search (Section 4)
- **Production patterns** for error handling and observability (Section 5)

## Prerequisites

- Node.js 18+
- Vercel account with AI Gateway enabled
- OpenAI API key (or Anthropic/other AI SDK provider)

## Quick Start

1. **Clone and install:**
   ```bash
   git clone [this-repo]
   cd ai-agent-workflows-template
   pnpm install
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   # Add your VERCEL_AI_GATEWAY_API_KEY and OPENAI_API_KEY
   ```

3. **Run development server:**
   ```bash
   pnpm dev
   ```

4. **Open:** [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ai-agent-workflows-template/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chat endpoint (Section 1)
│   ├── components/
│   │   └── chat-interface.tsx    # Chat UI (Section 1)
│   ├── workflows/
│   │   ├── stream-chat.ts        # TODO: Section 1.2 - Streaming AI responses
│   │   ├── tool-loop.ts          # TODO: Section 2.1 - Multi-turn tool calling
│   │   ├── embed-content.ts      # TODO: Section 4.1 - Embedding pipeline
│   │   └── search-knowledge.ts   # TODO: Section 4.3 - Vector search
│   ├── lib/
│   │   └── db/                   # TODO: Database setup (Section 4.2)
│   └── page.tsx                  # Home with chat interface
├── .env.example
├── next.config.ts
└── package.json
```

## Course Sections → Template TODOs

### Section 0: Setup
- ✅ Next.js App Router configured
- ✅ AI Gateway integration ready
- ✅ Workflow experimental flag enabled

### Section 1: Streaming AI Responses
- ✅ Basic chat UI scaffold
- TODO: Implement `app/workflows/stream-chat.ts`
- TODO: Connect streaming workflow to chat endpoint

### Section 2: Multi-Turn Tool Calling
- TODO: Implement `app/workflows/tool-loop.ts`
- TODO: Add tool definitions and execution logic
- TODO: Handle tool errors with RetryableError

### Section 3: Advanced Tool Patterns
- TODO: Add tool composition and chaining
- TODO: Implement parallel tool execution

### Section 4: RAG Pipeline
- TODO: Set up database in `app/lib/db/`
- TODO: Implement `app/workflows/embed-content.ts`
- TODO: Implement `app/workflows/search-knowledge.ts`
- TODO: Add vector database client

### Section 5: Production Patterns
- TODO: Add correlation IDs and structured logging
- TODO: Implement step metadata and observability
- TODO: Add error boundaries and fallback strategies

## Required Integrations

### AI Gateway (Required)
1. Enable AI Gateway in your Vercel project settings
2. Get API key from: `vercel.com/[team]/settings/ai-gateway`
3. Add to `.env`: `VERCEL_AI_GATEWAY_API_KEY=...`

### Database + Vector Search (Section 4)

**Recommended:** [Neon Postgres](https://vercel.com/marketplace/neon) with pgvector extension

1. Add Neon from [Vercel Marketplace](https://vercel.com/marketplace/neon)
2. Enable pgvector extension automatically
3. Connection string auto-configured in `.env`: `DATABASE_URL=...`

**Why Neon:**
- Built-in pgvector for semantic search (no separate vector DB needed)
- Serverless Postgres with automatic scaling
- Free tier includes pgvector
- One database instead of two services

**Alternatives:** Vercel Postgres, Supabase (both support pgvector)

## Deployment

Deploy to Vercel:

```bash
vercel
```

Configure environment variables in Vercel dashboard before deploying.

## Learn More

- [Vercel Workflows Docs](https://vercel.com/docs/workflow)
- [AI SDK Docs](https://sdk.vercel.ai)
- [Course Repository](https://github.com/vercel/academy-vectr-workflow-course-content)

## License

MIT
