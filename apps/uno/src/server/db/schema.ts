import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const Room = mysqlTable("rooms", {
  id: int("id").autoincrement().primaryKey().notNull(),
  name: varchar("name", { length: 255 }),
  code: varchar("code", { length: 10 }),
  createdAt: timestamp("createdAt"),
  deletedAt: timestamp("deletedAt"),
  updatedAt: timestamp("updatedAt"),
});
