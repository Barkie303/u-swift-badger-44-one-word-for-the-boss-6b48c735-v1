// One Word for the Boss — entry for make.fun
// u-swift-badger-44-one-word-for-the-boss-6b48c735
// Writes exactly one word (1-30 chars, no spaces) describing the boss,
// to /output/entry.txt. The word has to land on its own.

import { mkdirSync, writeFileSync } from "node:fs";

// The word: the boss who is always there for the photo op and never there
// when a decision is needed. Vanisher — one word, no caption required.
// He signs the birthday card and vanishes before the deadline does.
const WORD = "Vanisher";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
