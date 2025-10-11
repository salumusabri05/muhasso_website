# Admin Forms Integration Guide

This guide explains how to use the admin forms to post data to Supabase tables.

## 📋 Prerequisites

Before using the admin forms, ensure you have:

1. ✅ Set up your Supabase project
2. ✅ Created all required tables (run `supabase-schema.sql`)
3. ✅ Created all storage buckets (news-images, event-images, posters, announcement-attachments)
4. ✅ Configured your environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
5. ✅ Authenticated a user (for created_by/updated_by fields)

---

## 📰 News Form

**Location:** `src/components/admin/forms/NewsForm.js`

**Table:** `news`

**Storage Bucket:** `news-images`

### Fields:
- **Title*** (required) - News article title
- **Category*** (required) - Academic, Sports, Cultural, or General
- **Excerpt** (optional) - Short summary
- **Content*** (required) - Full article content
- **Author*** (required) - Author name
- **Tags** (optional) - Comma-separated tags
- **Featured Image*** (required) - Main article image (max 5MB)
- **Publish** (checkbox) - Publish immediately or save as draft

### How it Works:
1. Fill in the form fields
2. Upload a featured image
3. Check "Publish immediately" to make it live, or leave unchecked to save as draft
4. Click "Publish News" or "Save as Draft"
5. The form will:
   - Upload the image to `news-images` bucket
   - Convert tags to an array
   - Insert data into the `news` table
   - Associate the post with the current authenticated user
   - Show success/error toast notification

### Database Fields Populated:
```javascript
{
  title: "string",
  category: "Academic|Sports|Cultural|General",
  excerpt: "string" (nullable),
  content: "string",
  author: "string",
  featured_image: "url to storage",
  tags: ["tag1", "tag2"], // array
  published: boolean,
  created_by: "user_id",
  updated_by: "user_id",
  created_at: timestamp (auto),
  updated_at: timestamp (auto)
}
```

---

## 📅 Events Form

**Location:** `src/components/admin/forms/EventsForm.js`

**Table:** `events`

**Storage Bucket:** `event-images`

### Fields:
- **Event Title*** (required) - Event name
- **Event Type*** (required) - Workshop, Seminar, Conference, Social, Sports, Cultural, Academic, Other
- **Start Date*** (required) - Event start date
- **Start Time** (optional) - Event start time
- **End Date*** (required) - Event end date
- **End Time** (optional) - Event end time
- **Location*** (required) - Event venue
- **Description*** (required) - Full event description
- **Organizer*** (required) - Organizer name
- **Contact Email** (optional) - Contact email
- **Contact Phone** (optional) - Contact phone number
- **Registration Required** (checkbox) - If checked, shows registration fields
  - **Registration Link** - URL to registration form
  - **Maximum Participants** - Max number of attendees
- **Tags** (optional) - Comma-separated tags
- **Event Image** (optional) - Featured event image (max 5MB)
- **Publish** (checkbox) - Publish immediately or save as draft

### How it Works:
1. Fill in event details
2. Set dates and times
3. Optionally upload an event image
4. If registration is required, add registration link and max participants
5. Check "Publish immediately" to make it live
6. Click "Publish Event" or "Save as Draft"
7. The form will:
   - Upload the image to `event-images` bucket
   - Combine date and time fields
   - Convert tags to an array
   - Insert data into the `events` table
   - Auto-set event status based on dates (upcoming/ongoing/completed)

### Database Fields Populated:
```javascript
{
  title: "string",
  event_type: "Workshop|Seminar|Conference|etc",
  description: "string",
  location: "string",
  start_date: timestamp,
  end_date: timestamp,
  start_time: time (nullable),
  end_time: time (nullable),
  organizer: "string",
  contact_email: "string" (nullable),
  contact_phone: "string" (nullable),
  featured_image: "url to storage" (nullable),
  registration_required: boolean,
  registration_link: "string" (nullable),
  max_participants: integer (nullable),
  tags: ["tag1", "tag2"], // array (nullable)
  status: "upcoming|ongoing|completed|cancelled" (auto),
  published: boolean,
  created_by: "user_id",
  updated_by: "user_id"
}
```

---

## 📢 Announcements Form

**Location:** `src/components/admin/forms/AnnouncementsForm.js`

**Table:** `announcements`

**Storage Bucket:** `announcement-attachments`

### Fields:
- **Title*** (required) - Announcement title
- **Content*** (required) - Full announcement text
- **Priority*** (required) - Low, Medium, High, Urgent
- **Category*** (required) - Academic, Administrative, Event, General, Emergency
- **Target Audience*** (required) - All, Students, Faculty, Staff, Alumni
- **Expiry Date** (optional) - When announcement should expire
- **Attachments** (optional) - Multiple files (images, PDFs, Word docs, max 10MB each)
- **Pin to top** (checkbox) - Show at the top of announcements
- **Make active** (checkbox) - Activate immediately

### How it Works:
1. Fill in announcement details
2. Select priority and category
3. Choose target audience
4. Optionally set expiry date
5. Upload attachments if needed
6. Check "Pin to top" for important announcements
7. Check "Make active immediately" to publish
8. Click "Create Announcement"
9. The form will:
   - Upload attachments to `announcement-attachments` bucket
   - Insert data into the `announcements` table
   - Set proper priority for sorting

### Database Fields Populated:
```javascript
{
  title: "string",
  content: "string",
  priority: "low|medium|high|urgent",
  category: "Academic|Administrative|Event|General|Emergency",
  target_audience: "All|Students|Faculty|Staff|Alumni",
  expiry_date: timestamp (nullable),
  is_active: boolean,
  is_pinned: boolean,
  attachments: ["url1", "url2"], // array of file URLs (nullable)
  created_by: "user_id",
  updated_by: "user_id",
  views: 0 (default)
}
```

---

## 🖼️ Posters Form

**Location:** `src/components/admin/forms/PostersForm.js`

**Table:** `posters`

**Storage Bucket:** `posters`

### Fields:
- **Poster Title*** (required) - Title of the poster
- **Description** (optional) - Poster description
- **Category*** (required) - Event, Campaign, Awareness, Recruitment, General
- **Event Date** (optional) - Associated event date
- **Expiry Date** (optional) - When poster should be removed
- **Tags** (optional) - Comma-separated tags
- **Poster Image*** (required) - The actual poster (images or PDF, max 10MB)
- **Feature on homepage** (checkbox) - Show on homepage
- **Make active** (checkbox) - Activate immediately

### How it Works:
1. Fill in poster details
2. Upload the poster image or PDF
3. Set event date if applicable
4. Set expiry date if needed
5. Check "Feature on homepage" for important posters
6. Check "Make active immediately" to publish
7. Click "Upload Poster"
8. The form will:
   - Upload poster to `posters` bucket
   - Generate thumbnail (currently using same image)
   - Convert tags to an array
   - Insert data into the `posters` table

### Database Fields Populated:
```javascript
{
  title: "string",
  description: "string" (nullable),
  category: "Event|Campaign|Awareness|Recruitment|General",
  poster_image: "url to storage",
  thumbnail_image: "url to storage",
  event_date: timestamp (nullable),
  expiry_date: timestamp (nullable),
  is_active: boolean,
  is_featured: boolean,
  tags: ["tag1", "tag2"], // array (nullable)
  created_by: "user_id",
  updated_by: "user_id",
  views: 0 (default),
  downloads: 0 (default)
}
```

---

## 🔄 Common Features Across All Forms

### 1. **Image/File Upload**
- Files are uploaded to Supabase Storage buckets
- Public URLs are generated automatically
- File size limits are enforced
- Error handling for failed uploads

### 2. **User Association**
- All posts are associated with the current authenticated user
- `created_by` field is set automatically
- `updated_by` field is set automatically

### 3. **Tags Processing**
- Tags are entered as comma-separated values
- Automatically converted to PostgreSQL arrays
- Whitespace is trimmed
- Empty tags are filtered out

### 4. **Toast Notifications**
- ✅ Success messages appear on successful submission
- ❌ Error messages appear on failures
- Auto-dismiss after 3-5 seconds
- Positioned at top-right corner

### 5. **Form Reset**
- Forms automatically reset after successful submission
- Image previews are cleared
- All fields return to default values

### 6. **Loading States**
- Submit button shows loading spinner during submission
- Button is disabled while processing
- Prevents duplicate submissions

---

## 🚨 Error Handling

All forms handle the following error scenarios:

1. **Network Errors** - Connection issues with Supabase
2. **Upload Errors** - Failed file uploads
3. **Database Errors** - Validation or constraint violations
4. **Authentication Errors** - User not logged in

Error messages are user-friendly and displayed via toast notifications.

---

## 🔐 Security Notes

1. **Authentication Required**: Users must be authenticated to submit forms
2. **RLS Enabled**: Row Level Security policies control data access
3. **File Validation**: Client-side file type and size validation
4. **SQL Injection Protected**: Parameterized queries via Supabase client
5. **Public Access**: Published content is viewable by everyone per RLS policies

---

## 📊 Viewing Submitted Data

### Via Supabase Dashboard:
1. Go to **Table Editor**
2. Select the relevant table (news, events, announcements, posters)
3. View all submitted records

### Via SQL:
```sql
-- View all news
SELECT * FROM news ORDER BY created_at DESC;

-- View published news only
SELECT * FROM news WHERE published = true;

-- View upcoming events
SELECT * FROM events WHERE status = 'upcoming' ORDER BY start_date;

-- View active announcements
SELECT * FROM announcements WHERE is_active = true;

-- View featured posters
SELECT * FROM posters WHERE is_featured = true;
```

---

## 🐛 Troubleshooting

### Issue: "Missing Supabase environment variables"
**Solution:** Check that `.env.local` contains:
```env
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

### Issue: "Image upload failed"
**Solution:** 
- Check that storage bucket exists
- Verify bucket is public
- Check file size (under limits)
- Verify file type is allowed

### Issue: "Database error"
**Solution:**
- Verify table exists
- Check RLS policies
- Ensure user is authenticated
- Check field constraints

### Issue: "created_by is null"
**Solution:**
- User must be authenticated
- Use Supabase Auth to sign in

---

## 📝 Next Steps

1. **Set up Authentication**: Implement Supabase Auth for admin users
2. **Create Admin Guard**: Protect admin routes
3. **Add Edit/Delete**: Implement update and delete functionality
4. **Add Listing Pages**: Show submitted data in admin dashboard
5. **Implement Search**: Add search and filter capabilities

---

## 🎯 Testing Checklist

Before going live, test each form:

- [ ] Submit with all required fields
- [ ] Submit with optional fields
- [ ] Upload images (various sizes)
- [ ] Upload multiple attachments
- [ ] Test with/without authentication
- [ ] Verify data appears in database
- [ ] Verify files appear in storage
- [ ] Test publish/draft functionality
- [ ] Test error scenarios
- [ ] Verify toast notifications

---

## 📞 Support

For issues or questions:
- Check the Supabase setup guide (`SUPABASE-SETUP-GUIDE.md`)
- Review the SQL schema (`supabase-schema.sql`)
- Check browser console for detailed errors
- Verify Supabase dashboard for backend issues

Happy posting! 🎉
