-- Verify rpgproject_sqitch:2_ajout_table_admin on pg

BEGIN;

SELECT "id","email","password" FROM "user";

ROLLBACK;
