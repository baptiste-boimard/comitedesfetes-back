-- Revert rpgproject_sqitch:rpgproject_V2 from pg

BEGIN;

DROP TABLE IF EXISTS "user";

COMMIT;
