import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";

const output = execFileSync("dialshift", ["--help"], { encoding: "utf8" });
await mkdir("dist", { recursive: true });
await writeFile("dist/cli-output.txt", output);
