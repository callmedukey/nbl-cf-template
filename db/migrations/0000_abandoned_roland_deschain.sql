CREATE TABLE `users` (
	`id` text,
	`email` text,
	`password` text,
	`createdAt` text,
	`updatedAt` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_id_unique` ON `users` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);