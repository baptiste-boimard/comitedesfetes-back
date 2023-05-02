-- Deploy rpgproject_sqitch:rpgproject_V2 to pg

BEGIN;

-- Create table user
CREATE TABLE public."user" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL UNIQUE,
  "password" text NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

COMMIT;
