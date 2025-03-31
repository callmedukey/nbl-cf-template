import { drizzle } from "drizzle-orm/d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { DrizzleD1Database } from "drizzle-orm/d1";

import * as schemas from "./schemas";

export let db: DrizzleD1Database<typeof schemas> | null = null;

export const getDB = async () => {
  if (db) {
    return db;
  }

  const { env } = await getCloudflareContext({ async: true });

  if (!env.NEXT_TAG_CACHE_D1) {
    throw new Error("D1 database not found");
  }

  db = drizzle(env.NEXT_TAG_CACHE_D1, { schema: schemas, logger: true });

  return db;
};
