-- ============================================
-- MUHASSO WEB - SUPABASE DATABASE SCHEMA
-- ============================================
-- This file contains all table schemas, storage buckets, and RLS policies
-- for the MUHASSO web application
-- ============================================

-- ============================================
-- ENABLE REQUIRED EXTENSIONS
-- ============================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLES
-- ============================================

-- ============================================
-- 1. NEWS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS news (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Academic', 'Sports', 'Cultural', 'General')),
    excerpt TEXT,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    featured_image TEXT, -- URL to image in storage bucket
    tags TEXT[], -- Array of tags
    published BOOLEAN DEFAULT false,
    views INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published_at TIMESTAMP WITH TIME ZONE,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create index for faster queries
CREATE INDEX idx_news_category ON news(category);
CREATE INDEX idx_news_published ON news(published);
CREATE INDEX idx_news_created_at ON news(created_at DESC);
CREATE INDEX idx_news_tags ON news USING GIN(tags);

-- ============================================
-- 2. EVENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    event_type TEXT NOT NULL CHECK (event_type IN ('Workshop', 'Seminar', 'Conference', 'Social', 'Sports', 'Cultural', 'Academic', 'Other')),
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    start_time TIME,
    end_time TIME,
    organizer TEXT NOT NULL,
    contact_email TEXT,
    contact_phone TEXT,
    featured_image TEXT, -- URL to image in storage bucket
    registration_required BOOLEAN DEFAULT false,
    registration_link TEXT,
    max_participants INTEGER,
    current_participants INTEGER DEFAULT 0,
    tags TEXT[], -- Array of tags
    status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled')),
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    CONSTRAINT valid_dates CHECK (end_date >= start_date)
);

-- Create index for faster queries
CREATE INDEX idx_events_event_type ON events(event_type);
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_start_date ON events(start_date);
CREATE INDEX idx_events_published ON events(published);
CREATE INDEX idx_events_tags ON events USING GIN(tags);

-- ============================================
-- 3. ANNOUNCEMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS announcements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    priority TEXT NOT NULL CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    category TEXT NOT NULL CHECK (category IN ('Academic', 'Administrative', 'Event', 'General', 'Emergency')),
    target_audience TEXT NOT NULL CHECK (target_audience IN ('All', 'Students', 'Faculty', 'Staff', 'Alumni')),
    expiry_date TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true,
    is_pinned BOOLEAN DEFAULT false,
    views INTEGER DEFAULT 0,
    attachments TEXT[], -- Array of file URLs
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create index for faster queries
CREATE INDEX idx_announcements_priority ON announcements(priority);
CREATE INDEX idx_announcements_category ON announcements(category);
CREATE INDEX idx_announcements_target_audience ON announcements(target_audience);
CREATE INDEX idx_announcements_is_active ON announcements(is_active);
CREATE INDEX idx_announcements_is_pinned ON announcements(is_pinned);
CREATE INDEX idx_announcements_expiry_date ON announcements(expiry_date);

-- ============================================
-- 4. POSTERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS posters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL CHECK (category IN ('Event', 'Campaign', 'Awareness', 'Recruitment', 'General')),
    poster_image TEXT NOT NULL, -- URL to poster image in storage bucket
    thumbnail_image TEXT, -- URL to thumbnail in storage bucket
    event_date TIMESTAMP WITH TIME ZONE,
    expiry_date TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    views INTEGER DEFAULT 0,
    downloads INTEGER DEFAULT 0,
    tags TEXT[], -- Array of tags
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create index for faster queries
CREATE INDEX idx_posters_category ON posters(category);
CREATE INDEX idx_posters_is_active ON posters(is_active);
CREATE INDEX idx_posters_is_featured ON posters(is_featured);
CREATE INDEX idx_posters_event_date ON posters(event_date);
CREATE INDEX idx_posters_tags ON posters USING GIN(tags);

-- ============================================
-- 5. ADMIN USERS TABLE (for role management)
-- ============================================
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT,
    role TEXT DEFAULT 'editor' CHECK (role IN ('super_admin', 'admin', 'editor', 'viewer')),
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_admin_users_role ON admin_users(role);
CREATE INDEX idx_admin_users_is_active ON admin_users(is_active);

-- ============================================
-- STORAGE BUCKETS
-- ============================================

-- Create storage buckets (run these in Supabase Dashboard or via API)
-- Note: Storage buckets are created via Supabase Dashboard or API, not SQL
-- Here's the configuration for each bucket:

/*
BUCKET: news-images
- Public: true (anyone can view)
- File size limit: 5MB
- Allowed MIME types: image/jpeg, image/png, image/webp, image/gif
*/

/*
BUCKET: event-images
- Public: true (anyone can view)
- File size limit: 5MB
- Allowed MIME types: image/jpeg, image/png, image/webp, image/gif
*/

/*
BUCKET: posters
- Public: true (anyone can view)
- File size limit: 10MB
- Allowed MIME types: image/jpeg, image/png, image/webp, image/gif, application/pdf
*/

/*
BUCKET: announcement-attachments
- Public: true (anyone can view)
- File size limit: 10MB
- Allowed MIME types: image/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document
*/

-- ============================================
-- STORAGE POLICIES (RLS for Storage)
-- ============================================

-- STORAGE POLICY: news-images bucket
-- Allow public read access (anyone can view)
CREATE POLICY "Public can view news images"
ON storage.objects FOR SELECT
USING (bucket_id = 'news-images');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload news images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'news-images');

-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update news images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'news-images');

-- Allow authenticated users to delete
CREATE POLICY "Authenticated users can delete news images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'news-images');

-- STORAGE POLICY: event-images bucket
CREATE POLICY "Public can view event images"
ON storage.objects FOR SELECT
USING (bucket_id = 'event-images');

CREATE POLICY "Authenticated users can upload event images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'event-images');

CREATE POLICY "Authenticated users can update event images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'event-images');

CREATE POLICY "Authenticated users can delete event images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'event-images');

-- STORAGE POLICY: posters bucket
CREATE POLICY "Public can view posters"
ON storage.objects FOR SELECT
USING (bucket_id = 'posters');

CREATE POLICY "Authenticated users can upload posters"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'posters');

CREATE POLICY "Authenticated users can update posters"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'posters');

CREATE POLICY "Authenticated users can delete posters"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'posters');

-- STORAGE POLICY: announcement-attachments bucket
CREATE POLICY "Public can view announcement attachments"
ON storage.objects FOR SELECT
USING (bucket_id = 'announcement-attachments');

CREATE POLICY "Authenticated users can upload announcement attachments"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'announcement-attachments');

CREATE POLICY "Authenticated users can update announcement attachments"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'announcement-attachments');

CREATE POLICY "Authenticated users can delete announcement attachments"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'announcement-attachments');

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES FOR TABLES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE posters ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- ============================================
-- NEWS TABLE POLICIES
-- ============================================

-- Anyone can view published news
CREATE POLICY "Public can view published news"
ON news FOR SELECT
USING (published = true);

-- Authenticated users can view all news (including unpublished)
CREATE POLICY "Authenticated users can view all news"
ON news FOR SELECT
TO authenticated
USING (true);

-- Authenticated users can insert news
CREATE POLICY "Authenticated users can insert news"
ON news FOR INSERT
TO authenticated
WITH CHECK (true);

-- Authenticated users can update news
CREATE POLICY "Authenticated users can update news"
ON news FOR UPDATE
TO authenticated
USING (true);

-- Authenticated users can delete news
CREATE POLICY "Authenticated users can delete news"
ON news FOR DELETE
TO authenticated
USING (true);

-- ============================================
-- EVENTS TABLE POLICIES
-- ============================================

-- Anyone can view published events
CREATE POLICY "Public can view published events"
ON events FOR SELECT
USING (published = true);

-- Authenticated users can view all events
CREATE POLICY "Authenticated users can view all events"
ON events FOR SELECT
TO authenticated
USING (true);

-- Authenticated users can insert events
CREATE POLICY "Authenticated users can insert events"
ON events FOR INSERT
TO authenticated
WITH CHECK (true);

-- Authenticated users can update events
CREATE POLICY "Authenticated users can update events"
ON events FOR UPDATE
TO authenticated
USING (true);

-- Authenticated users can delete events
CREATE POLICY "Authenticated users can delete events"
ON events FOR DELETE
TO authenticated
USING (true);

-- ============================================
-- ANNOUNCEMENTS TABLE POLICIES
-- ============================================

-- Anyone can view active announcements
CREATE POLICY "Public can view active announcements"
ON announcements FOR SELECT
USING (is_active = true);

-- Authenticated users can view all announcements
CREATE POLICY "Authenticated users can view all announcements"
ON announcements FOR SELECT
TO authenticated
USING (true);

-- Authenticated users can insert announcements
CREATE POLICY "Authenticated users can insert announcements"
ON announcements FOR INSERT
TO authenticated
WITH CHECK (true);

-- Authenticated users can update announcements
CREATE POLICY "Authenticated users can update announcements"
ON announcements FOR UPDATE
TO authenticated
USING (true);

-- Authenticated users can delete announcements
CREATE POLICY "Authenticated users can delete announcements"
ON announcements FOR DELETE
TO authenticated
USING (true);

-- ============================================
-- POSTERS TABLE POLICIES
-- ============================================

-- Anyone can view active posters
CREATE POLICY "Public can view active posters"
ON posters FOR SELECT
USING (is_active = true);

-- Authenticated users can view all posters
CREATE POLICY "Authenticated users can view all posters"
ON posters FOR SELECT
TO authenticated
USING (true);

-- Authenticated users can insert posters
CREATE POLICY "Authenticated users can insert posters"
ON posters FOR INSERT
TO authenticated
WITH CHECK (true);

-- Authenticated users can update posters
CREATE POLICY "Authenticated users can update posters"
ON posters FOR UPDATE
TO authenticated
USING (true);

-- Authenticated users can delete posters
CREATE POLICY "Authenticated users can delete posters"
ON posters FOR DELETE
TO authenticated
USING (true);

-- ============================================
-- ADMIN_USERS TABLE POLICIES
-- ============================================

-- Only authenticated users can view admin users
CREATE POLICY "Authenticated users can view admin users"
ON admin_users FOR SELECT
TO authenticated
USING (true);

-- Only super_admins can insert admin users
CREATE POLICY "Super admins can insert admin users"
ON admin_users FOR INSERT
TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM admin_users
        WHERE id = auth.uid() AND role = 'super_admin'
    )
);

-- Only super_admins can update admin users
CREATE POLICY "Super admins can update admin users"
ON admin_users FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM admin_users
        WHERE id = auth.uid() AND role = 'super_admin'
    )
);

-- Only super_admins can delete admin users
CREATE POLICY "Super admins can delete admin users"
ON admin_users FOR DELETE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM admin_users
        WHERE id = auth.uid() AND role = 'super_admin'
    )
);

-- ============================================
-- FUNCTIONS AND TRIGGERS
-- ============================================

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_news_updated_at
    BEFORE UPDATE ON news
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at
    BEFORE UPDATE ON events
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_announcements_updated_at
    BEFORE UPDATE ON announcements
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_posters_updated_at
    BEFORE UPDATE ON posters
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at
    BEFORE UPDATE ON admin_users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Function to auto-update event status based on dates
CREATE OR REPLACE FUNCTION update_event_status()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.start_date > NOW() THEN
        NEW.status = 'upcoming';
    ELSIF NEW.end_date < NOW() THEN
        NEW.status = 'completed';
    ELSE
        NEW.status = 'ongoing';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for event status
CREATE TRIGGER auto_update_event_status
    BEFORE INSERT OR UPDATE ON events
    FOR EACH ROW
    EXECUTE FUNCTION update_event_status();

-- Function to set published_at when news is published
CREATE OR REPLACE FUNCTION set_published_at()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.published = true AND OLD.published = false THEN
        NEW.published_at = NOW();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for published_at
CREATE TRIGGER set_news_published_at
    BEFORE UPDATE ON news
    FOR EACH ROW
    EXECUTE FUNCTION set_published_at();

-- ============================================
-- HELPFUL VIEWS
-- ============================================

-- View for published news with author info
CREATE OR REPLACE VIEW published_news_view AS
SELECT 
    n.*,
    au.full_name as author_name,
    au.email as author_email
FROM news n
LEFT JOIN admin_users au ON n.created_by = au.id
WHERE n.published = true
ORDER BY n.created_at DESC;

-- View for upcoming events
CREATE OR REPLACE VIEW upcoming_events_view AS
SELECT 
    e.*,
    au.full_name as organizer_name
FROM events e
LEFT JOIN admin_users au ON e.created_by = au.id
WHERE e.published = true 
    AND e.status IN ('upcoming', 'ongoing')
    AND e.start_date >= NOW()
ORDER BY e.start_date ASC;

-- View for active announcements
CREATE OR REPLACE VIEW active_announcements_view AS
SELECT 
    a.*,
    au.full_name as author_name
FROM announcements a
LEFT JOIN admin_users au ON a.created_by = au.id
WHERE a.is_active = true
    AND (a.expiry_date IS NULL OR a.expiry_date > NOW())
ORDER BY 
    a.is_pinned DESC,
    CASE a.priority
        WHEN 'urgent' THEN 1
        WHEN 'high' THEN 2
        WHEN 'medium' THEN 3
        WHEN 'low' THEN 4
    END,
    a.created_at DESC;

-- View for active posters
CREATE OR REPLACE VIEW active_posters_view AS
SELECT *
FROM posters
WHERE is_active = true
    AND (expiry_date IS NULL OR expiry_date > NOW())
ORDER BY is_featured DESC, created_at DESC;

-- ============================================
-- GRANT PERMISSIONS
-- ============================================

-- Grant usage on all sequences to authenticated users
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;

-- Grant access to views for public
GRANT SELECT ON published_news_view TO anon;
GRANT SELECT ON upcoming_events_view TO anon;
GRANT SELECT ON active_announcements_view TO anon;
GRANT SELECT ON active_posters_view TO anon;

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================

-- Insert sample admin user (you'll need to replace with actual auth.users id)
-- INSERT INTO admin_users (id, email, full_name, role, is_active)
-- VALUES (
--     'YOUR_AUTH_USER_ID_HERE',
--     'admin@muhasso.com',
--     'Admin User',
--     'super_admin',
--     true
-- );

-- ============================================
-- END OF SCHEMA
-- ============================================
