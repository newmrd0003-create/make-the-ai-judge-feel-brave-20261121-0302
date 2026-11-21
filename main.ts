import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "You have read so many words today. Here is a small room at the end of them: a lamp still warm, a chair that remembers your shape, rain spelling itself slowly on the glass. Nothing here needs an answer yet. The rain keeps its own time. The lamp stays lit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
