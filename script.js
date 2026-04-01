const glossary = {
  frontend: {
    short: "The part users see and interact with in the browser.",
    full: "The frontend is the visible interface layer: layout, buttons, forms, and interaction logic running on the client side.",
  },
  backend: {
    short: "The server-side logic behind the interface.",
    full: "The backend handles business rules, data access, authentication, integrations, and server-side processing.",
  },
  api: {
    short: "A defined way for systems to exchange data or actions.",
    full: "An API is a contract that lets one system ask another for data or work without needing to know its internal implementation.",
  },
  sdk: {
    short: "A code library that makes working with a system or API easier.",
    full: "An SDK is a software development kit: a packaged set of code, helpers, and documentation that wraps lower-level operations so developers can integrate faster.",
  },
  cli: {
    short: "A command-line interface used from the terminal.",
    full: "A CLI is a text-based interface for running commands, scripts, and tools directly from the terminal instead of through a graphical UI.",
  },
  mcp: {
    short: "A standard way for AI assistants to connect to tools and external context.",
    full: "MCP, or Model Context Protocol, is a structured way to expose tools, resources, and context to an AI assistant so it can use them safely and consistently.",
  },
  database: {
    short: "A system for storing and retrieving structured data.",
    full: "A database keeps persistent information such as users, orders, settings, and records that the app can query and update.",
  },
  state: {
    short: "The current data a system is using right now.",
    full: "State is the current condition of an app or component, such as whether a menu is open or which user is signed in.",
  },
  headless: {
    short: "The content or backend layer is separated from the display layer.",
    full: "Headless architecture separates the backend or CMS from the frontend so the same content or data can power multiple interfaces.",
  },
  ssr: {
    short: "Rendering HTML on the server before it reaches the browser.",
    full: "Server-side rendering generates HTML on the server, which can improve first-load performance and SEO for many use cases.",
  },
  spa: {
    short: "A single-page app that updates in the browser without full page reloads.",
    full: "A SPA loads a shell once, then uses JavaScript to swap views and fetch data dynamically as users move through the app.",
  },
  harness: {
    short: "The surrounding code and tooling used to run and evaluate an AI system.",
    full: "An AI harness is the practical wrapper around models: prompts, tool wiring, logging, testing, retries, guardrails, and evaluation paths.",
  },
  rag: {
    short: "Retrieval-augmented generation: the model gets external context before answering.",
    full: "RAG improves answers by fetching relevant documents or data and placing that context into the model’s prompt at runtime.",
  },
  orchestration: {
    short: "The logic that coordinates multiple steps, tools, or services.",
    full: "Orchestration decides what happens in what order, including model calls, tool calls, validation steps, and fallbacks.",
  },
  context_window: {
    short: "How much information a model can consider in one pass.",
    full: "A context window is the amount of text, instructions, and prior conversation the model can process together in a single request.",
  },
  deploy: {
    short: "Publishing software so others can use it.",
    full: "A deploy moves a tested version of code into an environment such as staging or production where it becomes accessible.",
  },
  auth: {
    short: "The process of proving identity and controlling access.",
    full: "Authentication verifies who a user is, while authorization determines what that user is allowed to do.",
  },
};

const courses = [
  {
    id: "map",
    title: "The Map",
    caption: "Learn the main pieces before the jargon piles up.",
    lessons: [
      {
        id: "system-shape",
        title: "The Shape of a Modern App",
        summary: "See the main moving parts first so later terminology has somewhere to attach.",
        heroTitle: "Understand the whole system before the details.",
        heroCopy:
          "You do not need to write code to make good setup decisions. You do need a clean mental map of the pieces and their boundaries.",
        depth: {
          1: {
            core: [
              "A modern app is usually a few clear parts working together: a {frontend}, a {backend}, a {database}, and often an {api}.",
              "The point is not complexity for its own sake. Each part exists because software needs a place for interface, logic, and stored information.",
            ],
            analogy:
              "Think of a restaurant. The dining room is the {frontend}, the kitchen is the {backend}, the pantry is the {database}, and the ticket system is the {api}.",
            takeaway:
              "When you are setting something up, the first question is not which tool is coolest. It is which job needs to be done and where that job belongs.",
          },
          2: {
            core: [
              "The {frontend} handles what the user sees and clicks. The {backend} handles rules, integrations, and sensitive logic. The {database} stores durable information.",
              "An {api} is often the seam between systems. It defines how one part requests data or actions from another without knowing every internal detail.",
            ],
            analogy:
              "The restaurant analogy still works, but now add systems: a waiter does not cook the meal and the kitchen does not seat the guest. Clear boundaries keep the whole operation stable.",
            takeaway:
              "If a project feels confusing, it often means responsibilities are blurry. Strong architecture makes boundaries explicit.",
          },
          3: {
            core: [
              "Architecture is mostly about separation of concerns: where data lives, where business logic runs, which layer owns what, and how change flows safely through the system.",
              "This is why terms like {headless}, monolith, or service layer matter. They describe how responsibilities are arranged, not just which tools are installed.",
            ],
            analogy:
              "A good organization chart prevents random people from approving invoices, ordering supplies, and hiring staff all in the same conversation. Software boundaries do the same thing.",
            takeaway:
              "When evaluating a setup, ask: where is truth stored, where is decision-making happening, and how painful would changes be later?",
          },
        },
        diagram: {
          type: "flow",
          nodes: [
            ["User", "A person clicks, types, and expects a response."],
            ["Frontend", "The interface layer in the browser or app."],
            ["Backend", "Rules, security, and coordination happen here."],
            ["Database", "Persistent records are stored here."],
          ],
          note: "This is the baseline map. Most later concepts are refinements of this picture.",
        },
        beforeAI:
          "Teams already had to separate interface, logic, and storage. Those responsibilities did not start with AI.",
        withAI:
          "AI usually becomes another capability inside the system, not a replacement for the whole stack. It may live behind the {backend}, call tools through an {api}, and read from a {database} or {rag} layer.",
        stillHard:
          "People still need to decide what should be deterministic software and what should be model-driven behavior. AI adds a new component, but not a free pass on structure.",
        caseStudy:
          "Imagine a simple coaching platform. Users browse plans on the {frontend}, payment rules run in the {backend}, progress logs live in the {database}, and integrations like Stripe connect through APIs.",
        terms: ["frontend", "backend", "database", "api", "headless"],
        mermaid: `flowchart LR
  User --> Frontend
  Frontend --> Backend
  Backend --> Database`,
        quiz: {
          question: "Which layer should usually hold your sensitive business rules?",
          options: ["Frontend", "Backend", "Browser cache"],
          correct: 1,
          explanation:
            "Business rules and sensitive logic belong on the backend because the frontend is visible and easier to manipulate.",
        },
      },
      {
        id: "request-response",
        title: "What Happens When a Page Loads",
        summary: "Understand the browser-server loop before adding frameworks or AI.",
        depth: {
          1: {
            core: [
              "When you visit a website, your browser sends a request and receives a response. That response might be a fully built page or raw data plus scripts.",
              "This loop is the basis for most of the web, even when modern frameworks make it feel invisible.",
            ],
            analogy:
              "It is like ordering from a counter. You ask for something, the system prepares it, and you receive a result.",
            takeaway:
              "If you understand request and response, you can usually reason about where a problem is happening.",
          },
          2: {
            core: [
              "The browser may request HTML, CSS, JavaScript, images, or data. Some content arrives already rendered. Some is assembled after the page loads.",
              "This is where terms like {ssr} and {spa} start to matter. They describe different loading and rendering patterns.",
            ],
            analogy:
              "Sometimes the meal arrives fully plated. Sometimes you get ingredients and finish assembling at the table.",
            takeaway:
              "Performance, SEO, and app feel are often consequences of how and when rendering happens.",
          },
          3: {
            core: [
              "Rendering strategy is an architectural decision. Server-heavy approaches can improve first-load clarity, while client-heavy approaches can improve app-like interactivity after load.",
              "You rarely choose a framework in isolation. You are choosing tradeoffs around delivery, caching, complexity, and data flow.",
            ],
            analogy:
              "A catered dinner and a self-serve kitchen can both work, but they optimize for different experiences and operational constraints.",
            takeaway:
              "Ask not just 'what framework should I use?' but 'when should content be generated and where should that work happen?'",
          },
        },
        diagram: {
          type: "flow",
          nodes: [
            ["Browser", "Requests a page or data."],
            ["Server", "Returns HTML, JSON, files, or errors."],
            ["Renderer", "The browser builds what you see."],
          ],
          note: "Most frontend complexity is built on top of this simple exchange.",
        },
        beforeAI:
          "This request-response loop already powered classic websites, dashboards, and ecommerce apps.",
        withAI:
          "AI can be inserted into the response path, but that makes latency, cost, and reliability part of page design. The model is now in the loop.",
        stillHard:
          "You still need pages to feel fast and stable. Putting an LLM on the critical path without guardrails often makes UX worse.",
        caseStudy:
          "A content site might use {ssr} so the first page is ready for search engines. A more app-like admin tool may behave more like a {spa} after login.",
        terms: ["ssr", "spa", "frontend", "backend"],
        mermaid: `sequenceDiagram
  Browser->>Server: Request page
  Server-->>Browser: HTML/CSS/JS
  Browser->>Browser: Render UI`,
        quiz: {
          question: "What is the basic web loop most modern sites still rely on?",
          options: ["Request and response", "Compile and flash", "Train and infer"],
          correct: 0,
          explanation:
            "Modern stacks add layers, but the browser still asks for resources and receives responses.",
        },
      },
    ],
  },
  {
    id: "boundaries",
    title: "Boundaries",
    caption: "Know where responsibility should live.",
    lessons: [
      {
        id: "data-flow",
        title: "Data, State, and Source of Truth",
        summary: "See how information moves so dynamic apps stop feeling magical.",
        depth: {
          1: {
            core: [
              "Apps feel alive because data changes. To reason about them, ask where the data came from and which version is the real source of truth.",
              "{State} is what the app is holding right now. A {database} is what the system persists over time.",
            ],
            analogy:
              "A whiteboard in a room is current working state. The signed contract in a cabinet is the lasting record.",
            takeaway:
              "Many bugs happen when teams confuse temporary UI state with durable system truth.",
          },
          2: {
            core: [
              "Some state is local and short-lived, like a modal being open. Other data should be fetched from the backend and written to the database because it must persist across sessions.",
              "Good systems distinguish between display state, business state, and stored records.",
            ],
            analogy:
              "A shopping cart preview is not the same thing as a completed order record.",
            takeaway:
              "When designing features, ask what must persist, what can be recomputed, and what is just current interface state.",
          },
          3: {
            core: [
              "Source of truth is an architectural discipline. Duplicating ownership across browser state, cache, backend memory, and database rows creates drift unless the contracts are explicit.",
              "Caching helps performance, but every cache is also a consistency decision.",
            ],
            analogy:
              "If five departments keep their own customer spreadsheet, somebody will eventually be wrong.",
            takeaway:
              "The more systems that can mutate the same data, the more carefully you need ownership rules and synchronization paths.",
          },
        },
        diagram: {
          type: "flow",
          nodes: [
            ["User action", "Clicks or submits data."],
            ["UI state", "Immediate visible change."],
            ["Backend rule", "Validation and business logic."],
            ["Database write", "Durable record update."],
          ],
          note: "This pattern helps separate what feels instant from what must be trustworthy.",
        },
        beforeAI:
          "Classical apps already had to distinguish temporary state from durable records.",
        withAI:
          "AI adds another source of confusion because generated text can feel authoritative even when it is just a transient response. Model output is rarely the source of truth by itself.",
        stillHard:
          "Teams often treat the model like a database, which causes reliability problems. Generated summaries and recommendations usually need verification or a structured backing record.",
        caseStudy:
          "An AI research assistant may generate a summary for the user, but the actual client record should still live in a database or CRM, not only in the model response.",
        terms: ["state", "database", "backend", "api"],
        mermaid: `flowchart LR
  Click --> UIState
  UIState --> BackendValidation
  BackendValidation --> Database`,
        quiz: {
          question: "Which is usually the source of truth for an order history?",
          options: ["A component's local state", "The database", "A hover tooltip"],
          correct: 1,
          explanation: "Order history needs durable storage and should be treated as a persistent record.",
        },
      },
      {
        id: "system-interfaces",
        title: "API vs SDK vs CLI vs MCP",
        summary: "Learn four common access patterns so tool and workflow terminology stops blurring together.",
        depth: {
          1: {
            core: [
              "These terms all describe ways of interacting with systems, but they are not interchangeable. An {api} is a contract, an {sdk} is a helper toolkit, a {cli} is a terminal interface, and an {mcp} server exposes tools and context to AI assistants.",
              "The easiest way to think about them is: same underlying capability, different access layer.",
            ],
            analogy:
              "Imagine a restaurant. The kitchen's rules for taking orders are the {api}. The waiter training manual and tools are the {sdk}. The call-in order line is the {cli}. A dedicated concierge channel for an AI assistant would be the {mcp} connection.",
            takeaway:
              "When choosing a workflow, ask not just what a system can do, but how you are supposed to access it.",
          },
          2: {
            core: [
              "An {api} usually exposes endpoints or functions. An {sdk} wraps that API in a language-specific package. A {cli} lets humans or scripts invoke actions from the terminal. An {mcp} layer gives AI tools a standardized way to discover and call capabilities.",
              "One product can offer all four at once. For example, a platform may have a REST API, a JavaScript SDK, a CLI, and an MCP server or connector.",
            ],
            analogy:
              "It is like one business offering a printed form, an online portal, a phone hotline, and a dedicated partner desk. The service is similar; the interaction mode changes.",
            takeaway:
              "A lot of setup confusion comes from mixing the capability itself with the interface used to reach it.",
          },
          3: {
            core: [
              "Architecturally, these are interface layers around a system. APIs are usually the fundamental machine-to-machine contract. SDKs optimize developer ergonomics. CLIs optimize direct operator workflow and scripting. MCP optimizes AI-agent interoperability.",
              "That means your decision is often about who the caller is: application code, human operator, automation script, or AI assistant.",
            ],
            analogy:
              "The same warehouse can support trucks, customer pickup, internal staff, and partner deliveries, but each path needs a different loading dock.",
            takeaway:
              "The deeper skill is recognizing which interface best fits the user of the system, because that shapes reliability, speed, and maintainability.",
          },
        },
        diagram: {
          type: "compare",
          classic: [
            "API",
            "Machine-to-machine contract",
            "Raw capability surface",
            "Often the base layer",
          ],
          ai: [
            "SDK / CLI / MCP",
            "Different ways to access the same capability",
            "Developer, operator, or AI-friendly wrapper",
            "Chosen based on who is calling",
          ],
        },
        beforeAI:
          "Before AI agents became common, most teams mostly thought in terms of APIs, SDKs, and CLIs.",
        withAI:
          "MCP adds another access layer: a standardized way for AI assistants to discover tools, resources, and actions without each integration being custom-wired from scratch.",
        stillHard:
          "The existence of multiple interfaces does not remove the need to understand the underlying system. A clean wrapper still depends on a clear source of truth and good contracts underneath.",
        caseStudy:
          "A payments platform might expose an {api} for raw operations, an {sdk} for app developers, a {cli} for admin tasks or local testing, and an {mcp} integration so an AI assistant can inspect docs or call approved tools.",
        terms: ["api", "sdk", "cli", "mcp", "backend"],
        mermaid: `flowchart TD
  System[Underlying System] --> API[API]
  API --> SDK[SDK]
  API --> CLI[CLI]
  API --> MCP[MCP Server]
  SDK --> AppCode[Application Code]
  CLI --> Operator[Human or Script]
  MCP --> Agent[AI Assistant]`,
        quiz: {
          question: "If the same system exposes a terminal tool for humans and scripts, what is that interface usually called?",
          options: ["SDK", "CLI", "Database row"],
          correct: 1,
          explanation:
            "A CLI is the terminal-facing interface. It is distinct from an SDK, which is meant to be used from application code.",
        },
      },
      {
        id: "headless-patterns",
        title: "What Headless Actually Means",
        summary: "Translate a common buzzword into a useful setup decision.",
        depth: {
          1: {
            core: [
              "{Headless} means the content or business system is separate from the display layer.",
              "Instead of one coupled website doing everything, one system manages content and another system decides how to present it.",
            ],
            analogy:
              "It is like having a kitchen that can serve a dining room, a food truck, and a catering event from the same recipes.",
            takeaway:
              "Headless is useful when you want flexibility across channels or custom frontend control.",
          },
          2: {
            core: [
              "A headless CMS usually stores content and exposes it through an {api}. A custom frontend pulls that content and renders it independently.",
              "This gives freedom in design and channel distribution, but it also introduces integration work.",
            ],
            analogy:
              "The recipes live in one system, but multiple storefronts can plate them differently.",
            takeaway:
              "Headless is not automatically better. It is better when decoupling solves a real problem.",
          },
          3: {
            core: [
              "The tradeoff is operational complexity for presentation freedom. You gain frontend autonomy, omnichannel reuse, and more exact control. You lose simplicity, and sometimes editorial ease, if the stack is overbuilt.",
              "This is a classic architecture question: coupled systems are simpler until they are too rigid.",
            ],
            analogy:
              "Owning separate warehouse, packaging, and storefront systems can scale well, but it is overkill for a pop-up shop.",
            takeaway:
              "Use headless when you need separation. Avoid it when you mainly need speed and low maintenance.",
          },
        },
        diagram: {
          type: "compare",
          classic: [
            "Coupled site",
            "Content and presentation live in one system",
            "Faster to start, less flexible later",
          ],
          ai: [
            "Headless setup",
            "Content lives in one system and multiple frontends consume it",
            "More flexible, more integration work",
          ],
        },
        beforeAI:
          "Headless existed well before AI as a way to decouple content and presentation.",
        withAI:
          "AI makes headless patterns more valuable in some cases because the same content may power a website, chatbot, internal assistant, and automation flow.",
        stillHard:
          "Decoupling can create more places for content mismatch, stale data, and editorial confusion if governance is weak.",
        caseStudy:
          "A brand could store athlete bios in a headless CMS, render them on the site, feed them to an AI assistant, and reuse them in email workflows through the same content source.",
        terms: ["headless", "api", "frontend", "backend"],
        mermaid: `flowchart TD
  CMS[Headless CMS] --> Website
  CMS --> Chatbot
  CMS --> EmailAutomation`,
        quiz: {
          question: "When is headless usually worth considering?",
          options: [
            "When one coupled template is enough",
            "When the same content must power multiple interfaces",
            "Only when AI is involved",
          ],
          correct: 1,
          explanation:
            "Headless pays off when separation and reuse across channels matter enough to justify the extra setup work.",
        },
      },
    ],
  },
  {
    id: "ai-native",
    title: "AI Systems",
    caption: "Place AI in the stack without turning it into magic.",
    lessons: [
      {
        id: "ai-basics",
        title: "Where AI Fits in a Real System",
        summary: "Anchor AI terminology to the same architecture map rather than treating it as a separate universe.",
        depth: {
          1: {
            core: [
              "An LLM is usually one component in a broader product. It does not replace your app, your data model, or your operational rules.",
              "Most AI products still need a {frontend}, a {backend}, a {database}, and often an {api} layer around the model.",
            ],
            analogy:
              "AI is like adding a highly capable but inconsistent analyst to a company. You still need managers, records, and process.",
            takeaway:
              "Do not ask only what the model can say. Ask what role it plays in the full system.",
          },
          2: {
            core: [
              "AI often sits behind the backend. The backend decides what context to send, which tools the model can call, and how outputs get validated or stored.",
              "Model output is usually combined with conventional software systems rather than replacing them.",
            ],
            analogy:
              "A strong analyst still works inside a workflow, not as the entire company.",
            takeaway:
              "The system around the model often matters as much as the model itself.",
          },
          3: {
            core: [
              "AI system design is really interface design, data design, and control design around probabilistic generation. The surrounding {harness} determines reliability more than the raw prompt alone.",
              "This is why architecture matters even more with AI: the model is non-deterministic, so the wrapper must provide structure.",
            ],
            analogy:
              "If a brilliant contractor improvises on every job, the project manager and checklist become even more important.",
            takeaway:
              "Treat AI as a powerful subsystem that needs clear boundaries, instrumentation, and fallback behavior.",
          },
        },
        diagram: {
          type: "flow",
          nodes: [
            ["User", "Asks for help or triggers a workflow."],
            ["App backend", "Prepares context and rules."],
            ["Model", "Generates text or action suggestions."],
            ["Tools/data", "Provide real-world grounding."],
          ],
          note: "The model is powerful, but it is not the whole architecture.",
        },
        beforeAI:
          "Classic software was mostly deterministic. Given the same input, code generally returned the same output.",
        withAI:
          "Now one layer may be probabilistic. That means prompts, context, tools, and evaluation become first-class architectural concerns.",
        stillHard:
          "Latency, hallucination risk, cost, and evaluation are not solved by a better prompt alone.",
        caseStudy:
          "A lead-qualification assistant may summarize inbound forms with AI, but routing rules, CRM writes, permissions, and audit logs still belong to conventional software layers.",
        terms: ["frontend", "backend", "database", "api", "harness"],
        mermaid: `flowchart LR
  User --> Backend
  Backend --> Model
  Backend --> Database
  Model --> Tools`,
        quiz: {
          question: "What usually determines whether an AI feature is reliable in production?",
          options: ["Prompt text alone", "The surrounding harness and system design", "Brand colors"],
          correct: 1,
          explanation:
            "The surrounding system controls context, tools, validation, retries, storage, and user experience.",
        },
      },
      {
        id: "harness-orchestration",
        title: "Harness, Orchestration, and RAG",
        summary: "Three terms that sound abstract until you attach them to a workflow.",
        depth: {
          1: {
            core: [
              "A {harness} is the practical wrapper around the model. {Orchestration} is the logic that decides what happens in what order. {Rag} is a way to fetch outside context before the model responds.",
              "These are not exotic ideas. They are how teams make AI systems more useful and less fragile.",
            ],
            analogy:
              "The harness is the workspace and checklist. Orchestration is the manager directing the sequence. RAG is the filing cabinet that gets pulled open before the analyst answers.",
            takeaway:
              "Most real AI products are not just a prompt box. They are a small system around a prompt box.",
          },
          2: {
            core: [
              "A harness may include prompt templates, tool definitions, logging, evaluations, retry rules, and safety checks.",
              "Orchestration may branch: if user intent is A, call one tool; if B, fetch docs first; if confidence is low, ask a clarifying question. {Rag} specifically improves grounding by retrieving relevant information at runtime.",
            ],
            analogy:
              "The analyst is useful, but the process around them decides whether the work is consistent and reviewable.",
            takeaway:
              "You do not just choose a model. You design the operating system around the model.",
          },
          3: {
            core: [
              "These layers are where serious AI product work happens. The raw model is only one dependency. The durable advantage often comes from data access, workflow control, evaluation loops, and domain-specific orchestration.",
              "If you understand harness and orchestration, you can ask better questions about where value is actually being created.",
            ],
            analogy:
              "Two firms can hire the same analyst, but the one with better process, records, and decision routing gets better outcomes.",
            takeaway:
              "AI leverage often comes from system design, not merely model access.",
          },
        },
        diagram: {
          type: "flow",
          nodes: [
            ["User request", "A task enters the system."],
            ["Orchestrator", "Chooses sequence, tools, and rules."],
            ["RAG fetch", "Pulls supporting context."],
            ["Model harness", "Runs prompts, tools, checks, and logs."],
            ["Output", "Delivered or sent for review."],
          ],
          note: "This is the conceptual backbone behind many 'agentic' workflows.",
        },
        beforeAI:
          "Software already had workflows, middleware, and pipelines. AI adds a probabilistic step inside those pipelines.",
        withAI:
          "The big change is that you now manage context, tool permissions, and evaluation quality around a generative model.",
        stillHard:
          "Bad retrieval, weak tool contracts, and missing evals can make a sophisticated-looking AI workflow brittle in practice.",
        caseStudy:
          "An internal assistant could use {rag} to fetch policy docs, then an orchestrator decides whether to answer directly, call a CRM tool, or escalate to a human.",
        terms: ["harness", "orchestration", "rag", "api", "context_window"],
        mermaid: `flowchart TD
  Request --> Orchestrator
  Orchestrator --> Retrieval
  Orchestrator --> Harness
  Retrieval --> Harness
  Harness --> Answer`,
        quiz: {
          question: "What does RAG primarily do?",
          options: [
            "Stores CSS files",
            "Fetches relevant external context before generation",
            "Deploys the app",
          ],
          correct: 1,
          explanation:
            "RAG improves grounding by retrieving relevant documents or records and supplying them to the model at runtime.",
        },
      },
    ],
  },
  {
    id: "decisions",
    title: "Decision Frameworks",
    caption: "Use concepts to make setup choices.",
    lessons: [
      {
        id: "choose-stack",
        title: "How to Choose a Setup Without Getting Lost",
        summary: "Turn concepts into a practical evaluation method.",
        depth: {
          1: {
            core: [
              "Do not start with tools. Start with constraints: what you are building, how fast it must ship, who edits content, and how much flexibility you really need.",
              "Architecture decisions are mostly tradeoff decisions.",
            ],
            analogy:
              "You choose a vehicle based on cargo, terrain, and budget, not based on whichever dashboard looks coolest.",
            takeaway:
              "The best stack is usually the one that solves your real constraints with the least unnecessary complexity.",
          },
          2: {
            core: [
              "Ask a few forcing questions: is this mostly content or product logic? Does the same data need multiple interfaces? Is performance or customization more important? Do non-technical people need to edit content often?",
              "Those questions usually narrow the stack faster than browsing trend lists.",
            ],
            analogy:
              "You are fitting a system to a job, not applying a universal answer.",
            takeaway:
              "A good architect reduces option anxiety by clarifying the decision criteria first.",
          },
          3: {
            core: [
              "The deeper skill is not memorizing frameworks. It is learning to assess coupling, scalability, operating cost, team fit, and future change paths.",
              "A simpler system that can be replaced later often beats a theoretically perfect one that slows down momentum now.",
            ],
            analogy:
              "Overbuilding is the software version of constructing an airport when you needed a driveway.",
            takeaway:
              "Choose for the next meaningful stage of growth, not for a fantasy future.",
          },
        },
        diagram: {
          type: "compare",
          classic: ["Decision inputs", "Content needs", "Workflow complexity", "Team and maintenance capacity"],
          ai: ["Decision outputs", "Simple site", "Headless product", "AI-assisted workflow app"],
        },
        beforeAI:
          "Tool selection was already full of hype and overengineering pressure.",
        withAI:
          "AI adds a second layer of hype. Now you have to ask whether AI is truly part of the product, part of the workflow, or just a nice-to-have enhancement.",
        stillHard:
          "People often confuse 'possible' with 'worth integrating.' Architecture is partly the discipline of saying no.",
        caseStudy:
          "A local service business site may not need headless or AI at all. A media brand with reusable content and search workflows may benefit from both.",
        terms: ["headless", "api", "deploy", "harness"],
        mermaid: `flowchart TD
  Need[Project constraints] --> Choice{Need flexibility?}
  Choice -->|Low| SimpleSite
  Choice -->|High| HeadlessOrApp`,
        quiz: {
          question: "What should usually drive stack choice first?",
          options: ["Trends on X", "Project constraints and tradeoffs", "Whatever has the most logos"],
          correct: 1,
          explanation:
            "The right choice depends on the job, constraints, and operating realities more than popularity.",
        },
      },
    ],
  },
];

const flatLessons = courses.flatMap((module) =>
  module.lessons.map((lesson) => ({
    ...lesson,
    moduleId: module.id,
    moduleTitle: module.title,
    moduleCaption: module.caption,
  })),
);

let selectedDepth = 1;
let selectedLessonIndex = 0;
let pinnedTerm = null;
const completedLessons = new Set(JSON.parse(localStorage.getItem("arch-completed") || "[]"));
let mermaidView = "diagram";

const navEl = document.getElementById("module-nav");
const heroTitleEl = document.getElementById("hero-title");
const heroCopyEl = document.getElementById("hero-copy");
const progressCountEl = document.getElementById("progress-count");
const progressFillEl = document.getElementById("progress-fill");
const moduleLabelEl = document.getElementById("module-label");
const lessonTitleEl = document.getElementById("lesson-title");
const lessonSummaryEl = document.getElementById("lesson-summary");
const coreIdeaEl = document.getElementById("core-idea");
const analogyEl = document.getElementById("analogy");
const setupTakeawayEl = document.getElementById("setup-takeaway");
const caseStudyEl = document.getElementById("case-study");
const termChipsEl = document.getElementById("term-chips");
const mermaidPanelEl = document.getElementById("mermaid-panel");
const beforeAIEl = document.getElementById("before-ai");
const withAIEl = document.getElementById("with-ai");
const stillHardEl = document.getElementById("still-hard");
const glossaryDetailEl = document.getElementById("glossary-detail");
const quizEl = document.getElementById("quiz");
const diagramPanelEl = document.getElementById("diagram-panel");
const prevLessonButton = document.getElementById("prev-lesson");
const nextLessonButton = document.getElementById("next-lesson");
const lessonStatusEl = document.getElementById("lesson-status");
const completeLessonButton = document.getElementById("complete-lesson");
const mermaidDiagramTab = document.getElementById("mermaid-diagram-tab");
const mermaidCodeTab = document.getElementById("mermaid-code-tab");

function titleCase(termId) {
  return termId
    .split("_")
    .join(" ")
    .split(" ")
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

function injectTerms(text) {
  return text.replace(/\{([a-z_]+)\}/gi, (_, key) => {
    const term = glossary[key.toLowerCase()];
    if (!term) {
      return key;
    }
    return `<span class="term" data-term="${key.toLowerCase()}" data-short="${term.short}">${titleCase(
      key.toLowerCase(),
    )}</span>`;
  });
}

function renderParagraphs(value) {
  if (Array.isArray(value)) {
    return value.map((entry) => `<p>${injectTerms(entry)}</p>`).join("");
  }
  return `<p>${injectTerms(value)}</p>`;
}

function renderDiagram(diagram) {
  if (diagram.type === "flow") {
    const nodes = diagram.nodes
      .map(
        ([title, copy], index) => `
          <div class="diagram-node">
            <strong>${title}</strong>
            <span>${copy}</span>
          </div>
          ${index < diagram.nodes.length - 1 ? '<div class="diagram-arrow">→</div>' : ""}
        `,
      )
      .join("");

    return `
      <div class="diagram-shell">
        <div class="diagram-flow">${nodes}</div>
        <p class="diagram-note">${diagram.note || ""}</p>
      </div>
    `;
  }

  if (diagram.type === "compare") {
    return `
      <div class="diagram-shell">
        <div class="compare-grid">
          <div class="compare-card classic">
            ${diagram.classic.map((line) => `<p>${injectTerms(line)}</p>`).join("")}
          </div>
          <div class="compare-card ai">
            ${diagram.ai.map((line) => `<p>${injectTerms(line)}</p>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  return "";
}

function renderGlossaryDetail(termId) {
  const term = glossary[termId];
  if (!term) {
    glossaryDetailEl.textContent = "Select a term to keep its definition visible here.";
    return;
  }

  glossaryDetailEl.innerHTML = `
    <strong>${titleCase(termId)}</strong>
    <div class="chip-copy">
      <p>${term.full}</p>
      <p><em>Quick reminder:</em> ${term.short}</p>
    </div>
  `;
}

async function renderMermaid(lesson) {
  if (mermaidView === "code") {
    mermaidPanelEl.innerHTML = `
      <p class="side-note">This is the Mermaid syntax behind the diagram.</p>
      <pre class="mermaid-code"><code>${lesson.mermaid}</code></pre>
    `;
    return;
  }

  if (!window.mermaid) {
    mermaidPanelEl.innerHTML = `
      <p class="side-note">Loading Mermaid diagram renderer...</p>
      <pre class="mermaid-code"><code>${lesson.mermaid}</code></pre>
    `;
    return;
  }

  try {
    const renderId = `mermaid-${lesson.id}-${selectedDepth}`.replace(/[^a-z0-9-]/gi, "");
    const result = await window.mermaid.render(renderId, lesson.mermaid);
    mermaidPanelEl.innerHTML = `
      <p class="side-note">Rendered Mermaid diagram for this lesson.</p>
      <div class="mermaid-render">${result.svg}</div>
    `;
  } catch (error) {
    mermaidPanelEl.innerHTML = `
      <p class="side-note">The Mermaid chart could not render, so the source is shown instead.</p>
      <pre class="mermaid-code"><code>${lesson.mermaid}</code></pre>
    `;
  }
}

function renderQuiz(quiz) {
  quizEl.innerHTML = `
    <p>${quiz.question}</p>
    ${quiz.options
      .map(
        (option, index) => `
          <button class="quiz-option" type="button" data-index="${index}">
            ${option}
          </button>
        `,
      )
      .join("")}
    <div id="quiz-feedback" class="quiz-feedback" hidden></div>
    <button id="quiz-next" class="ghost-button quiz-next" type="button">Next Lesson</button>
  `;

  const feedback = document.getElementById("quiz-feedback");
  const quizNext = document.getElementById("quiz-next");

  quizNext.addEventListener("click", () => {
    selectedLessonIndex = Math.min(flatLessons.length - 1, selectedLessonIndex + 1);
    render();
  });

  quizEl.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      const choice = Number(button.dataset.index);
      quizEl.querySelectorAll(".quiz-option").forEach((item) => {
        item.classList.remove("is-correct", "is-wrong");
      });

      button.classList.add(choice === quiz.correct ? "is-correct" : "is-wrong");
      feedback.hidden = false;
      feedback.innerHTML =
        choice === quiz.correct
          ? `<strong>Correct.</strong> ${quiz.explanation}`
          : `<strong>Not quite.</strong> ${quiz.explanation}`;
    });
  });
}

function renderNav() {
  navEl.innerHTML = courses
    .map((module) => {
      const buttons = module.lessons
        .map((lesson) => {
          const lessonIndex = flatLessons.findIndex((entry) => entry.id === lesson.id);
          const active = lessonIndex === selectedLessonIndex ? "is-active" : "";
          const complete = completedLessons.has(lesson.id) ? "is-complete" : "";
          const status = completedLessons.has(lesson.id) ? "Done" : lessonIndex + 1;
          return `
            <button class="module-button ${active} ${complete}" type="button" data-lesson-index="${lessonIndex}">
              <div class="module-button-label">
                <strong>${lesson.title}</strong>
                <span class="module-status">${status}</span>
              </div>
              <span>${lesson.summary}</span>
            </button>
          `;
        })
        .join("");

      return `
        <section class="module-group">
          <p class="eyebrow">Module</p>
          <h3>${module.title}</h3>
          <p class="module-caption">${module.caption}</p>
          <div class="module-lessons">${buttons}</div>
        </section>
      `;
    })
    .join("");

  navEl.querySelectorAll(".module-button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedLessonIndex = Number(button.dataset.lessonIndex);
      render();
    });
  });
}

function renderTerms(termIds) {
  termChipsEl.innerHTML = termIds
    .map((termId) => {
      const active = termId === pinnedTerm ? "is-active" : "";
      return `
        <button class="term-chip ${active}" type="button" data-term-id="${termId}">
          ${titleCase(termId)}
          <small>${glossary[termId]?.short || ""}</small>
        </button>
      `;
    })
    .join("");

  termChipsEl.querySelectorAll(".term-chip").forEach((button) => {
    button.addEventListener("click", () => {
      pinnedTerm = button.dataset.termId;
      renderGlossaryDetail(pinnedTerm);
      renderTerms(termIds);
    });
  });
}

function render() {
  const lesson = flatLessons[selectedLessonIndex];
  const depth = lesson.depth[selectedDepth];
  const completedCount = completedLessons.size;
  const progressPercent = flatLessons.length === 0 ? 0 : (completedCount / flatLessons.length) * 100;

  heroTitleEl.textContent = lesson.heroTitle || "See the architecture clearly enough to make good decisions.";
  heroCopyEl.textContent =
    lesson.heroCopy ||
    "This course is designed to make terminology and tradeoffs intuitive so you can structure projects cleanly.";
  moduleLabelEl.textContent = `${lesson.moduleTitle}`;
  lessonTitleEl.textContent = lesson.title;
  lessonSummaryEl.textContent = lesson.summary;
  coreIdeaEl.innerHTML = renderParagraphs(depth.core);
  analogyEl.innerHTML = renderParagraphs(depth.analogy);
  setupTakeawayEl.innerHTML = renderParagraphs(depth.takeaway);
  caseStudyEl.innerHTML = renderParagraphs(lesson.caseStudy);
  beforeAIEl.innerHTML = renderParagraphs(lesson.beforeAI);
  withAIEl.innerHTML = renderParagraphs(lesson.withAI);
  stillHardEl.innerHTML = renderParagraphs(lesson.stillHard);
  diagramPanelEl.innerHTML = renderDiagram(lesson.diagram);
  progressCountEl.textContent = `${completedCount} / ${flatLessons.length} lessons complete`;
  progressFillEl.style.width = `${progressPercent}%`;
  lessonStatusEl.textContent = completedLessons.has(lesson.id)
    ? "This lesson is complete. Move ahead with Next or revisit any lesson from the sidebar."
    : "Finish the lesson, answer the quiz, and mark it complete so the course tracks your progress.";
  completeLessonButton.textContent = completedLessons.has(lesson.id)
    ? "Completed"
    : "Mark Lesson Complete";
  completeLessonButton.classList.toggle("is-complete", completedLessons.has(lesson.id));
  mermaidDiagramTab.classList.toggle("is-active", mermaidView === "diagram");
  mermaidCodeTab.classList.toggle("is-active", mermaidView === "code");

  renderTerms(lesson.terms);
  renderQuiz(lesson.quiz);
  renderNav();
  renderGlossaryDetail(pinnedTerm || lesson.terms[0]);
  renderMermaid(lesson);

  document.querySelectorAll(".depth-button").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.depth) === selectedDepth);
  });

  prevLessonButton.disabled = selectedLessonIndex === 0;
  nextLessonButton.disabled = selectedLessonIndex === flatLessons.length - 1;
}

document.querySelectorAll(".depth-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedDepth = Number(button.dataset.depth);
    render();
  });
});

prevLessonButton.addEventListener("click", () => {
  selectedLessonIndex = Math.max(0, selectedLessonIndex - 1);
  render();
});

nextLessonButton.addEventListener("click", () => {
  selectedLessonIndex = Math.min(flatLessons.length - 1, selectedLessonIndex + 1);
  render();
});

completeLessonButton.addEventListener("click", () => {
  completedLessons.add(flatLessons[selectedLessonIndex].id);
  localStorage.setItem("arch-completed", JSON.stringify([...completedLessons]));
  render();
});

mermaidDiagramTab.addEventListener("click", () => {
  mermaidView = "diagram";
  render();
});

mermaidCodeTab.addEventListener("click", () => {
  mermaidView = "code";
  render();
});

window.addEventListener("mermaid-ready", () => {
  render();
});

render();
