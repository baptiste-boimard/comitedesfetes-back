-- Verify rpgproject_sqitch:6_ajout_des_tables on pg

BEGIN;

SELECT "id","email","password" FROM "user";

ROLLBACK;
