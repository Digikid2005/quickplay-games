"use client";

import { useState } from "react";

const games = [
  {
    id: 1,
    name: "Snake Classic",
    emoji: "🐍",
    category: "Arcade",
    description: "Guide the snake, eat the food, don't hit the walls. A timeless classic reborn.",
    color: "from-green-500/20 to-emerald-900/40",
    border: "hover:border-green-500/60",
    glow: "hover:shadow-green-500/20",
    badge: "Classic",
  },
  {
    id: 2,
    name: "2048",
    emoji: "🔢",
    category: "Puzzle",
    description: "Slide and merge tiles to reach the legendary 2048 square. Simple rules, deep strategy.",
    color: "from-yellow-500/20 to-amber-900/40",
    border: "hover:border-yellow-400/60",
    glow: "hover:shadow-yellow-500/20",
    badge: "Puzzle",
  },
  {
    id: 3,
    name: "Flappy Bird",
    emoji: "🐦",
    category: "Arcade",
    description: "Tap to fly through the gaps. One wrong move and it's game over. Can you beat your high score?",
    color: "from-sky-500/20 to-blue-900/40",
    border: "hover:border-sky-400/60",
    glow: "hover:shadow-sky-500/20",
    badge: "Hard",
  },
  {
    id: 4,
    name: "Tic Tac Toe",
    emoji: "❌",
    category: "Strategy",
    description: "Challenge the AI across three difficulty levels. Prove you can outsmart the machine.",
    color: "from-purple-500/20 to-violet-900/40",
    border: "hover:border-purple-400/60",
    glow: "hover:shadow-purple-500/20",
    badge: "VS AI",
  },
  {
    id: 5,
    name: "Memory Match",
    emoji: "🃏",
    category: "Memory",
    description: "Flip cards and find the matching pairs. Train your brain and beat the clock.",
    color: "from-pink-500/20 to-rose-900/40",
    border: "hover:border-pink-400/60",
    glow: "hover:shadow-pink-500/20",
    badge: "Brain",
  },
  {
    id: 6,
    name: "Whack-a-Mole",
    emoji: "🔨",
    category: "Arcade",
    description: "Moles are popping up everywhere! Smash as many as you can before time runs out.",
    color: "from-orange-500/20 to-red-900/40",
    border: "hover:border-orange-400/60",
    glow: "hover:shadow-orange-500/20",
    badge: "Fun",
  },
  {
    id: 7,
    name: "Color Flood",
    emoji: "🎨",
    category: "Puzzle",
    description: "Flood the board with one color. Conquer the grid in the fewest moves possible.",
    color: "from-cyan-500/20 to-teal-900/40",
    border: "hover:border-cyan-400/60",
    glow: "hover:shadow-cyan-500/20",
    badge: "Strategy",
  },
  {
    id: 8,
    name: "Minesweeper",
    emoji: "💣",
    category: "Puzzle",
    description: "Clear the minefield using logic alone. One wrong click and everything explodes.",
    color: "from-slate-500/20 to-gray-900/40",
    border: "hover:border-slate-400/60",
    glow: "hover:shadow-slate-500/20",
    badge: "Classic",
  },
  {
    id: 9,
    name: "Brick Breaker",
    emoji: "🧱",
    category: "Arcade",
    description: "Launch the ball and shatter every brick. Power-ups and combos make every level explosive.",
    color: "from-red-500/20 to-orange-900/40",
    border: "hover:border-red-400/60",
    glow: "hover:shadow-red-500/20",
    badge: "Action",
  },
  {
    id: 10,
    name: "Asteroid Shooter",
    emoji: "🚀",
    category: "Shooter",
    description: "Blast through waves of asteroids in deep space. Survive longer. Score higher.",
    color: "from-indigo-500/20 to-blue-950/40",
    border: "hover:border-indigo-400/60",
    glow: "hover:shadow-indigo-500/20",
    badge: "Space",
  },
  {
    id: 11,
    name: "Word Scramble",
    emoji: "📝",
    category: "Word",
    description: "Unscramble the letters before time runs out. Big words, bigger points.",
    color: "from-lime-500/20 to-green-900/40",
    border: "hover:border-lime-400/60",
    glow: "hover:shadow-lime-500/20",
    badge: "Words",
  },
  {
    id: 12,
    name: "Tower Defense",
    emoji: "🏰",
    category: "Strategy",
    description: "Place your towers strategically and stop the enemy waves from breaching your base.",
    color: "from-amber-500/20 to-yellow-900/40",
    border: "hover:border-amber-400/60",
    glow: "hover:shadow-amber-500/20",
    badge: "Strategy",
  },
  {
    id: 13,
    name: "Endless Runner",
    emoji: "🏃",
    category: "Arcade",
    description: "Run, jump, and dodge obstacles forever. How far can you go before the world catches up?",
    color: "from-fuchsia-500/20 to-purple-900/40",
    border: "hover:border-fuchsia-400/60",
    glow: "hover:shadow-fuchsia-500/20",
    badge: "Endless",
  },
  {
    id: 14,
    name: "Puzzle Slide",
    emoji: "🧩",
    category: "Puzzle",
    description: "Slide the tiles into order. Sounds easy — it isn't. The A* solver won't save you here.",
    color: "from-teal-500/20 to-cyan-900/40",
    border: "hover:border-teal-400/60",
    glow: "hover:shadow-teal-500/20",
    badge: "Logic",
  },
  {
    id: 15,
    name: "Simon Says",
    emoji: "🎵",
    category: "Memory",
    description: "Watch the pattern. Repeat it. Each round adds one more. How long is your memory?",
    color: "from-rose-500/20 to-pink-900/40",
    border: "hover:border-rose-400/60",
    glow: "hover:shadow-rose-500/20",
    badge: "Memory",
  },
  {
    id: 16,
    name: "Bubble Pop",
    emoji: "🫧",
    category: "Arcade",
    description: "Aim and shoot bubbles to create color matches. Chain combos for insane scores.",
    color: "from-blue-500/20 to-indigo-900/40",
    border: "hover:border-blue-400/60",
    glow: "hover:shadow-blue-500/20",
    badge: "Casual",
  },
  {
    id: 17,
    name: "Chess",
    emoji: "♟️",
    category: "Strategy",
    description: "Play the royal game against a smart AI opponent. Three difficulty levels await.",
    color: "from-zinc-500/20 to-stone-900/40",
    border: "hover:border-zinc-400/60",
    glow: "hover:shadow-zinc-500/20",
    badge: "VS AI",
  },
  {
    id: 18,
    name: "Sudoku",
    emoji: "🔣",
    category: "Puzzle",
    description: "Fill the grid with numbers 1–9. Easy, medium, or expert — every puzzle is unique.",
    color: "from-violet-500/20 to-purple-950/40",
    border: "hover:border-violet-400/60",
    glow: "hover:shadow-violet-500/20",
    badge: "Numbers",
  },
  {
    id: 19,
    name: "Platform Jumper",
    emoji: "🦘",
    category: "Platformer",
    description: "Jump across platforms, collect coins, dodge enemies. A retro platformer done right.",
    color: "from-emerald-500/20 to-green-950/40",
    border: "hover:border-emerald-400/60",
    glow: "hover:shadow-emerald-500/20",
    badge: "Adventure",
  },
  {
    id: 20,
    name: "Card Battle RPG",
    emoji: "⚔️",
    category: "RPG",
    description: "Build your deck, cast spells, defeat bosses. A mini RPG packed into card battles.",
    color: "from-red-600/20 to-rose-950/40",
    border: "hover:border-red-500/60",
    glow: "hover:shadow-red-600/20",
    badge: "RPG",
  },
  {
    id: 21,
    name: "Space Invaders+",
    emoji: "👾",
    category: "Shooter",
    description: "The alien armada is back and angrier than ever. Shoot, dodge, and survive the onslaught.",
    color: "from-green-600/20 to-emerald-950/40",
    border: "hover:border-green-500/60",
    glow: "hover:shadow-green-600/20",
    badge: "Classic",
  },
  {
    id: 22,
    name: "Tetris Deluxe",
    emoji: "🟦",
    category: "Puzzle",
    description: "Drop, rotate, and stack tetrominoes. Clear lines before the stack reaches the top.",
    color: "from-cyan-600/20 to-blue-950/40",
    border: "hover:border-cyan-500/60",
    glow: "hover:shadow-cyan-600/20",
    badge: "Classic",
  },
  {
    id: 23,
    name: "Dungeon Crawler",
    emoji: "🗡️",
    category: "RPG",
    description: "Explore procedurally generated dungeons. Every run is different. Every death is final.",
    color: "from-stone-600/20 to-neutral-950/40",
    border: "hover:border-stone-400/60",
    glow: "hover:shadow-stone-600/20",
    badge: "Roguelike",
  },
  {
    id: 24,
    name: "Top-Down Racing",
    emoji: "🏎️",
    category: "Racing",
    description: "Burn rubber on tight circuits. Drift around corners and leave your rivals in the dust.",
    color: "from-yellow-600/20 to-orange-950/40",
    border: "hover:border-yellow-500/60",
    glow: "hover:shadow-yellow-600/20",
    badge: "Racing",
  },
  {
    id: 25,
    name: "Multiplayer Quiz",
    emoji: "🧠",
    category: "Trivia",
    description: "Challenge friends in real-time trivia battles. 10 categories. One champion.",
    color: "from-purple-600/20 to-fuchsia-950/40",
    border: "hover:border-purple-500/60",
    glow: "hover:shadow-purple-600/20",
    badge: "Multiplayer",
  },
];

const categories = ["All", "Arcade", "Puzzle", "Strategy", "Memory", "Shooter", "Word", "RPG", "Platformer", "Racing", "Trivia"];

const stats = [
  { value: "25", label: "Free Games" },
  { value: "0", label: "Downloads" },
  { value: "∞", label: "Replays" },
  { value: "100%", label: "Browser" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = games.filter((g) => {
    const matchCat = activeCategory === "All" || g.category === activeCategory;
    const matchSearch =
      g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="min-h-screen bg-[#080b12] text-white font-sans">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#080b12]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-black text-xl tracking-tight">
              Quick<span className="text-cyan-400">Play</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-white/50 font-medium">
            <a href="#games" className="hover:text-white transition-colors">Games</a>
            <a href="#" className="hover:text-white transition-colors">Leaderboard</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
          </div>
          <button className="text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-1.5 rounded-lg transition-colors">
            Sign In
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">

        {/* background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* glow orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">

          {/* pill badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/60 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            25 free browser games — no download, no login required
          </div>

          {/* headline */}
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-6">
            Play Instantly.{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500">
                No BS.
              </span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            25 hand-crafted casual games that live in your browser. Click play,
            start gaming. It really is that simple.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <a
              href="#games"
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-black text-base px-8 py-3.5 rounded-xl transition-all duration-150 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Browse All Games →
            </a>
            <a
              href="#"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-150"
            >
              🎲 Random Game
            </a>
          </div>

          {/* stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 max-w-2xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#080b12] px-6 py-5 text-center">
                <div className="text-3xl font-black text-cyan-400 leading-none mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-white/30 uppercase tracking-widest font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED BANNER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/60 via-[#0d0f1a] to-cyan-900/40 border border-white/10 p-8 sm:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em] mb-2">🔥 Featured Today</div>
              <h2 className="text-3xl sm:text-4xl font-black mb-2">Dungeon Crawler</h2>
              <p className="text-white/50 max-w-md text-sm leading-relaxed">
                Our most ambitious game yet. Procedurally generated dungeons, permadeath, and loot drops. No two runs are the same.
              </p>
            </div>
            <button className="shrink-0 bg-white text-black font-black text-sm px-8 py-4 rounded-xl hover:bg-cyan-400 transition-all duration-200 hover:scale-105 shadow-2xl">
              🗡️ Play Now
            </button>
          </div>
        </div>
      </section>

      {/* ── GAMES SECTION ── */}
      <section id="games" className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">

        {/* section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em] mb-1"></p>
            <h2 className="text-3xl sm:text-4xl font-black">All Games</h2>
          </div>
          {/* search */}
          <div className="relative w-full sm:w-72">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all"
            />
          </div>
        </div>

        {/* category filters */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold px-4 py-2 rounded-lg border transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-cyan-500 border-cyan-500 text-black"
                  : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* results count */}
        <p className="text-xs text-white/25 font-medium mb-6 uppercase tracking-widest">
          {filtered.length} game{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* game grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-white/20">
            <div className="text-6xl mb-4">🕹️</div>
            <p className="text-lg font-bold">No games found</p>
            <p className="text-sm mt-1">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((game) => (
              <div
                key={game.id}
                onMouseEnter={() => setHoveredId(game.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  group relative flex flex-col rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
                  bg-gradient-to-br ${game.color}
                  border-white/8 ${game.border}
                  hover:shadow-xl ${game.glow}
                  hover:-translate-y-1
                `}
              >
                {/* card top */}
                <div className="p-5 pb-3 flex items-start justify-between">
                  <div className="text-4xl leading-none">{game.emoji}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 border border-white/10 text-white/60 px-2 py-0.5 rounded-md">
                    {game.badge}
                  </span>
                </div>

                {/* card body */}
                <div className="px-5 pb-3 flex-1">
                  <h3 className="font-black text-base mb-1.5 text-white group-hover:text-cyan-300 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-xs text-white/45 leading-relaxed line-clamp-3">
                    {game.description}
                  </p>
                </div>

                {/* card footer */}
                <div className="px-5 pb-5 pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] text-white/25 font-bold uppercase tracking-widest">
                      {game.category}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i < (game.id % 3) + 1 ? "bg-cyan-400" : "bg-white/15"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-white/10 hover:bg-cyan-500 border border-white/10 hover:border-cyan-500 text-white hover:text-black font-black text-xs py-2.5 rounded-xl transition-all duration-200 group-hover:shadow-md">
                    {hoveredId === game.id ? "▶  Let's Go!" : "Play Now"}
                  </button>
                </div>

                {/* shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <div className="text-5xl mb-5">🎮</div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            New games drop every week.
          </h2>
          <p className="text-white/40 mb-8 text-base leading-relaxed">
            No accounts. No spam. Just games.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-10 py-4 rounded-xl text-base transition-all duration-150 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
            Start Playing Free →
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <div className="flex items-center gap-2 font-black text-white/40">
            <span>⚡</span>
            <span>QuickPlay Games</span>
          </div>
          <p>Built with Next.js · Deployed on Vercel · 25 free browser games</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}