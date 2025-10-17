# Database Setup

TODO Section 4.2: Set up your database connection

## Recommended Options

### 1. Vercel Postgres
```typescript
import { sql } from '@vercel/postgres'

export async function query(text: string, params?: any[]) {
  return sql.query(text, params)
}
```

### 2. Neon
```typescript
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

export { sql }
```

### 3. Supabase
```typescript
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)
```

## Schema Example

You'll create tables for:
- `documents` - Store original content
- `embeddings` - Store vector embeddings (use pgvector extension)

```sql
-- Example schema (Section 4.2)
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE embeddings (
  id SERIAL PRIMARY KEY,
  document_id INTEGER REFERENCES documents(id),
  embedding VECTOR(1536),
  chunk_text TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX ON embeddings USING ivfflat (embedding vector_cosine_ops);
```

## Learning Goals

- Set up database connection
- Create schema for RAG pipeline
- Use pgvector for embeddings
- Handle migrations
