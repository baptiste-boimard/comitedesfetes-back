-- Revert rpgproject_sqitch:6_ajout_des_tables from pg

BEGIN;

DROP TABLE IF EXISTS admin, event, member, slide;

COMMIT;
