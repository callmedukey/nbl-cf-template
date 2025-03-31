import { Role } from "@/types/enums";

import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text()
    .$defaultFn(() => crypto.randomUUID())
    .unique(),
  email: text().unique(),
  name: text(),
  password: text(),
  salt: text(),
  role: text().$defaultFn(() => Role.User),
  createdAt: text().$defaultFn(() => new Date().toISOString()),
  updatedAt: text().$onUpdateFn(() => new Date().toISOString()),
});
