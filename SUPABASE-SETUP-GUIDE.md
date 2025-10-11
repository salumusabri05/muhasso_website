# Supabase Setup Guide for MUHASSO Web

This guide will walk you through setting up the Supabase backend for the MUHASSO web application.

## Table of Contents
1. [Database Tables](#database-tables)
2. [Storage Buckets](#storage-buckets)
3. [Row Level Security (RLS)](#row-level-security)
4. [Storage Policies](#storage-policies)
5. [Setup Instructions](#setup-instructions)

---

## Database Tables

The application uses the following tables:

### 1. **news**
Stores news articles with categories, content, and metadata.

**Key Fields:**
- `id` (UUID) - Primary key
- `title` (TEXT) - Article title
- `category` (TEXT) - Academic, Sports, Cultural, or General
- `content` (TEXT) - Full article content
- `excerpt` (TEXT) - Short summary
- `author` (TEXT) - Author name
- `featured_image` (TEXT) - URL to storage bucket
- `published` (BOOLEAN) - Publication status
- `tags` (TEXT[]) - Array of tags
- `views` (INTEGER) - View count

### 2. **events**
Manages all events with dates, locations, and registration info.

**Key Fields:**
- `id` (UUID) - Primary key
- `title` (TEXT) - Event title
- `event_type` (TEXT) - Workshop, Seminar, Conference, etc.
- `description` (TEXT) - Full description
- `location` (TEXT) - Event location
- `start_date`, `end_date` (TIMESTAMP) - Event dates
- `start_time`, `end_time` (TIME) - Event times
- `organizer` (TEXT) - Organizer name
- `registration_required` (BOOLEAN)
- `max_participants` (INTEGER)
- `status` (TEXT) - upcoming, ongoing, completed, cancelled
- `published` (BOOLEAN)

### 3. **announcements**
Manages announcements with priority and expiry dates.

**Key Fields:**
- `id` (UUID) - Primary key
- `title` (TEXT) - Announcement title
- `content` (TEXT) - Full content
- `priority` (TEXT) - low, medium, high, urgent
- `category` (TEXT) - Academic, Administrative, Event, etc.
- `target_audience` (TEXT) - All, Students, Faculty, Staff, Alumni
- `expiry_date` (TIMESTAMP) - When announcement expires
- `is_active` (BOOLEAN)
- `is_pinned` (BOOLEAN)
- `attachments` (TEXT[]) - Array of file URLs

### 4. **posters**
Stores promotional posters and campaign materials.

**Key Fields:**
- `id` (UUID) - Primary key
- `title` (TEXT) - Poster title
- `description` (TEXT) - Description
- `category` (TEXT) - Event, Campaign, Awareness, etc.
- `poster_image` (TEXT) - URL to full-size poster
- `thumbnail_image` (TEXT) - URL to thumbnail
- `event_date` (TIMESTAMP) - Associated event date
- `expiry_date` (TIMESTAMP)
- `is_active` (BOOLEAN)
- `is_featured` (BOOLEAN)

### 5. **admin_users**
Manages admin user roles and permissions.

**Key Fields:**
- `id` (UUID) - References auth.users
- `email` (TEXT) - Admin email
- `full_name` (TEXT) - Full name
- `role` (TEXT) - super_admin, admin, editor, viewer
- `is_active` (BOOLEAN)

---

## Storage Buckets

You need to create the following storage buckets in Supabase Dashboard:

### 1. **news-images**
- **Purpose:** Store featured images for news articles
- **Public:** Yes (anyone can view)
- **File Size Limit:** 5MB
- **Allowed MIME Types:** 
  - image/jpeg
  - image/png
  - image/webp
  - image/gif

### 2. **event-images**
- **Purpose:** Store featured images for events
- **Public:** Yes (anyone can view)
- **File Size Limit:** 5MB
- **Allowed MIME Types:** 
  - image/jpeg
  - image/png
  - image/webp
  - image/gif

### 3. **posters**
- **Purpose:** Store poster images and PDFs
- **Public:** Yes (anyone can view)
- **File Size Limit:** 10MB
- **Allowed MIME Types:** 
  - image/jpeg
  - image/png
  - image/webp
  - image/gif
  - application/pdf

### 4. **announcement-attachments**
- **Purpose:** Store files attached to announcements
- **Public:** Yes (anyone can view)
- **File Size Limit:** 10MB
- **Allowed MIME Types:** 
  - image/* (all image types)
  - application/pdf
  - application/msword
  - application/vnd.openxmlformats-officedocument.wordprocessingml.document (DOCX)

---

## Row Level Security (RLS)

### Public Access Rules

**Anyone (unauthenticated) can:**
- ✅ View published news articles
- ✅ View published events
- ✅ View active announcements
- ✅ View active posters
- ✅ View all public images in storage buckets

**Authenticated users can:**
- ✅ View all content (including unpublished)
- ✅ Create, update, and delete content
- ✅ Upload, update, and delete files in storage

**Super Admins can:**
- ✅ Manage admin users
- ✅ Assign roles
- ✅ Full access to all operations

---

## Storage Policies

Each storage bucket has the following RLS policies:

### Public Read Access
```sql
-- Anyone can view files
CREATE POLICY "Public can view [bucket-name]"
ON storage.objects FOR SELECT
USING (bucket_id = '[bucket-name]');
```

### Authenticated Write Access
```sql
-- Authenticated users can upload
CREATE POLICY "Authenticated users can upload [bucket-name]"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = '[bucket-name]');

-- Authenticated users can update
CREATE POLICY "Authenticated users can update [bucket-name]"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = '[bucket-name]');

-- Authenticated users can delete
CREATE POLICY "Authenticated users can delete [bucket-name]"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = '[bucket-name]');
```

---

## Setup Instructions

### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

### Step 2: Run Database Schema
1. Open Supabase Dashboard
2. Go to **SQL Editor**
3. Copy the contents of `supabase-schema.sql`
4. Paste and run the SQL script
5. Verify all tables are created

### Step 3: Create Storage Buckets
1. Go to **Storage** in Supabase Dashboard
2. Click **New Bucket**
3. Create each bucket with these settings:

#### For `news-images`:
- Name: `news-images`
- Public: ✅ Yes
- File size limit: 5242880 (5MB)
- Allowed MIME types: `image/jpeg,image/png,image/webp,image/gif`

#### For `event-images`:
- Name: `event-images`
- Public: ✅ Yes
- File size limit: 5242880 (5MB)
- Allowed MIME types: `image/jpeg,image/png,image/webp,image/gif`

#### For `posters`:
- Name: `posters`
- Public: ✅ Yes
- File size limit: 10485760 (10MB)
- Allowed MIME types: `image/jpeg,image/png,image/webp,image/gif,application/pdf`

#### For `announcement-attachments`:
- Name: `announcement-attachments`
- Public: ✅ Yes
- File size limit: 10485760 (10MB)
- Allowed MIME types: `image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document`

### Step 4: Apply Storage Policies
The storage policies are included in the `supabase-schema.sql` file and should be automatically applied when you run the schema.

If you need to apply them manually:
1. Go to **Storage** → Select a bucket → **Policies**
2. Add the policies as shown in the SQL file

### Step 5: Configure Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Step 6: Create First Admin User
1. Sign up a user via Supabase Authentication
2. Note the user's UUID from **Authentication** → **Users**
3. Run this SQL in the SQL Editor:

```sql
INSERT INTO admin_users (id, email, full_name, role, is_active)
VALUES (
    'YOUR_USER_UUID_HERE',
    'admin@muhasso.com',
    'Your Name',
    'super_admin',
    true
);
```

### Step 7: Test the Setup
1. Try accessing the views:
```sql
SELECT * FROM published_news_view;
SELECT * FROM upcoming_events_view;
SELECT * FROM active_announcements_view;
SELECT * FROM active_posters_view;
```

2. Test file upload via Supabase Dashboard Storage

---

## Helpful SQL Queries

### View all published content
```sql
-- Published news
SELECT title, category, published_at FROM news WHERE published = true;

-- Upcoming events
SELECT title, event_type, start_date FROM events WHERE published = true AND status = 'upcoming';

-- Active announcements
SELECT title, priority, category FROM announcements WHERE is_active = true;

-- Active posters
SELECT title, category, is_featured FROM posters WHERE is_active = true;
```

### View statistics
```sql
-- Total views per category
SELECT category, SUM(views) as total_views FROM news GROUP BY category;

-- Events by status
SELECT status, COUNT(*) FROM events GROUP BY status;

-- Announcements by priority
SELECT priority, COUNT(*) FROM announcements WHERE is_active = true GROUP BY priority;
```

### Clean up expired content
```sql
-- Deactivate expired announcements
UPDATE announcements 
SET is_active = false 
WHERE expiry_date < NOW() AND is_active = true;

-- Deactivate expired posters
UPDATE posters 
SET is_active = false 
WHERE expiry_date < NOW() AND is_active = true;
```

---

## Security Best Practices

1. **Never expose service_role key** - Only use anon key in client-side code
2. **Always validate uploads** - Check file types and sizes on upload
3. **Sanitize user input** - Prevent SQL injection and XSS
4. **Use parameterized queries** - When querying from client
5. **Monitor usage** - Check Supabase dashboard for unusual activity
6. **Backup regularly** - Use Supabase's backup features
7. **Rotate keys periodically** - Update API keys regularly

---

## Troubleshooting

### Issue: RLS policies not working
**Solution:** Make sure RLS is enabled on the table:
```sql
ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;
```

### Issue: Can't upload files
**Solution:** 
1. Check bucket exists and is public
2. Verify storage policies are applied
3. Check file size and MIME type restrictions

### Issue: Views returning no data
**Solution:**
1. Verify base tables have data
2. Check WHERE conditions in view definitions
3. Ensure data meets view criteria (published=true, is_active=true, etc.)

### Issue: Timestamps showing wrong timezone
**Solution:** All timestamps use UTC. Convert in your application:
```javascript
new Date(timestamp).toLocaleString('en-US', { timeZone: 'Africa/Dar_es_Salaam' })
```

---

## Support

For issues or questions:
- Check [Supabase Documentation](https://supabase.com/docs)
- Visit [Supabase Discord](https://discord.supabase.com)
- Review the SQL schema file for table structures

---

## Changelog

- **v1.0** - Initial schema with news, events, announcements, posters
- Storage buckets configuration
- RLS policies for public read access
- Helper views and functions
