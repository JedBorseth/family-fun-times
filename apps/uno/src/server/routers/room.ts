import { eq } from "drizzle-orm";
import { Room } from "../db/schema";
import { publicProcedure, router } from "../trpc";
import { nanoid } from "nanoid";
import { db } from "../db";
export const roomRouter = router({
  create: publicProcedure.mutation(async ({ ctx, input }) => {
    console.log(db);
    console.log(ctx);
    const generateUniqueCode = async (): Promise<string> => {
      const code = nanoid(4);
      const rooms = await ctx.db.select().from(Room).where(eq(Room.code, code));
      if (rooms.length > 0) {
        return await generateUniqueCode();
      }
      return code;
    };
    const code = await generateUniqueCode();
    return await ctx.db.insert(Room).values({
      code,
    });
  }),
});
