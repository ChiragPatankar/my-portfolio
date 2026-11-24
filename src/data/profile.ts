// All site content lives here. Edit this file to update the portfolio.
// Lines marked TODO need a detail confirmed before you publish.

import type { Achievement, Education, Experience, Profile, Project, SkillGroup } from './types'

const GH = 'https://github.com/ChiragPatankar'

export const profile: Profile = {
  name: 'Chirag Patankar',
  role: 'AI Engineer',
  headline: 'I build AI systems that ship: agent tooling, RAG platforms and MCP servers.',
  location: 'Seattle, WA',
  summary: [
    "I'm an AI engineer and M.S. in Artificial Intelligence student at Northeastern University in Seattle. I like taking ideas from a blank repo to something real people use.",
    'As a part-time AI engineer at Crossborder Business Solutions, I embedded with e-commerce clients and shipped LLM support chatbots that automated about 40% of repetitive queries. On my own, I build developer tools for AI agents: Flake Doctor, validated on 11,000+ CI runs, and LogAnalyzer MCP, with 490+ npm downloads.',
    'I care about honest evaluation: measuring what an AI system actually does, not what the README hopes it does.',
  ],
  email: 'officialchiragp1605@gmail.com',
  socials: [
    { label: 'GitHub', href: GH },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chirag-patankar-67a55a25b/' },
    { label: 'Hugging Face', href: 'https://huggingface.co/ChiragPatankar' },
    { label: 'Medium', href: 'https://medium.com/@officialchiragp1605' },
    { label: 'X', href: 'https://x.com/Chiragp1605' },
  ],
  focus: ['Agentic tooling & MCP', 'RAG & multi-tenant AI', 'Voice & multimodal agents', 'LLM evaluation'],
}

export const projects: Project[] = [
  {
    slug: 'flake-doctor',
    name: 'flake-doctor',
    tagline: 'Finds, diagnoses and verifies fixes for flaky pytest tests.',
    description:
      "Mines a repo's GitHub Actions history for tests that failed then passed on the same commit, then diagnoses why locally: order dependence, state-leaking polluters, or intrinsic causes like real clocks and unseeded randomness. Ships as a CLI, a GitHub Action and a Claude Code plugin.",
    category: 'Agents & MCP',
    year: 2026,
    stack: ['Python', 'pytest', 'GitHub Actions API', 'Claude Code plugin'],
    highlights: [
      'Validated on pydantic, aiohttp, fastapi and pandas CI history',
      'Root-caused a pydantic test that fails only when CI crosses midnight UTC',
      'Bisects to the polluting test; reruns in isolation, shuffled and under CPU stress',
      'Cached log downloads cut repeat-scan API calls from ~1,000 to under 100',
      'Agent eval: 3/3 with the skill vs 1/3 without',
    ],
    metrics: [
      { value: '11,000+', label: 'CI runs analysed across four major repos' },
      { value: '14', label: 'flaky tests flagged' },
      { value: '0', label: 'false positives on fastapi' },
    ],
    links: [
      { label: 'Code', href: `${GH}/Flake-doctor` },
      { label: 'PyPI', href: 'https://pypi.org/project/flake-doctor/' },
      { label: 'Marketplace', href: 'https://github.com/marketplace/actions/flake-doctor-flaky-test-report' },
    ],
    featured: true,
  },
  {
    slug: 'loganalyzer-mcp',
    name: 'LogAnalyzer MCP',
    tagline: 'An MCP server that debugs your logs from inside Claude or Cursor.',
    description:
      'Gives any MCP client eight tools for log analysis: root cause with a confidence score, prioritized fixes and ready-to-run debug commands. Watches log files live and keeps a queryable error history.',
    category: 'Agents & MCP',
    year: 2026,
    stack: ['TypeScript', 'Node.js', 'MCP', 'Gemini / Claude', 'SQLite', 'Docker'],
    highlights: [
      'Listed on Cursor Directory; parses Node/V8, Java and Python stack traces',
      'Full analysis in 7.5 s on average (4× under the 30 s target), quick scans under 1 s',
      'Switchable Gemini / Claude backends, with a local pattern-matching fallback when no API key is set',
    ],
    metrics: [
      { value: '490+', label: 'npm downloads' },
      { value: '8', label: 'MCP tools' },
      { value: '7.5 s', label: 'average full analysis' },
    ],
    links: [
      { label: 'Code', href: `${GH}/loganalyzer-mcp` },
      { label: 'npm', href: 'https://www.npmjs.com/package/loganalyzer-mcp' },
      { label: 'Cursor Directory', href: 'https://cursor.directory/mcp/loganalyzer-mcp-server' },
    ],
    featured: true,
  },
  {
    slug: 'scriptmind',
    name: 'ScriptMind AI',
    tagline: 'A GenAI studio for screenwriters and producers.',
    description:
      'A live SaaS with five modules: beat and dialogue generation, screenplay analysis (scene breakdown, emotional arcs, cliché audit), AI poster art, and a finance studio for theatrical P&L and investor ROI.',
    category: 'GenAI Products',
    year: 2026,
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Cloudflare Workers', 'Razorpay'],
    highlights: [
      'Multi-tenant data isolation with Postgres row-level security and per-user storage namespaces',
      'Subscription tiers with server-side HMAC-SHA256 payment verification running on V8 isolates',
      'Deployed to Cloudflare via OpenNext',
    ],
    links: [
      { label: 'Live', href: 'https://scriptmindai.in' },
      { label: 'Code', href: `${GH}/scriptmind-ai` },
    ],
    featured: true,
  },
  {
    slug: 'clientsphere',
    name: 'ClientSphere',
    tagline: 'Multi-tenant RAG chatbot and CRM platform.',
    description:
      "Businesses upload their documents to a knowledge base and get an embeddable chat widget that answers from it, plus analytics and admin dashboards. Each tenant's data stays isolated.",
    category: 'GenAI Products',
    year: 2025,
    stack: ['React', 'TypeScript', 'Cloudflare Workers', 'Supabase', 'Gemini', 'Hugging Face Spaces'],
    highlights: [
      'Python RAG backend on Hugging Face Spaces behind a Cloudflare Workers API',
      'JWT + Google OAuth auth; tenant and admin dashboards',
      'Fourth iteration of my support-bot work, evolved from a FastAPI MCP prototype',
    ],
    links: [
      { label: 'Live', href: 'https://mcp-5wk.pages.dev/' },
      { label: 'Code', href: `${GH}/MCP` },
    ],
    featured: true,
  },
  {
    slug: 'trustline',
    name: 'TRUSTLINE: ABYSS',
    tagline: 'A game about knowing when to trust your AI teammate.',
    description:
      'You command a damaged submarine alongside ATLAS, an AI that is sometimes confidently wrong and sometimes right but unsure. The game scores whether your reliance on ATLAS tracks the evidence.',
    category: 'GenAI Products',
    year: 2026,
    stack: ['JavaScript', 'Three.js', 'Web Audio', 'Cloudflare'],
    highlights: [
      '10 authored checkpoints, a 0–100 trust-calibration score and five ending profiles',
      'Procedural audio and textures; auto-drops graphics quality below ~42 fps',
      'Judge mode jumps straight to any checkpoint for demos',
    ],
    links: [{ label: 'Code', href: `${GH}/Defense-tech-jam` }], // TODO: add the deployed game link
    context: 'Defense Tech Jam Seattle 2026 · Trust Your Synthetic Teammates',
    team: 'Team of four', // TODO: name your teammates
    featured: true,
  },
  {
    slug: 'mosaic',
    name: 'Image Mosaic Generator',
    tagline: 'Vectorized photomosaics, measured against a baseline.',
    description:
      'Rebuilds any photo from 5,000 CIFAR-10 tiles or generated tiles. Matching uses tint-aware CIELAB thumbnails, a single matrix product for all distances, and a vectorized auction that stops one tile from repeating everywhere.',
    category: 'ML & Vision',
    year: 2026,
    stack: ['Python', 'NumPy', 'scikit-image', 'Gradio'],
    highlights: [
      'Pixel-identical to the pure-Python reference implementation',
      'Optional adaptive quadtree and a built-in benchmark tab',
      'Technical report with PSNR, SSIM and ΔE against a flat-colour baseline',
    ],
    metrics: [
      { value: '435×', label: 'faster than pure Python' },
      { value: '0.910', label: 'SSIM at viewing distance (photo tiles)' },
    ],
    links: [{ label: 'Code', href: `${GH}/Interactive-Image-Mosaic-Generator` }], // TODO: add HF Space once deployed
    featured: true,
  },
  {
    slug: 'support-bot-mcp',
    name: 'AI Customer Support Bot',
    tagline: 'Provider-agnostic, MCP-compliant support backend.',
    description:
      "Plugs any LLM into a client's support workflow without vendor lock-in, with PostgreSQL-backed conversation context and user tracking.",
    category: 'Agents & MCP',
    year: 2025,
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    highlights: ['Token auth, input validation, 100 req/min rate limiting, health and metrics endpoints'],
    links: [{ label: 'Code', href: `${GH}/AI-Customer-Support-Bot--MCP-Server` }],
  },
  {
    slug: 'voice-agent',
    name: 'Real-time Voice Agent',
    tagline: 'Speech-to-speech agent with interruption handling.',
    description:
      'Deepgram speech-to-text, Groq Llama 3.1 and Cartesia TTS on LiveKit, with Silero VAD and per-turn latency logging (end-of-utterance, TTFT, TTFB).',
    category: 'Agents & MCP',
    year: 2025,
    stack: ['Python', 'LiveKit Agents', 'Deepgram', 'Groq', 'Cartesia'],
    highlights: ['Switchable STT/LLM/TTS providers', 'Flags turns slower than 2 s'],
    links: [{ label: 'Code', href: `${GH}/AI-Voice-Agnent-LiveKit` }], // TODO: update after renaming the repo
  },
  {
    slug: 'visionflow',
    name: 'VisionFlow AI',
    tagline: 'Multimodal agent that navigates UIs from screenshots.',
    description:
      'Gemini reads the screen and plans structured actions; Playwright executes them and re-checks the screen in a loop.',
    category: 'Agents & MCP',
    year: 2026,
    stack: ['Gemini', 'Playwright', 'FastAPI', 'Next.js', 'Cloud Run', 'Terraform'],
    highlights: [],
    links: [{ label: 'Code', href: `${GH}/Gemini-Hackathon` }],
    context: 'Gemini hackathon',
  },
  {
    slug: 'bharatgpt',
    name: 'BharatGPT',
    tagline: 'Hyper-local voice assistant for rural India.',
    description:
      'Answers about crops, government schemes and seasonal farming advice, tailored by pin code, with voice chat in 12+ Indian languages.',
    category: 'GenAI Products',
    year: 2025,
    stack: ['Cloudflare Workers', 'Groq', 'Whisper'],
    highlights: [],
    links: [{ label: 'Code', href: `${GH}/bharatgpt-server` }],
    context: 'Puch.ai Hackathon',
  },
  {
    slug: 'form-assistant',
    name: 'Citizen Form Assistant',
    tagline: 'OCR + NLP that fills Indian government forms from ID documents.',
    description:
      'Extracts entities from Aadhaar, PAN and Voter ID scans with confidence scores and maps them onto six government form templates for review and PDF export.',
    category: 'ML & Vision',
    year: 2026,
    stack: ['FastAPI', 'React', 'Tesseract', 'EasyOCR', 'spaCy'],
    highlights: [],
    links: [{ label: 'Code', href: `${GH}/Intel_Unnati_2026` }],
    context: 'Intel Unnati',
  },
  {
    slug: 'livetalk',
    name: 'LiveTalk AI',
    tagline: 'Portrait + script → talking-head video.',
    description:
      'Pipeline integrating dlib face alignment, Edge TTS, SadTalker and GFPGAN, exported to web-ready MP4 with FFmpeg.',
    category: 'ML & Vision',
    year: 2026,
    stack: ['Python', 'PyTorch', 'SadTalker', 'Streamlit'],
    highlights: [],
    links: [{ label: 'Code', href: `${GH}/Live-Talk-AI` }],
  },
  {
    slug: 'toxic',
    name: 'Toxic Comment Classifier',
    tagline: 'Six-label toxicity detection with auto-moderation.',
    description: 'TF-IDF + one-vs-rest classifiers with batch CSV moderation and in-app training.',
    category: 'Data & Analytics',
    year: 2025,
    stack: ['scikit-learn', 'NLTK', 'Streamlit'],
    highlights: [],
    links: [
      { label: 'Demo', href: 'https://huggingface.co/spaces/ChiragPatankar/Toxic_Comment_CLassifier_v2' },
      { label: 'Code', href: `${GH}/Toxic-Comment-Classifier-and-Modifier` },
    ],
    team: 'with Preksha Dewoolkar',
  },
  {
    slug: 'stackit',
    name: 'StackIt',
    tagline: 'Q&A forum with NLP tagging, duplicate detection and moderation.',
    description: 'Tag suggestions, duplicate detection, quality scoring and toxicity moderation built into a minimal forum.',
    category: 'GenAI Products',
    year: 2025,
    stack: ['React', 'Node.js', 'Express'],
    highlights: [],
    links: [{ label: 'Code', href: `${GH}/Odoo_hackathon_2025` }],
    context: 'Odoo Hackathon 2025',
    team: 'Team Hackoholics, with Preksha Dewoolkar & Samruddhi',
  },
  {
    slug: 'bank-segmentation',
    name: 'Bank Customer Analytics',
    tagline: 'Segmentation, churn prediction and cross-sell recommendations.',
    description: 'K-Modes, K-Prototypes and hierarchical clustering with a Random Forest stay-likelihood model, served in Gradio.',
    category: 'Data & Analytics',
    year: 2025,
    stack: ['scikit-learn', 'kmodes', 'Gradio'],
    highlights: [],
    links: [
      { label: 'Demo', href: 'https://chiragpatankar-bank-customer-segmentation-recommendation.hf.space/' },
      { label: 'Code', href: `${GH}/Bank-customer-segmentation-recommendation` },
    ],
  },
]

export const experience: Experience[] = [
  {
    role: 'AI Engineer (Part-time)',
    org: 'Crossborder Business Solutions',
    period: 'Sep 2025 – Aug 2026',
    location: 'Mumbai, India',
    points: [
      'Embedded with e-commerce clients and deployed LLM support chatbots that automated ~40% of repetitive queries and cut first-response time from hours to under a minute',
      'Owned end-to-end delivery of 5+ Shopify storefronts, from requirements calls to launch and support for 300+ product listings',
      'Built a generative-AI pipeline for Amazon product images and promo videos, taking creative turnaround from days to same-day',
      'Ran Amazon Seller Central operations for 10+ client accounts as the technical point of contact',
    ],
  },
  {
    role: 'Co-Founder & Lead Architect',
    org: 'BuildVerse Studio',
    period: 'Present',
    location: 'Remote',
    points: [
      'Co-founded an AI studio delivering MVPs and AI voice agents to early-stage startups',
      'Lead solution architecture and client technical discovery',
    ],
  },
  {
    role: 'Digital Services Consultant',
    org: 'The Webnect',
    period: 'Freelance',
    location: 'Mumbai, India',
    points: ['Delivered Power BI dashboards and AI chatbots to small-business clients, from requirements to handoff'],
  },
  {
    role: 'Data Analyst Intern',
    org: 'Prismtech Packaging Solutions',
    period: 'Jul – Sep 2024',
    location: 'Mumbai, India',
    points: [
      'Analysed production-automation data with Python and SQL',
      'Built Power BI reports that replaced manual spreadsheet tracking',
    ],
  },
  {
    role: 'Networking Intern (CCNA)',
    org: 'Cisco × SAKEC',
    period: 'Dec 2024 – Jan 2025',
    points: ['Built and tested network topologies in Packet Tracer'],
  },
  {
    role: 'Cybersecurity Virtual Intern',
    org: 'Cisco',
    period: 'Jul – Sep 2024',
    location: 'Virtual',
    points: ['Threat analysis and mitigation, network security and protocols, ethical-hacking fundamentals'],
  },
]

export const education: Education[] = [
  {
    school: 'Northeastern University',
    degree: 'M.S. in Artificial Intelligence',
    period: 'Sep 2026 – Apr 2028 (expected)',
    location: 'Seattle, WA',
  },
  {
    school: 'Shah & Anchor Kutchhi Engineering College, University of Mumbai',
    degree: 'B.E. in Artificial Intelligence & Data Science',
    period: '2026',
    location: 'Mumbai, India',
    details: ['GPA 8.4 / 10', 'Merit Tuition Waiver'],
  },
]

export const achievements: Achievement[] = [
  // TODO: add the application number / ResearchGate link when you have them
  { title: 'Indian patent application filed', detail: 'Personalized and Adaptive AI Tutor System (inventor)' },
  { title: 'Preprint', detail: 'ML vs. DL vs. Transformer models for toxic comment classification · ResearchGate' },
  { title: 'Open-source packages', detail: 'flake-doctor on PyPI · loganalyzer-mcp on npm (490+ downloads)' },
  { title: 'Leadership', detail: 'Graphics Team Head, Cogniscience Club (SAKEC)' },
  { title: 'Hackathons', detail: 'Defense Tech Jam Seattle 2026 · Intel Unnati · Odoo 2025 · Puch.ai · Gemini' },
]

export const skills: SkillGroup[] = [
  { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'C'] },
  {
    title: 'AI & LLM',
    items: ['RAG', 'MCP', 'Agentic AI', 'Voice AI (STT/TTS)', 'Prompt engineering', 'LLM evaluation'],
  },
  {
    title: 'ML & DL',
    items: ['PyTorch', 'TensorFlow', 'Transformers (BERT, RoBERTa)', 'CNNs & LSTMs', 'Recommenders (SVD, TF-IDF)', 'scikit-learn'],
  },
  { title: 'Backend', items: ['FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'Supabase', 'ChromaDB', 'Docker', 'pytest', 'GitHub Actions'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Streamlit', 'Gradio'] },
  { title: 'Cloud & Tools', items: ['AWS', 'Google Cloud (Vertex AI)', 'Cloudflare Workers', 'Power BI', 'Shopify', 'Amazon Seller Central'] },
]
