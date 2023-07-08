-- Deploy rpgproject_sqitch:7_modif to pg

BEGIN;

ALTER TABLE IF EXISTS public.admin
    ADD COLUMN name text NOT NULL;

ALTER TABLE IF EXISTS public.admin
    ADD CONSTRAINT email UNIQUE (email)
    INCLUDE (email);

ALTER TABLE public.event
    RENAME CONSTRAINT id_event TO id_event_pk;

COMMIT;
