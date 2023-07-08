-- Verify rpgproject_sqitch:5_drop_des_tables on pg

BEGIN;

SELECT "id","email","password" FROM "user";
SELECT "id","title","date","attach","content","author" FROM "event";


ROLLBACK;
