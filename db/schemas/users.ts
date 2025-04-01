import { Role } from "@/types/enums";

import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text()
    .$defaultFn(() => crypto.randomUUID())
    .unique(),
  email: text().unique().notNull(),
  name: text().notNull(),
  password: text().notNull(),
  salt: text().notNull(),
  role: text()
    .notNull()
    .$defaultFn(() => Role.User),
  createdAt: text().$defaultFn(() => new Date().toISOString()),
  updatedAt: text().$onUpdateFn(() => new Date().toISOString()),
});
