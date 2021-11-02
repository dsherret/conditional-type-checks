import { build } from "https://deno.land/x/dnt@0.2.2/mod.ts";

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  typeCheck: true,
  declaration: true,
  test: true,
  package: {
    name: "conditional-type-checks",
    version: "1.0.5",
    description: "Types for testing TypeScript types.",
    repository: {
      type: "git",
      url: "git+https://github.com/dsherret/conditional-type-checks.git",
    },
    keywords: [
      "typescript",
      "testing",
      "types",
    ],
    author: "David Sherret",
    license: "MIT",
    bugs: {
      url: "https://github.com/dsherret/conditional-type-checks/issues",
    },
    homepage: "https://github.com/dsherret/conditional-type-checks#readme",
  },
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
