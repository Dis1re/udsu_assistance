
CREATE TABLE IF NOT EXISTS "tags" (
	"id" serial NOT NULL UNIQUE,
	"tag_name" text(20),
	"description" text(200),
	PRIMARY KEY("id")
);


CREATE TABLE IF NOT EXISTS "faq_entries" (
	"id" serial NOT NULL UNIQUE,
	"question" text(500),
	"answer_text" text(500),
	"tag_id" int,
	"updated_at" timestamp,
	PRIMARY KEY("id")
);


ALTER TABLE "tags"
ADD FOREIGN KEY("id") REFERENCES "faq_entries"("tag_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;