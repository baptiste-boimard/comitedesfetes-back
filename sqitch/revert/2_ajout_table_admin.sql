-- Revert rpgproject_sqitch:2_ajout_table_admin from pg

BEGIN;

DROP TABLE IF EXISTS "user";

COMMIT;