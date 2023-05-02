-- Deploy rpgproject_sqitch:rpgproject_V3 to pg

BEGIN;

INSERT INTO public."user"
    (email, password)
	VALUES ('dd@dd', 'dd'), ('ff@ff', 'ff');

COMMIT;
