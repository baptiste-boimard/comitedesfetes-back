-- Revert rpgproject_sqitch:rpgproject_V3 from pg

BEGIN;

DELETE FROM "user"
WHERE email IN ('dd@dd', 'ff@ff');

COMMIT;
