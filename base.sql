PGDMP      *                }            school    15.7    16.0 a    w           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            x           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            y           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            z           1262    16398    school    DATABASE     {   CREATE DATABASE school WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Belarus.1251';
    DROP DATABASE school;
                postgres    false            �            1259    16443 	   behaviour    TABLE     �   CREATE TABLE public.behaviour (
    id integer NOT NULL,
    lessonuserid integer NOT NULL,
    userid integer NOT NULL,
    mark integer NOT NULL,
    markdate date NOT NULL
);
    DROP TABLE public.behaviour;
       public         heap    postgres    false            �            1259    16442    behavior_id_seq    SEQUENCE     �   CREATE SEQUENCE public.behavior_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.behavior_id_seq;
       public          postgres    false    225            {           0    0    behavior_id_seq    SEQUENCE OWNED BY     D   ALTER SEQUENCE public.behavior_id_seq OWNED BY public.behaviour.id;
          public          postgres    false    224            �            1259    16429    classes    TABLE     c   CREATE TABLE public.classes (
    id integer NOT NULL,
    name character varying(128) NOT NULL
);
    DROP TABLE public.classes;
       public         heap    postgres    false            �            1259    16428    classes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.classes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.classes_id_seq;
       public          postgres    false    221            |           0    0    classes_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.classes_id_seq OWNED BY public.classes.id;
          public          postgres    false    220            �            1259    32886    commontasks    TABLE     �   CREATE TABLE public.commontasks (
    id integer NOT NULL,
    lessonuserid integer NOT NULL,
    classid integer NOT NULL,
    description character varying(516) NOT NULL,
    deadline date NOT NULL
);
    DROP TABLE public.commontasks;
       public         heap    postgres    false            �            1259    32885    commontasks_id_seq    SEQUENCE     �   CREATE SEQUENCE public.commontasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.commontasks_id_seq;
       public          postgres    false    240            }           0    0    commontasks_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.commontasks_id_seq OWNED BY public.commontasks.id;
          public          postgres    false    239            �            1259    16464    days    TABLE     `   CREATE TABLE public.days (
    id integer NOT NULL,
    name character varying(128) NOT NULL
);
    DROP TABLE public.days;
       public         heap    postgres    false            �            1259    16463    days_id_seq    SEQUENCE     �   CREATE SEQUENCE public.days_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.days_id_seq;
       public          postgres    false    231            ~           0    0    days_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.days_id_seq OWNED BY public.days.id;
          public          postgres    false    230            �            1259    16450    handup    TABLE     �   CREATE TABLE public.handup (
    id integer NOT NULL,
    lessonuserid integer NOT NULL,
    userid integer NOT NULL,
    handupdate date NOT NULL
);
    DROP TABLE public.handup;
       public         heap    postgres    false            �            1259    16449    handup_id_seq    SEQUENCE     �   CREATE SEQUENCE public.handup_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.handup_id_seq;
       public          postgres    false    227                       0    0    handup_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.handup_id_seq OWNED BY public.handup.id;
          public          postgres    false    226            �            1259    16414    lessons    TABLE     �   CREATE TABLE public.lessons (
    id integer NOT NULL,
    name character varying(128) NOT NULL,
    "time" character varying(32),
    date character varying(64)
);
    DROP TABLE public.lessons;
       public         heap    postgres    false            �            1259    16413    lessons_id_seq    SEQUENCE     �   CREATE SEQUENCE public.lessons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.lessons_id_seq;
       public          postgres    false    217            �           0    0    lessons_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.lessons_id_seq OWNED BY public.lessons.id;
          public          postgres    false    216            �            1259    16421 
   lessonuser    TABLE     x   CREATE TABLE public.lessonuser (
    id integer NOT NULL,
    lessonid integer NOT NULL,
    userid integer NOT NULL
);
    DROP TABLE public.lessonuser;
       public         heap    postgres    false            �            1259    16420    lessonuser_id_seq    SEQUENCE     �   CREATE SEQUENCE public.lessonuser_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.lessonuser_id_seq;
       public          postgres    false    219            �           0    0    lessonuser_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.lessonuser_id_seq OWNED BY public.lessonuser.id;
          public          postgres    false    218            �            1259    16436    marks    TABLE     �   CREATE TABLE public.marks (
    id integer NOT NULL,
    lessonuserid integer NOT NULL,
    userid integer NOT NULL,
    mark integer NOT NULL,
    markdate date NOT NULL
);
    DROP TABLE public.marks;
       public         heap    postgres    false            �            1259    16435    marks_id_seq    SEQUENCE     �   CREATE SEQUENCE public.marks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.marks_id_seq;
       public          postgres    false    223            �           0    0    marks_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.marks_id_seq OWNED BY public.marks.id;
          public          postgres    false    222            �            1259    16478    orders    TABLE     �   CREATE TABLE public.orders (
    id integer NOT NULL,
    name integer NOT NULL,
    startat time without time zone,
    endat time without time zone,
    start time with time zone,
    end_time time with time zone
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    16477    orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    233            �           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    232            �            1259    16485    roles    TABLE     a   CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(128) NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    16484    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    235            �           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    234            �            1259    16492 
   tablesheet    TABLE     �   CREATE TABLE public.tablesheet (
    id integer NOT NULL,
    lessonuserid integer NOT NULL,
    classid integer NOT NULL,
    dayid integer NOT NULL,
    orderid integer NOT NULL
);
    DROP TABLE public.tablesheet;
       public         heap    postgres    false            �            1259    16491    tablesheet_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tablesheet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.tablesheet_id_seq;
       public          postgres    false    237            �           0    0    tablesheet_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.tablesheet_id_seq OWNED BY public.tablesheet.id;
          public          postgres    false    236            �            1259    16457    tasks    TABLE     �   CREATE TABLE public.tasks (
    id integer NOT NULL,
    lessonuserid integer NOT NULL,
    classid integer NOT NULL,
    description character varying(128) NOT NULL,
    taskdate date NOT NULL
);
    DROP TABLE public.tasks;
       public         heap    postgres    false            �            1259    16456    tasks_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.tasks_id_seq;
       public          postgres    false    229            �           0    0    tasks_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.tasks_id_seq OWNED BY public.tasks.id;
          public          postgres    false    228            �            1259    24693    test    TABLE        CREATE TABLE public.test (
);
    DROP TABLE public.test;
       public         heap    postgres    false            �            1259    16400    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(128) NOT NULL,
    login character varying(128) NOT NULL,
    pass character varying(32) NOT NULL,
    phonenumber character varying(16) NOT NULL,
    roleid integer NOT NULL,
    telegram character varying(32) NOT NULL,
    homework character varying(400),
    lastname character varying(32),
    status character varying(16),
    classid integer
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16399    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    215            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    214            �           2604    16446    behaviour id    DEFAULT     k   ALTER TABLE ONLY public.behaviour ALTER COLUMN id SET DEFAULT nextval('public.behavior_id_seq'::regclass);
 ;   ALTER TABLE public.behaviour ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    16432 
   classes id    DEFAULT     h   ALTER TABLE ONLY public.classes ALTER COLUMN id SET DEFAULT nextval('public.classes_id_seq'::regclass);
 9   ALTER TABLE public.classes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    32889    commontasks id    DEFAULT     p   ALTER TABLE ONLY public.commontasks ALTER COLUMN id SET DEFAULT nextval('public.commontasks_id_seq'::regclass);
 =   ALTER TABLE public.commontasks ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    239    240    240            �           2604    16467    days id    DEFAULT     b   ALTER TABLE ONLY public.days ALTER COLUMN id SET DEFAULT nextval('public.days_id_seq'::regclass);
 6   ALTER TABLE public.days ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    16453 	   handup id    DEFAULT     f   ALTER TABLE ONLY public.handup ALTER COLUMN id SET DEFAULT nextval('public.handup_id_seq'::regclass);
 8   ALTER TABLE public.handup ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    16417 
   lessons id    DEFAULT     h   ALTER TABLE ONLY public.lessons ALTER COLUMN id SET DEFAULT nextval('public.lessons_id_seq'::regclass);
 9   ALTER TABLE public.lessons ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    16424    lessonuser id    DEFAULT     n   ALTER TABLE ONLY public.lessonuser ALTER COLUMN id SET DEFAULT nextval('public.lessonuser_id_seq'::regclass);
 <   ALTER TABLE public.lessonuser ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    16439    marks id    DEFAULT     d   ALTER TABLE ONLY public.marks ALTER COLUMN id SET DEFAULT nextval('public.marks_id_seq'::regclass);
 7   ALTER TABLE public.marks ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    16481 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    16488    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234    235            �           2604    16495    tablesheet id    DEFAULT     n   ALTER TABLE ONLY public.tablesheet ALTER COLUMN id SET DEFAULT nextval('public.tablesheet_id_seq'::regclass);
 <   ALTER TABLE public.tablesheet ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    236    237            �           2604    16460    tasks id    DEFAULT     d   ALTER TABLE ONLY public.tasks ALTER COLUMN id SET DEFAULT nextval('public.tasks_id_seq'::regclass);
 7   ALTER TABLE public.tasks ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    16403    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            e          0    16443 	   behaviour 
   TABLE DATA           M   COPY public.behaviour (id, lessonuserid, userid, mark, markdate) FROM stdin;
    public          postgres    false    225   �d       a          0    16429    classes 
   TABLE DATA           +   COPY public.classes (id, name) FROM stdin;
    public          postgres    false    221   f       t          0    32886    commontasks 
   TABLE DATA           W   COPY public.commontasks (id, lessonuserid, classid, description, deadline) FROM stdin;
    public          postgres    false    240   .f       k          0    16464    days 
   TABLE DATA           (   COPY public.days (id, name) FROM stdin;
    public          postgres    false    231   �g       g          0    16450    handup 
   TABLE DATA           F   COPY public.handup (id, lessonuserid, userid, handupdate) FROM stdin;
    public          postgres    false    227   h       ]          0    16414    lessons 
   TABLE DATA           9   COPY public.lessons (id, name, "time", date) FROM stdin;
    public          postgres    false    217   �h       _          0    16421 
   lessonuser 
   TABLE DATA           :   COPY public.lessonuser (id, lessonid, userid) FROM stdin;
    public          postgres    false    219   !i       c          0    16436    marks 
   TABLE DATA           I   COPY public.marks (id, lessonuserid, userid, mark, markdate) FROM stdin;
    public          postgres    false    223   bi       m          0    16478    orders 
   TABLE DATA           K   COPY public.orders (id, name, startat, endat, start, end_time) FROM stdin;
    public          postgres    false    233   �j       o          0    16485    roles 
   TABLE DATA           )   COPY public.roles (id, name) FROM stdin;
    public          postgres    false    235   Qk       q          0    16492 
   tablesheet 
   TABLE DATA           O   COPY public.tablesheet (id, lessonuserid, classid, dayid, orderid) FROM stdin;
    public          postgres    false    237   �k       i          0    16457    tasks 
   TABLE DATA           Q   COPY public.tasks (id, lessonuserid, classid, description, taskdate) FROM stdin;
    public          postgres    false    229   l       r          0    24693    test 
   TABLE DATA              COPY public.test  FROM stdin;
    public          postgres    false    238   m       [          0    16400    users 
   TABLE DATA           z   COPY public.users (id, name, login, pass, phonenumber, roleid, telegram, homework, lastname, status, classid) FROM stdin;
    public          postgres    false    215   2m       �           0    0    behavior_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.behavior_id_seq', 56, true);
          public          postgres    false    224            �           0    0    classes_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.classes_id_seq', 1, false);
          public          postgres    false    220            �           0    0    commontasks_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.commontasks_id_seq', 26, true);
          public          postgres    false    239            �           0    0    days_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.days_id_seq', 1, false);
          public          postgres    false    230            �           0    0    handup_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.handup_id_seq', 14, true);
          public          postgres    false    226            �           0    0    lessons_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.lessons_id_seq', 2, true);
          public          postgres    false    216            �           0    0    lessonuser_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.lessonuser_id_seq', 1, false);
          public          postgres    false    218            �           0    0    marks_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.marks_id_seq', 64, true);
          public          postgres    false    222            �           0    0    orders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.orders_id_seq', 1, false);
          public          postgres    false    232            �           0    0    roles_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.roles_id_seq', 1, false);
          public          postgres    false    234            �           0    0    tablesheet_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.tablesheet_id_seq', 35, true);
          public          postgres    false    236            �           0    0    tasks_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.tasks_id_seq', 16, true);
          public          postgres    false    228            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 14, true);
          public          postgres    false    214            �           2606    16448    behaviour behavior_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.behaviour
    ADD CONSTRAINT behavior_pkey PRIMARY KEY (id);
 A   ALTER TABLE ONLY public.behaviour DROP CONSTRAINT behavior_pkey;
       public            postgres    false    225            �           2606    16434    classes classes_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.classes
    ADD CONSTRAINT classes_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.classes DROP CONSTRAINT classes_pkey;
       public            postgres    false    221            �           2606    32893    commontasks commontasks_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.commontasks
    ADD CONSTRAINT commontasks_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.commontasks DROP CONSTRAINT commontasks_pkey;
       public            postgres    false    240            �           2606    16469    days days_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.days
    ADD CONSTRAINT days_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.days DROP CONSTRAINT days_pkey;
       public            postgres    false    231            �           2606    16455    handup handup_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.handup
    ADD CONSTRAINT handup_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.handup DROP CONSTRAINT handup_pkey;
       public            postgres    false    227            �           2606    16419    lessons lessons_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT lessons_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.lessons DROP CONSTRAINT lessons_pkey;
       public            postgres    false    217            �           2606    16426    lessonuser lessonuser_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.lessonuser
    ADD CONSTRAINT lessonuser_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.lessonuser DROP CONSTRAINT lessonuser_pkey;
       public            postgres    false    219            �           2606    16441    marks marks_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.marks
    ADD CONSTRAINT marks_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.marks DROP CONSTRAINT marks_pkey;
       public            postgres    false    223            �           2606    16483    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    233            �           2606    16490    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    235            �           2606    16497    tablesheet tablesheet_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.tablesheet
    ADD CONSTRAINT tablesheet_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.tablesheet DROP CONSTRAINT tablesheet_pkey;
       public            postgres    false    237            �           2606    16462    tasks tasks_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.tasks DROP CONSTRAINT tasks_pkey;
       public            postgres    false    229            �           2606    16405    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            e   �   x�m�K�!б�Ŏ�����}]j=��D��-�FD'V��D!n�
E㠢P5�V�t8�Ps�/�m�F@5����L{Яj�	��\�b^�r�x���z�X�ۻ�a�2��e�8�@=��9c&�ev5�$B��$6V�z��؈���<�G����[	H�!{8Ϙ���e!_8nԿ�QN�q.�=�B�P�jfʯk_X<�6���D%������ʛO��Ae�ͱ֬�������!��      a      x�3�t�2�t�2��2�t�����  ��      t   h  x���Qj�@��wO|N��n��s���b5`$�bZiAŇ�ޡW�`l�0{#w71�[H�������"��3<��r.x�p�{<�5~�p�k0���#n,���o9����ӆ�
�riΕ\��9�=��t���C�-0��r��,'�� )!�*�F.��"�u+)g8i�J(�a�Ie�jU®:�`�3
�d�$�(�;Q;IJP7H:���9�ZS�cU~Z��Fad%�Y3��C�1�TcʚV�YVp��樂�{�7.��i����ۿp���|WoR�5�[o�v�+6M���������Ƽ1���M�[s
��\Bo��� �l�V���$�%�Z����{e�UK��*��\��      k   W   x�3估�¾{/l���w_��w\��e�ya�Ŧ�.6@�9/69 u�L8/�_�
��$.l�2��( T|��"F��� �8�      g   c   x�e���0C�s�KP�����sP@�B�O�Wh4���SsV�X���z�Sȓ��{�!���b���d/P`�\t�Ac�M��ϐ�h(�����W_���˾ 8 �A'�      ]   �   x�3�t�K��,����".c����Լ�T��	�GfqI~Q%�o��QY�������R��X����2���K�/��)��&g�����t�s��&�d��CE9/̽���& ުpa��9��@����2�.l�*����� [�C�      _   1   x����0İ�4L��ݥ��Q2��r�XY6M�f�z8���ߣ����      c   /  x�m�э� ��K/����?��J�GR��+�#_|Ɉ$�N��FP�F
�e@AlT ��� �Q4�F�u '�6��xx�w�;(o�[�X�ȝX�ʬ��bCq��܉1/!+R��\=�lv�5���G!o�[!�~La�c��;�����K"��i�!c��M���i�ޜH=�ƾ���H%Bu܆W�ay�{��Z���I[�=��"�{��9W	U]ˁϮځ%B��/�4W�5���'����0S��:j�9��EX�UǒƉ�Z��'�n��l�89�7њQ�L��������z�����  ��      m   �   x�U��1D��V"E^)"l�u�D�f%>����g�(���;�
�ƃM�YA�H0y�D��54H	V�������85��Cc��q�mM�)����mO̚D�U#M�45��ɯ�j�o�o�ߎ��&w?k,�u�������˜�zf�o"�t�U3      o   2   x�3�,.)MI�+�2�,IML�H-�2�LL����2�,H,Js��qqq '��      q   x   x�E��1�o<LUl��ۥ��Q�D���L0���
EZ��fŅdsčTs.��ͧ��V�EXMo��0�����w9��?򉫇�އ�vG���͝��V�U̦��r]͓��y�ۭ�      i   �   x�u�1n�0Eg�>@��d�w� CQ�Y
dn�!zv� is�F��j����')�����q#�J)���+��;��:��h�2u���{��LN�u�������~�f���<��l��xӋ�aZ
z�����qH��YЉ�Ȯ{���e��(#�EӪ������m_J�����R�AS�qZ��.=�|�y$�+#��'��h���:Fy0����^��a��? Ԣ      r      x������ � �      [   �  x����n�0��g����U;��u�Pa��U%��$��D��MvX��X �C�
�^��<oĉg:4tmG��Ŀ���Ή	<�#����U��M(�c�K(#�}����_���t�=u@���* Q6�������Y�w���C���̈́(��$ ��JT�'�i˗�aԡ�Mt�2|�SF܂x�+X�d@\��Ja�����*�A+�����]TR����� o��Yʸ%Tpw~�c�Z�Z��Y�n6%��������`��.N�����{i�nQ��e�Ǚ�5}f��2��/���+�-���,�nU�8�U-�iRJ����m-��=�E����d�r�jc��%�8�FH�R�"��	6LY�&�*������W}��g��>>2_�N4�I��x�%i�zl��!���:<�aa^�����������c}�ʉ�D�L	-�b��cfm�'�O�T�`;�7ݽ�=Fߙ�ֿ�1�Ӿ;������;��^>*���ߌ����_���|G�D_�~�Ȭ�?�.c���7����l�F1H<>��}�9
K.^��+�C�Y^��u4��8� �]����2'���>n+9�U՝m�&YUu��p{0��i�;     