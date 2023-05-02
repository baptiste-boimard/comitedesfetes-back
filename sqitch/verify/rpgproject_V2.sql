-- Verify rpgproject_sqitch:rpgproject_V2 on pg

BEGIN;

SELECT "id","email","password" FROM "user";

ROLLBACK;
git add .