import { sql } from "drizzle-orm";
import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const Room = mysqlTable("rooms", {
  id: int("id").autoincrement().primaryKey().notNull(),
  code: varchar("code", { length: 10 }),
  createdAt: timestamp("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  deletedAt: timestamp("deletedAt"),
});
