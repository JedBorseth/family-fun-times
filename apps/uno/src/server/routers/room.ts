import { eq } from "drizzle-orm";
import { Room } from "../db/schema";
import { procedure, router } from "../trpc";
import { nanoid } from "nanoid";
export const roomRouter = router({
  create: procedure.mutation(async ({ ctx }) => {
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
