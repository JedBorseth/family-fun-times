import { CARD_TYPES } from "./../../lib/constants/cardTypes";
import { NUMBERS } from "./../../lib/constants/nums";
import { COLORS } from "./../../lib/constants/colors";
import { relations, sql } from "drizzle-orm";
import { index, int, mysqlEnum, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const Room = mysqlTable(
  "Rooms",
  {
    id: int("id").autoincrement().primaryKey().notNull(),
    code: varchar("code", { length: 4 }).unique(),
    createdAt: timestamp("createdAt")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    deletedAt: timestamp("deletedAt"),
  },
  (table) => {
    return {
      code: index("code").on(table.code),
      id: index("id").on(table.id),
    };
  }
);

export const Player = mysqlTable(
  "Players",
  {
    id: int("id").autoincrement().primaryKey().notNull(),
    name: varchar("name", { length: 255 }),
    roomCode: varchar("roomCode", { length: 4 }).notNull(),
    createdAt: timestamp("createdAt")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    deletedAt: timestamp("deletedAt"),
  },
  (table) => {
    return {
      roomCode: index("roomCode").on(table.roomCode),
      id: index("id").on(table.id),
    };
  }
);

export const Card = mysqlTable("Cards", {
  id: int("id").autoincrement().primaryKey().notNull(),
  color: mysqlEnum("color", COLORS),
  type: mysqlEnum("type", CARD_TYPES),
  numberValue: mysqlEnum("numberValue", NUMBERS),
  createdAt: timestamp("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  deletedAt: timestamp("deletedAt"),
});

export const roomRelations = relations(Room, ({ many }) => ({
  players: many(Player),
}));

export const playerRelations = relations(Player, ({ one }) => ({
  room: one(Room, {
    fields: [Player.roomCode],
    references: [Room.code],
  }),
}));
