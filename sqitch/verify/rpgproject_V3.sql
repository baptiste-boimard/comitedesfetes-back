-- Verify rpgproject_sqitch:rpgproject_V3 on pg

BEGIN;

SELECT "email", "password" FROM "user"
WHERE email IN ('dd@dd', 'ff@ff');

ROLLBACK;
