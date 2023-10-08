import { eq } from "drizzle-orm";
import { Room } from "../db/schema";
import { procedure, router } from "../trpc";
import { fourRandomLetters } from "../helpers/roomCodeGen";

export const roomRouter = router({
  create: procedure.mutation(async ({ ctx }) => {
    const generateUniqueCode = async (): Promise<string> => {
      const code = fourRandomLetters();
      const rooms = await ctx.db.select().from(Room).where(eq(Room.code, code));
      if (rooms.length > 0) {
        return await generateUniqueCode();
      }
      return code;
    };
    const code = await generateUniqueCode();

    await ctx.db.insert(Room).values({
      code,
    });

    return code;
  }),
});
