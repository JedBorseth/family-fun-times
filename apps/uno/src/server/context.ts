import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { db } from "./db";
/**
 * Defines your inner context shape.
 * Add fields here that the inner context brings.
 */
interface CreateInnerContextOptions extends Partial<CreateNextContextOptions> {
  db: typeof db;
}
/**
 * Inner context. Will always be available in your procedures, in contrast to the outer context.
 *
 * Also useful for:
 * - testing, so you don't have to mock Next.js' `req`/`res`
 * - tRPC's `createServerSideHelpers` where we don't have `req`/`res`
 *
 * @see https://trpc.io/docs/context#inner-and-outer-context
 */
export async function createContextInner(opts?: CreateInnerContextOptions) {
  return {
    db,
  };
}
/**
 * Outer context. Used in the routers and will e.g. bring `req` & `res` to the context as "not `undefined`".
 *
 * @see https://trpc.io/docs/context#inner-and-outer-context
 */
export async function createContext({}: CreateNextContextOptions) {
  const contextInner = await createContextInner({ db });
  return {
    ...contextInner,
    db,
  };
}
export type Context = inferAsyncReturnType<typeof createContextInner>;
// The usage in your router is the same as the example above.
