import { ChatInterface } from './components/chat-interface'

/**
 * Home page with chat interface
 *
 * Section 1: You'll connect this to the streaming workflow
 * Section 2: You'll add multi-turn tool calling
 * Section 4: You'll add RAG context retrieval
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full max-w-3xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">AI Agent Workflows</h1>
          <p className="text-gray-600 mt-2">
            Building resilient AI agents with Vercel Workflows
          </p>
        </header>

        <ChatInterface />

        <footer className="mt-8 text-sm text-gray-500">
          <p>
            Template for the{' '}
            <a
              href="/ai-agent-workflows"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI Agent Workflows course
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}
