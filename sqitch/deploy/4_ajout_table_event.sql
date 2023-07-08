BEGIN;

-- Create table event
CREATE TABLE public."event" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" text NOT NULL UNIQUE,
  "date" TIMESTAMPTZ,
  "attach" text,
  "content" text,
  "author" text,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

COMMIT;
