import { build, emptyDir } from "https://deno.land/x/dnt@0.26.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {},
  package: {
    name: "conditional-type-checks",
    version: Deno.args[0],
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
