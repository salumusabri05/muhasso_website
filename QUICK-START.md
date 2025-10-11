# 🚀 Quick Start Checklist

Follow these steps to get your MUHASSO admin system up and running:

## ☑️ Step 1: Supabase Project Setup (5 minutes)

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Fill in:
   - Project name: `muhasso-web`
   - Database password: (save this securely)
   - Region: Choose closest to Tanzania
4. Wait for project to be created (~2 minutes)

## ☑️ Step 2: Get API Keys (1 minute)

1. Go to Project Settings → API
2. Copy these values:
   - **Project URL**: `https://xxxxxxxxxxxxx.supabase.co`
   - **anon/public key**: `eyJhbGc...` (long string)

## ☑️ Step 3: Configure Environment Variables (1 minute)

1. Create `.env.local` in your project root (if not exists):
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your-key-here
```

2. Restart your development server:
```powershell
# Stop current server (Ctrl+C)
npm run dev
```

## ☑️ Step 4: Create Database Tables (3 minutes)

1. In Supabase Dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy entire contents of `supabase-schema.sql`
4. Paste into SQL Editor
5. Click "Run" (bottom right)
6. Wait for "Success. No rows returned"

## ☑️ Step 5: Create Storage Buckets (5 minutes)

In Supabase Dashboard, go to **Storage**:

### Bucket 1: news-images
1. Click "New bucket"
2. Name: `news-images`
3. Public: ✅ Yes
4. File size limit: `5242880` (5MB)
5. Allowed MIME types: `image/jpeg,image/png,image/webp,image/gif`
6. Click "Create bucket"

### Bucket 2: event-images
1. Click "New bucket"
2. Name: `event-images`
3. Public: ✅ Yes
4. File size limit: `5242880` (5MB)
5. Allowed MIME types: `image/jpeg,image/png,image/webp,image/gif`
6. Click "Create bucket"

### Bucket 3: posters
1. Click "New bucket"
2. Name: `posters`
3. Public: ✅ Yes
4. File size limit: `10485760` (10MB)
5. Allowed MIME types: `image/jpeg,image/png,image/webp,image/gif,application/pdf`
6. Click "Create bucket"

### Bucket 4: announcement-attachments
1. Click "New bucket"
2. Name: `announcement-attachments`
3. Public: ✅ Yes
4. File size limit: `10485760` (10MB)
5. Allowed MIME types: `image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document`
6. Click "Create bucket"

## ☑️ Step 6: Apply Storage Policies (3 minutes)

For each bucket (news-images, event-images, posters, announcement-attachments):

1. Click on the bucket name
2. Go to **Policies** tab
3. The policies should already be there from the SQL schema
4. Verify you see these policies:
   - "Public can view [bucket-name]"
   - "Authenticated users can upload [bucket-name]"
   - "Authenticated users can update [bucket-name]"
   - "Authenticated users can delete [bucket-name]"

**If policies are missing**, run this in SQL Editor:
```sql
-- Copy the storage policies section from supabase-schema.sql
-- Lines starting with "CREATE POLICY" for storage
```

## ☑️ Step 7: Create First Admin User (2 minutes)

### Option A: Via Email (Recommended)
1. Go to **Authentication** → **Users**
2. Click "Add user"
3. Email: `admin@muhasso.com` (or your email)
4. Password: (create a strong password)
5. Click "Create user"
6. Copy the user's UUID from the users list
7. Go to **SQL Editor**, run:
```sql
INSERT INTO admin_users (id, email, full_name, role, is_active)
VALUES (
    'paste-uuid-here',
    'admin@muhasso.com',
    'Admin User',
    'super_admin',
    true
);
```

### Option B: Via Magic Link
1. Add authentication to your app first
2. Sign up via your app
3. Follow step 6-7 above

## ☑️ Step 8: Test the Forms (5 minutes)

Test each admin form:

### Test News Form:
1. Navigate to `http://localhost:3000/admin/news`
2. Fill in:
   - Title: "Test News Article"
   - Category: "General"
   - Content: "This is a test"
   - Author: "Admin"
   - Upload an image
   - Check "Publish immediately"
3. Click "Publish News"
4. Should see: ✅ "News article created successfully!"

### Test Events Form:
1. Navigate to `http://localhost:3000/admin/events`
2. Fill in:
   - Title: "Test Event"
   - Type: "Workshop"
   - Dates: (today and tomorrow)
   - Location: "Main Hall"
   - Description: "Test event description"
   - Organizer: "MUHASSO"
   - Check "Publish immediately"
3. Click "Publish Event"
4. Should see: ✅ "Event created successfully!"

### Test Announcements Form:
1. Navigate to `http://localhost:3000/admin/announcements`
2. Fill in:
   - Title: "Test Announcement"
   - Content: "This is a test announcement"
   - Priority: "Medium"
   - Category: "General"
   - Target: "All"
   - Check "Make active immediately"
3. Click "Create Announcement"
4. Should see: ✅ "Announcement created successfully!"

### Test Posters Form:
1. Navigate to `http://localhost:3000/admin/posters`
2. Fill in:
   - Title: "Test Poster"
   - Category: "Event"
   - Upload a poster image
   - Check "Make active immediately"
3. Click "Upload Poster"
4. Should see: ✅ "Poster created successfully!"

## ☑️ Step 9: Verify Data in Supabase (2 minutes)

1. Go to **Table Editor** in Supabase Dashboard
2. Check each table:
   - **news**: Should have 1 row
   - **events**: Should have 1 row
   - **announcements**: Should have 1 row
   - **posters**: Should have 1 row

3. Go to **Storage**
4. Check each bucket for uploaded files

## ☑️ Step 10: View Published Content (Optional)

Run these SQL queries to see published content:

```sql
-- View published news
SELECT * FROM published_news_view;

-- View upcoming events
SELECT * FROM upcoming_events_view;

-- View active announcements
SELECT * FROM active_announcements_view;

-- View active posters
SELECT * FROM active_posters_view;
```

## 🎉 You're Done!

If all tests passed, your admin system is fully functional!

## ❌ Troubleshooting

### Error: "Missing Supabase environment variables"
- Check `.env.local` exists in project root
- Verify variable names are exact
- Restart dev server

### Error: "Image upload failed"
- Verify bucket exists and is public
- Check file size is under limit
- Verify file type is allowed

### Error: "Database error"
- Verify SQL schema ran successfully
- Check RLS policies are enabled
- Ensure user is in admin_users table

### Error: "Toast doesn't show"
- Check browser console for errors
- Verify Supabase URL and key are correct

## 📞 Need Help?

1. Check `ADMIN-FORMS-GUIDE.md` for detailed form documentation
2. Check `SUPABASE-SETUP-GUIDE.md` for database setup
3. Check `INTEGRATION-SUMMARY.md` for complete overview
4. Check browser console for error details
5. Check Supabase Dashboard → Logs for backend errors

---

**Total Setup Time: ~25 minutes**

Once complete, you can start posting real content to your MUHASSO website! 🚀
