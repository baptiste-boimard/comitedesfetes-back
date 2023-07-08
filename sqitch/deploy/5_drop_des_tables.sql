-- Deploy rpgproject_sqitch:5_drop_des_tables to pg

BEGIN;

DROP TABLE IF EXISTS "user","event";

COMMIT;
