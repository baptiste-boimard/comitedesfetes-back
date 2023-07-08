-- Verify rpgproject_sqitch:3_ajout_table_event on pg

BEGIN;

SELECT "id","title","date","attach","content","author" FROM "event";

ROLLBACK;