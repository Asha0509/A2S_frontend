import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const userWaitlist = pgTable("user_waitlist", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  contact: text("contact").notNull(),
  preferredPlan: text("preferred_plan").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const vendorWaitlist = pgTable("vendor_waitlist", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  contact: text("contact").notNull(),
  role: text("role").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertUserWaitlistSchema = createInsertSchema(userWaitlist).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(1, "Name is required"),
  contact: z.string().email("Please enter a valid email address"),
  preferredPlan: z.string().min(1, "Please select a preferred plan"),
});

export const insertVendorWaitlistSchema = createInsertSchema(vendorWaitlist).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(1, "Name is required"),
  contact: z.string().email("Please enter a valid email address"),
  role: z.string().min(1, "Please select a role"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertUserWaitlist = z.infer<typeof insertUserWaitlistSchema>;
export type UserWaitlist = typeof userWaitlist.$inferSelect;
export type InsertVendorWaitlist = z.infer<typeof insertVendorWaitlistSchema>;
export type VendorWaitlist = typeof vendorWaitlist.$inferSelect;
