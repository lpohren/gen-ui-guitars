# Guitar Chat - Technical Documentation

## Overview

The Guitar Chat application is a React-based conversational AI interface that allows users to interact with an AI assistant to browse and get recommendations for guitars. The system uses TanStack AI for multi-provider AI model support and implements a streaming chat interface with tool-based interactions.

## Architecture

### High-Level Architecture

```
┌──────────────────┐
│   ChatPage       │ (Main Route Component)
│  (guitarchat.tsx)│
└────────┬─────────┘
         │
         ├─────────────────┬──────────────────┐
         │                 │                  │
    ┌────▼────┐      ┌─────▼──────┐    ┌──────▼────────┐
    │ChatInput│      │ChatMessages│    │Recommendation │
    │         │      │            │    │Panel          │
    └────┬────┘      └─────┬──────┘    └───────┬───────┘
         │                 │                   │
         │                 │                   │
    ┌────▼─────────────────▼───────────────────▼─────┐
    │         useGuitarRecommendationChat()          │
    │         (TanStack AI React Hook)               │
    └───────────────────┬────────────────────────────┘
                        │
                        │ SSE Stream
                        │
                ┌───────▼────────┐
                │  API Endpoint  │
                │ api.guitarchat │
                └───────┬────────┘
                        │
                ┌───────▼────────┐
                │ TanStack AI    │
                │ Chat Engine    │
                └───────┬────────┘
                        │
        ┌───────────────┼──────────────┐
        │               │              │
    ┌───▼───┐      ┌────▼────┐    ┌────▼────┐
    │Tools  │      │Provider │    │System   │
    │       │      │Adapter  │    │Prompt   │
    └───────┘      └─────────┘    └─────────┘
```

## Component Structure

### 1. Main Route Component: `ChatPage`

**Location:** `src/routes/demo/guitarchat.tsx`

**Responsibilities:**
- Manages application state (input, model selection, providers)
- Coordinates between UI components
- Handles provider initialization and model selection
- Renders the main layout with chat and recommendation panels

**Key State:**
- `input`: Current user input text
- `availableProviders`: List of available AI providers
- `selectedModel`: Currently selected AI model
- `isCheckingProviders`: Loading state for provider initialization

**Key Functions:**
- `handleModelChange`: Updates selected model and persists preference
- Provider initialization via `useEffect` on mount

### 2. Chat Input Component: `ChatInput`

**Location:** `src/components/ChatInput.tsx`

**Responsibilities:**
- Renders the input form with model selector
- Handles user input and submission
- Displays stop button during AI response
- Auto-resizing textarea

**Props:**
- `input`: Current input value
- `setInput`: Input setter function
- `isLoading`: Whether AI is processing
- `availableModelOptions`: Available model options
- `selectedModel`: Currently selected model
- `onModelChange`: Model selection handler
- `onSubmit`: Form submission handler
- `onStop`: Stop generation handler
- `onSendMessage`: Direct message send handler

**Features:**
- Auto-expanding textarea (max 200px height)
- Enter key to submit (Shift+Enter for newline)
- Model selector dropdown
- Stop button during generation

### 3. Chat Messages Component: `ChatMessages`

**Location:** `src/components/ChatMessages.tsx`

**Responsibilities:**
- Displays chat message history
- Renders markdown content using Streamdown
- Auto-scrolls to bottom on new messages
- Distinguishes between user and assistant messages

**Props:**
- `messages`: Array of chat messages (ChatMessages type)

**Features:**
- Auto-scroll to latest message
- Markdown rendering with syntax highlighting
- Visual distinction between user (Y) and assistant (AI) avatars
- Styled message bubbles with background colors

**Message Structure:**
```typescript
{
  id: string;
  role: "user" | "assistant";
  parts: Array<{
    type: "text" | "tool-call";
    content?: string;
    name?: string;
    output?: any;
  }>;
}
```

### 4. Recommendation Panel Component: `RecommendationPanel`

**Location:** `src/components/RecommendationPanel.tsx`

**Responsibilities:**
- Displays the latest guitar recommendation(s)
- Extracts recommendation data from chat messages
- Renders single or multiple guitar cards

**Props:**
- `messages`: Chat messages array

**Logic:**
- Uses `getLatestRecommendation()` utility to find the most recent recommendation
- Displays `GuitarRecommendation` for single recommendations
- Displays `GuitarRecommendations` for multiple recommendations
- Shows placeholder when no recommendations exist

### 5. Layout Components

**InitialLayout** (`src/components/InitialLayout.tsx`):
- Centered layout shown when no messages exist
- Displays welcome message and title

**ChattingLayout** (`src/components/ChattingLayout.tsx`):
- Sticky bottom layout for input area
- Shown when messages exist

## Data Flow

### Message Flow

1. **User Input**
   ```
   User types → ChatInput → onSubmit → sendMessage(input)
   ```

2. **Message Processing**
   ```
   sendMessage() → useGuitarRecommendationChat() → 
   POST /demo/api/guitarchat → TanStack AI Chat Engine
   ```

3. **Streaming Response**
   ```
   AI Engine → SSE Stream → useChat hook → 
   messages state update → ChatMessages re-render
   ```

4. **Tool Execution**
   ```
   AI calls tool → Tool executed → Output added to message parts →
   RecommendationPanel extracts → UI updates
   ```

### Complete Request Flow

```
1. User submits message
   ↓
2. ChatInput calls sendMessage(input)
   ↓
3. useGuitarRecommendationChat() sends POST to /demo/api/guitarchat
   ↓
4. API endpoint receives request with:
   - messages array
   - provider/model from request data
   ↓
5. API creates adapter based on provider:
   - anthropic → anthropicText()
   - openai → openaiText()
   - gemini → geminiText()
   - ollama → ollamaText()
   ↓
6. TanStack AI chat() function:
   - Processes messages with system prompt
   - Determines if tool calls are needed
   - Executes server-side tools (getGuitars)
   - Returns client-side tool definitions (recommendGuitar/recommendGuitars)
   ↓
7. Stream response sent via Server-Sent Events (SSE)
   ↓
8. Client receives stream chunks:
   - Text tokens → added to message content
   - Tool calls → added to message parts
   ↓
9. Client-side tools execute:
   - recommendGuitar → transforms to { id: number }
   - recommendGuitars → transforms to { ids: number[] }
   ↓
10. Messages state updates → Components re-render:
    - ChatMessages displays text content
    - RecommendationPanel extracts and displays latest recommendation
```

## API Endpoints

### POST `/demo/api/guitarchat`

**Location:** `src/routes/demo/api.guitarchat.ts`

**Purpose:** Main chat API endpoint that processes messages and streams AI responses.

**Request Body:**
```typescript
{
  messages: ChatMessage[];
  data?: {
    provider?: Provider; // 'anthropic' | 'openai' | 'gemini' | 'ollama'
    model?: string;       // Model name (e.g., 'claude-haiku-4-5')
  };
}
```

**Response:** Server-Sent Events (SSE) stream

**Key Features:**
- Multi-provider support via adapter pattern
- Abort controller for request cancellation
- Tool definitions for guitar operations
- System prompt enforcing tool usage workflow
- Max iterations limit (5) for agent loops

**System Prompt:**
The system prompt enforces a strict workflow:
1. Use `getGuitars` tool first to see available guitars
2. Use `recommendGuitar` or `recommendGuitars` to display guitars
3. Never describe guitars directly - always use tools

### GET `/demo/api/available-providers`

**Location:** `src/routes/demo/api.available-providers.ts`

**Purpose:** Returns list of available AI providers based on environment variables.

**Response:**
```typescript
{
  providers: Provider[];
  hasOpenAI: boolean;
}
```

**Logic:**
- Checks for API keys in environment variables
- Always includes 'ollama' (local, no key needed)
- Returns providers with configured API keys

## Tool System

### Tool Definitions

**Location:** `src/lib/example.guitar-tools.ts`

#### 1. `getGuitars` (Server Tool)

**Purpose:** Retrieves all available guitars from the database.

**Type:** Server-side tool (executed on server)

**Input:** None

**Output:** Array of guitar objects with:
- `id`: number
- `name`: string
- `image`: string
- `description`: string
- `shortDescription`: string
- `price`: number

**Implementation:** Returns static guitar data from `@/data/example-guitars`

#### 2. `recommendGuitar` (Client Tool)

**Purpose:** Displays a single guitar recommendation to the user.

**Type:** Client-side tool (executed on client)

**Input:**
```typescript
{
  id: string | number;
}
```

**Output:**
```typescript
{
  id: number;
}
```

**Client Implementation:** (`src/lib/example.ai-hook.ts`)
- Transforms string/number ID to number
- Returns normalized output
- Triggers UI update in RecommendationPanel

#### 3. `recommendGuitars` (Client Tool)

**Purpose:** Displays multiple guitar recommendations to the user.

**Type:** Client-side tool (executed on client)

**Input:**
```typescript
{
  ids: Array<string | number>;
}
```

**Output:**
```typescript
{
  ids: number[];
}
```

**Client Implementation:** (`src/lib/example.ai-hook.ts`)
- Transforms array of IDs to numbers
- Returns normalized output array
- Triggers UI update in RecommendationPanel

### Tool Execution Flow

```
AI determines tool needed
    ↓
Tool call added to message parts
    ↓
If server tool (getGuitars):
    → Executed on server
    → Result added to message
    ↓
If client tool (recommendGuitar/recommendGuitars):
    → Tool definition sent to client
    → Client executes tool
    → Output added to message parts
    ↓
RecommendationPanel extracts latest recommendation
    ↓
UI displays guitar card(s)
```

## State Management

### TanStack AI Hook: `useGuitarRecommendationChat`

**Location:** `src/lib/example.ai-hook.ts`

**Returns:**
```typescript
{
  messages: ChatMessages;
  sendMessage: (message: string) => void;
  isLoading: boolean;
  stop: () => void;
}
```

**Configuration:**
- Connection: SSE to `/demo/api/guitarchat`
- Tools: Client tools for recommendations
- Message type inference from configuration

### Local State (ChatPage)

- **Input state:** Controlled component pattern for textarea
- **Provider state:** Fetched on mount, stored in state
- **Model state:** Selected model with localStorage persistence

### Message State

Messages are managed by TanStack AI's `useChat` hook:
- Automatically updates on stream chunks
- Maintains message history
- Handles tool call results
- Manages loading states

## UI/UX Flow

### Initial State
1. Page loads → `ChatPage` mounts
2. Fetches available providers
3. Loads stored model preference or selects default
4. Shows `InitialLayout` with welcome message

### Chatting State
1. User types message → `ChatInput` updates state
2. User submits → `sendMessage()` called
3. `isLoading` becomes `true` → Stop button appears
4. Messages stream in → `ChatMessages` auto-scrolls
5. If tool called → `RecommendationPanel` updates
6. Response completes → `isLoading` becomes `false`

### Recommendation Display
1. AI calls `recommendGuitar` or `recommendGuitars`
2. Tool output added to message parts
3. `getLatestRecommendation()` scans messages (reverse order)
4. Finds latest recommendation
5. `RecommendationPanel` renders appropriate component:
   - Single: `GuitarRecommendation` card
   - Multiple: `GuitarRecommendations` grid

## Key Utilities

### `getLatestRecommendation`

**Location:** `src/lib/guitarchat-utils.ts`

**Purpose:** Extracts the most recent guitar recommendation from chat messages.

**Algorithm:**
1. Iterate messages in reverse (newest first)
2. For each message, check parts
3. Find first `tool-call` part with name `recommendGuitar` or `recommendGuitars`
4. Return recommendation data with type

**Returns:**
```typescript
{
  type: "single" | "multiple";
  data: { id: number } | { ids: number[] };
} | null
```

## Provider System

### Supported Providers

1. **Anthropic** (Claude)
   - Requires `ANTHROPIC_API_KEY`
   - Default model: `claude-haiku-4-5`

2. **OpenAI**
   - Requires `OPENAI_API_KEY`
   - Default model: `gpt-4o`

3. **Google Gemini**
   - Requires `GEMINI_API_KEY`
   - Default model: `gemini-2.0-flash-exp`

4. **Ollama** (Local)
   - No API key required
   - Default model: `mistral:7b`
   - Always available

### Adapter Pattern

The API uses an adapter factory pattern to support multiple providers:

```typescript
const adapterConfig = {
  anthropic: () => anthropicText(model),
  openai: () => openaiText(model),
  gemini: () => geminiText(model),
  ollama: () => ollamaText(model),
};
```

## Error Handling

### Request Abortion
- Uses `AbortController` for cancellation
- Returns 499 status if request aborted
- Handles abort errors gracefully

### Provider Errors
- Falls back to Ollama if provider check fails
- Shows error state if no providers available

### Stream Errors
- TanStack AI handles stream errors
- Client receives error messages in stream
- UI displays error states appropriately

## Performance Considerations

1. **Streaming:** Responses stream in real-time for better UX
2. **Auto-scroll:** Only scrolls when new messages arrive
3. **Message Filtering:** Recommendation cards filtered out of chat display
4. **Latest Recommendation:** Only extracts most recent (not all)
5. **Lazy Rendering:** Components only render when needed

## Dependencies

### Core Libraries
- `@tanstack/react-router`: Routing
- `@tanstack/ai-react`: AI chat hook
- `@tanstack/ai`: Core AI engine
- `@tanstack/ai-*`: Provider adapters
- `streamdown`: Markdown rendering
- `zod`: Schema validation for tools

### UI Libraries
- `lucide-react`: Icons
- Tailwind CSS: Styling

## Future Enhancements

Potential improvements:
1. Message persistence (localStorage/database)
2. Conversation history
3. Multi-turn tool conversations
4. Enhanced error recovery
5. Typing indicators
6. Message editing/deletion
7. Export conversation

