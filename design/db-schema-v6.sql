-- Database Schema Blueprint (v6 - Toàn diện)
-- This file creates all tables for the project, normalized and ready for Supabase/PostgreSQL.

DO $$
DECLARE
    tbl TEXT;
    tables TEXT[] := ARRAY[
        'role_permissions',
        'roles',
        'users',
        'divisions',
        'statuses',
        'missions',
        'initiatives',
        'categories',
        'news_articles',
        'recognition_posts',
        'initiative_divisions',
        'initiative_members',
        'mission_honorees',
        'mission_honored_initiatives',
        'honorees',
        'likes',
        'initiative_status_history',
        'initiative_kpis',
        'initiative_kpi_data',
        'comments',
        'documents',
        'qa_items'
    ];
    row_count BIGINT;
BEGIN
    FOREACH tbl IN ARRAY tables LOOP
        IF EXISTS (
            SELECT 1 FROM information_schema.tables
            WHERE table_schema = 'public' AND table_name = tbl
        ) THEN
            EXECUTE format('SELECT COUNT(*) FROM %I', tbl) INTO row_count;
            IF row_count = 0 THEN
                EXECUTE format('DROP TABLE IF EXISTS %I CASCADE;', tbl);
            END IF;
        END IF;
    END LOOP;
END $$;

-- Enable uuid-ossp extension for UUID support
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Core Entity Tables

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE role_permissions (
    id SERIAL PRIMARY KEY,
    role_id INTEGER REFERENCES roles(id),
    permission VARCHAR(100) NOT NULL,
    value TEXT
);

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT auth.uid(),
    employee_id VARCHAR(50) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    avatar_url TEXT,
    role_id INTEGER REFERENCES roles(id)
);

CREATE TABLE divisions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    parent_division_id INTEGER REFERENCES divisions(id)
);

CREATE TABLE statuses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    color_code VARCHAR(7)
);

CREATE TABLE missions (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    summary TEXT,
    full_description TEXT,
    image_url TEXT,
    status_id INTEGER REFERENCES statuses(id),
    deadline DATE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE initiatives (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    summary TEXT,
    full_description TEXT,
    avatar_url TEXT,
    team_avatar_url TEXT,
    video_url TEXT,
    mission_id INTEGER REFERENCES missions(id),
    current_status_id INTEGER REFERENCES statuses(id),
    dashboard_iframe_url TEXT,
    group_link TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE news_articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    summary TEXT,
    content TEXT NOT NULL,
    image_url TEXT,
    author_id UUID REFERENCES users(id),
    category_id INTEGER REFERENCES categories(id),
    is_featured BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE recognition_posts (
    id SERIAL PRIMARY KEY,
    poster_id UUID REFERENCES users(id),
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Join Tables

CREATE TABLE initiative_divisions (
    initiative_id INTEGER REFERENCES initiatives(id),
    division_id INTEGER REFERENCES divisions(id),
    PRIMARY KEY (initiative_id, division_id)
);

CREATE TABLE initiative_members (
    initiative_id INTEGER REFERENCES initiatives(id),
    user_id UUID REFERENCES users(id),
    role VARCHAR(100) NOT NULL,
    PRIMARY KEY (initiative_id, user_id, role)
);

CREATE TABLE mission_honorees (
    mission_id INTEGER REFERENCES missions(id),
    division_id INTEGER REFERENCES divisions(id),
    description TEXT,
    PRIMARY KEY (mission_id, division_id)
);

CREATE TABLE mission_honored_initiatives (
    mission_id INTEGER REFERENCES missions(id),
    initiative_id INTEGER REFERENCES initiatives(id),
    description TEXT,
    honored_at TIMESTAMPTZ DEFAULT now(),
    PRIMARY KEY (mission_id, initiative_id)
);

CREATE TABLE honorees (
    post_id INTEGER REFERENCES recognition_posts(id),
    honoree_id INTEGER NOT NULL,
    honoree_type VARCHAR(50) NOT NULL,
    PRIMARY KEY (post_id, honoree_id, honoree_type)
);

CREATE TABLE likes (
    post_id INTEGER REFERENCES recognition_posts(id),
    user_id UUID REFERENCES users(id),
    PRIMARY KEY (post_id, user_id)
);

-- 3. Log and Content Tables

CREATE TABLE initiative_status_history (
    id SERIAL PRIMARY KEY,
    initiative_id INTEGER NOT NULL REFERENCES initiatives(id),
    status_id INTEGER NOT NULL REFERENCES statuses(id),
    start_date TIMESTAMPTZ NOT NULL DEFAULT now(),
    notes TEXT
);

CREATE TABLE initiative_kpis (
    id SERIAL PRIMARY KEY,
    initiative_id INTEGER REFERENCES initiatives(id),
    kpi_name VARCHAR(255) NOT NULL
);

CREATE TABLE initiative_kpi_data (
    id SERIAL PRIMARY KEY,
    kpi_id INTEGER REFERENCES initiative_kpis(id),
    date DATE NOT NULL,
    value NUMERIC NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL REFERENCES recognition_posts(id),
    user_id UUID NOT NULL REFERENCES users(id),
    content TEXT NOT NULL,
    parent_comment_id INTEGER REFERENCES comments(id),
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    file_type VARCHAR(50),
    parent_id INTEGER NOT NULL,
    parent_type VARCHAR(50) NOT NULL,
    uploader_id UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE qa_items (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT,
    parent_id INTEGER NOT NULL,
    parent_type VARCHAR(50) NOT NULL,
    asker_id UUID REFERENCES users(id),
    answerer_id UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Enable Row Level Security (RLS) and Add Permissive Policies (for development)
-- IMPORTANT: Replace these with restrictive policies before production!

ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON roles FOR ALL USING (true);

ALTER TABLE role_permissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON role_permissions FOR ALL USING (true);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON users FOR ALL USING (true);

ALTER TABLE divisions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON divisions FOR ALL USING (true);

ALTER TABLE statuses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON statuses FOR ALL USING (true);

ALTER TABLE missions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON missions FOR ALL USING (true);

ALTER TABLE initiatives ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON initiatives FOR ALL USING (true);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON categories FOR ALL USING (true);

ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON news_articles FOR ALL USING (true);

ALTER TABLE recognition_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON recognition_posts FOR ALL USING (true);

ALTER TABLE initiative_divisions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON initiative_divisions FOR ALL USING (true);

ALTER TABLE initiative_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON initiative_members FOR ALL USING (true);

ALTER TABLE mission_honorees ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON mission_honorees FOR ALL USING (true);

ALTER TABLE mission_honored_initiatives ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON mission_honored_initiatives FOR ALL USING (true);

ALTER TABLE honorees ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON honorees FOR ALL USING (true);

ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON likes FOR ALL USING (true);

ALTER TABLE initiative_status_history ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON initiative_status_history FOR ALL USING (true);

ALTER TABLE initiative_kpis ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON initiative_kpis FOR ALL USING (true);

ALTER TABLE initiative_kpi_data ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON initiative_kpi_data FOR ALL USING (true);

ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON comments FOR ALL USING (true);

ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON documents FOR ALL USING (true);

ALTER TABLE qa_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON qa_items FOR ALL USING (true);

-- 5. Example RLS Policies for Production (customize as needed)
-- Replace 'Admin' with your actual admin role name if different.

-- Helper: Admin check
-- EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))

-- roles (reference table)
DROP POLICY IF EXISTS "Allow all" ON roles;
CREATE POLICY "Read all roles" ON roles FOR SELECT USING (true);
CREATE POLICY "Admin manage roles" ON roles FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- role_permissions (admin only)
DROP POLICY IF EXISTS "Allow all" ON role_permissions;
CREATE POLICY "Admin manage role_permissions" ON role_permissions FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- users (self-management)
DROP POLICY IF EXISTS "Allow all" ON users;
CREATE POLICY "Read all users" ON users FOR SELECT USING (true);
CREATE POLICY "Self update" ON users FOR UPDATE USING (id = auth.uid());
CREATE POLICY "Self delete" ON users FOR DELETE USING (id = auth.uid());

-- divisions (reference table)
DROP POLICY IF EXISTS "Allow all" ON divisions;
CREATE POLICY "Read all divisions" ON divisions FOR SELECT USING (true);
CREATE POLICY "Admin manage divisions" ON divisions FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- statuses (reference table)
DROP POLICY IF EXISTS "Allow all" ON statuses;
CREATE POLICY "Read all statuses" ON statuses FOR SELECT USING (true);
CREATE POLICY "Admin manage statuses" ON statuses FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- missions (reference table)
DROP POLICY IF EXISTS "Allow all" ON missions;
CREATE POLICY "Read all missions" ON missions FOR SELECT USING (true);
CREATE POLICY "Admin manage missions" ON missions FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- initiatives (reference table)
DROP POLICY IF EXISTS "Allow all" ON initiatives;
CREATE POLICY "Read all initiatives" ON initiatives FOR SELECT USING (true);
CREATE POLICY "Admin manage initiatives" ON initiatives FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- categories (reference table)
DROP POLICY IF EXISTS "Allow all" ON categories;
CREATE POLICY "Read all categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Admin manage categories" ON categories FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- news_articles (reference table)
DROP POLICY IF EXISTS "Allow all" ON news_articles;
CREATE POLICY "Read all news_articles" ON news_articles FOR SELECT USING (true);
CREATE POLICY "Admin manage news_articles" ON news_articles FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- recognition_posts (user-owned)
DROP POLICY IF EXISTS "Allow all" ON recognition_posts;
CREATE POLICY "Read all recognition_posts" ON recognition_posts FOR SELECT USING (true);
CREATE POLICY "Owner manage recognition_posts" ON recognition_posts FOR ALL USING (poster_id = auth.uid());

-- initiative_divisions (admin only)
DROP POLICY IF EXISTS "Allow all" ON initiative_divisions;
CREATE POLICY "Read all initiative_divisions" ON initiative_divisions FOR SELECT USING (true);
CREATE POLICY "Admin manage initiative_divisions" ON initiative_divisions FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- initiative_members (user or admin)
DROP POLICY IF EXISTS "Allow all" ON initiative_members;
CREATE POLICY "Read all initiative_members" ON initiative_members FOR SELECT USING (true);
CREATE POLICY "Self or admin manage initiative_members" ON initiative_members FOR ALL USING (
  user_id = auth.uid() OR EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- mission_honorees (admin only)
DROP POLICY IF EXISTS "Allow all" ON mission_honorees;
CREATE POLICY "Read all mission_honorees" ON mission_honorees FOR SELECT USING (true);
CREATE POLICY "Admin manage mission_honorees" ON mission_honorees FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- mission_honored_initiatives (admin only)
DROP POLICY IF EXISTS "Allow all" ON mission_honored_initiatives;
CREATE POLICY "Read all mission_honored_initiatives" ON mission_honored_initiatives FOR SELECT USING (true);
CREATE POLICY "Admin manage mission_honored_initiatives" ON mission_honored_initiatives FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- honorees (admin only)
DROP POLICY IF EXISTS "Allow all" ON honorees;
CREATE POLICY "Read all honorees" ON honorees FOR SELECT USING (true);
CREATE POLICY "Admin manage honorees" ON honorees FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- likes (user-owned)
DROP POLICY IF EXISTS "Allow all" ON likes;
CREATE POLICY "Read all likes" ON likes FOR SELECT USING (true);
CREATE POLICY "Self manage likes" ON likes FOR ALL USING (user_id = auth.uid());

-- initiative_status_history (admin only)
DROP POLICY IF EXISTS "Allow all" ON initiative_status_history;
CREATE POLICY "Read all initiative_status_history" ON initiative_status_history FOR SELECT USING (true);
CREATE POLICY "Admin manage initiative_status_history" ON initiative_status_history FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- initiative_kpis (admin only)
DROP POLICY IF EXISTS "Allow all" ON initiative_kpis;
CREATE POLICY "Read all initiative_kpis" ON initiative_kpis FOR SELECT USING (true);
CREATE POLICY "Admin manage initiative_kpis" ON initiative_kpis FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- initiative_kpi_data (admin only)
DROP POLICY IF EXISTS "Allow all" ON initiative_kpi_data;
CREATE POLICY "Read all initiative_kpi_data" ON initiative_kpi_data FOR SELECT USING (true);
CREATE POLICY "Admin manage initiative_kpi_data" ON initiative_kpi_data FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role_id = (SELECT id FROM roles WHERE name = 'Admin'))
);

-- comments (user-owned)
DROP POLICY IF EXISTS "Allow all" ON comments;
CREATE POLICY "Read all comments" ON comments FOR SELECT USING (true);
CREATE POLICY "Owner manage comments" ON comments FOR ALL USING (user_id = auth.uid());

-- documents (user-owned)
DROP POLICY IF EXISTS "Allow all" ON documents;
CREATE POLICY "Read all documents" ON documents FOR SELECT USING (true);
CREATE POLICY "Uploader manage documents" ON documents FOR ALL USING (uploader_id = auth.uid());

-- qa_items (user-owned)
DROP POLICY IF EXISTS "Allow all" ON qa_items;
CREATE POLICY "Read all qa_items" ON qa_items FOR SELECT USING (true);
CREATE POLICY "Asker manage qa_items" ON qa_items FOR ALL USING (asker_id = auth.uid());

-- 6. Drop foreign key constraints referencing users(id)
-- (You must do this for every table that references users.id)
ALTER TABLE news_articles DROP CONSTRAINT IF EXISTS news_articles_author_id_fkey;
ALTER TABLE recognition_posts DROP CONSTRAINT IF EXISTS recognition_posts_poster_id_fkey;
ALTER TABLE initiative_members DROP CONSTRAINT IF EXISTS initiative_members_user_id_fkey;
ALTER TABLE likes DROP CONSTRAINT IF EXISTS likes_user_id_fkey;
ALTER TABLE comments DROP CONSTRAINT IF EXISTS comments_user_id_fkey;
ALTER TABLE documents DROP CONSTRAINT IF EXISTS documents_uploader_id_fkey;
ALTER TABLE qa_items DROP CONSTRAINT IF EXISTS qa_items_asker_id_fkey;
ALTER TABLE qa_items DROP CONSTRAINT IF EXISTS qa_items_answerer_id_fkey;

-- 7. Re-add foreign key constraints
ALTER TABLE news_articles ADD CONSTRAINT news_articles_author_id_fkey FOREIGN KEY (author_id) REFERENCES users(id);
ALTER TABLE recognition_posts ADD CONSTRAINT recognition_posts_poster_id_fkey FOREIGN KEY (poster_id) REFERENCES users(id);
ALTER TABLE initiative_members ADD CONSTRAINT initiative_members_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE likes ADD CONSTRAINT likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE comments ADD CONSTRAINT comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE documents ADD CONSTRAINT documents_uploader_id_fkey FOREIGN KEY (uploader_id) REFERENCES users(id);
ALTER TABLE qa_items ADD CONSTRAINT qa_items_asker_id_fkey FOREIGN KEY (asker_id) REFERENCES users(id);
ALTER TABLE qa_items ADD CONSTRAINT qa_items_answerer_id_fkey FOREIGN KEY (answerer_id) REFERENCES users(id); 