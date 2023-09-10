# Fun Family Games!

This is a project developed by [Joshua](https://joshuaborseth.com) & [Jedsen](https://jedborseth.com) Borseth to create a Jackbox style game using web sockets.

## Quick Links

- [planetscale](https://app.planetscale.com/family-fun-times/family-fun-times)
- [shadcn/ui](https://ui.shadcn.com/docs/components)
- [icons](https://lucide.dev/icons/)
- [Excalidraw](https://excalidraw.com/#room=b7bfdf91a11e3aaf58d2,gmcaenueS-81IGMTX8RHUA)

### Uno

```sh
cd apps/uno
pnpm dev
```

## What's inside?

The Uno Game includes the following packages/apps:

### Apps and Packages

- `Uno`: a [Next.js](https://nextjs.org/) app using the pages directory.
- `Radix/ui` a customizable [component library](https://ui.shadcn.com/).
- `TailwindCSS` a utility class [styling solution](https://tailwindcss.com/).
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.jsons` used throughout the monorepo

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

## Turborepo Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
