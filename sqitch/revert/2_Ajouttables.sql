-- Revert comitedesfetes_sqitch:2_Ajouttables from pg

BEGIN;

DROP TABLE if exists slide;
DROP TABLE if exists member;
DROP TABLE if exists event;
DROP TABLE if exists admin;

COMMIT;
