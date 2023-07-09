-- Deploy comitedesfetes_sqitch:2_Ajouttables to pg

BEGIN;

CREATE TABLE public.admin
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 ),
    email text NOT NULL,
    name text NOT NULL,
    password text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    update_at timestamp with time zone,
    CONSTRAINT id_admin PRIMARY KEY (id),
    CONSTRAINT email UNIQUE (email)
    INCLUDE (email)
);

ALTER TABLE IF EXISTS public.admin
    OWNER to comitedesfetes;

CREATE TABLE public.event
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 ),
    title text NOT NULL,
    summary text,
    date timestamp with time zone,
    attach text,
    content text,
    author integer NOT NULL,
    CONSTRAINT id_event_pk PRIMARY KEY (id),
    CONSTRAINT admin_id_fk FOREIGN KEY (author)
        REFERENCES public.admin (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public.event
    OWNER to comitedesfetes;

CREATE TABLE public.member
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 ),
    firstname text NOT NULL,
    lastname text NOT NULL,
    role text,
    description text,
    picture text,
    CONSTRAINT id_member_pk PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.member
    OWNER to comitedesfetes;

CREATE TABLE public.slide
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 ),
    event_id integer,
    CONSTRAINT id_slide_pk PRIMARY KEY (id),
    CONSTRAINT event_id_fk FOREIGN KEY (event_id)
        REFERENCES public.event (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
);

ALTER TABLE IF EXISTS public.slide
    OWNER to comitedesfetes;
COMMIT;
