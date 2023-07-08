-- Verify comitedesfetes_sqitch:2_Ajouttables on pg

BEGIN;

SELECT * FROM admin;
SELECT * FROM event;
SELECT * FROM member;
SELECT * FROM slide;

ROLLBACK;
