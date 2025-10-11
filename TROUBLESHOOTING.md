# 🔧 Troubleshooting: "Error fetching events" 

## Problem
You're seeing this console error:
```
Error fetching events: {}
```

## Root Cause
The Supabase environment variables are **NOT configured** in your `.env.local` file.

## ✅ Quick Fix (3 Steps)

### 1. Create `.env.local` file
```powershell
# In PowerShell, run this in the project root:
Copy-Item .env.local.example .env.local
```

### 2. Add your Supabase credentials

Edit `.env.local` and add your actual Supabase values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Where to find these?**
- Login to [Supabase](https://app.supabase.com/)
- Select your project → Settings → API
- Copy **Project URL** and **anon/public key**

### 3. Restart the dev server
```powershell
# Press Ctrl+C to stop the server
# Then restart:
npm run dev
```

## Database Schema Update (Fixed!)

I've updated all components to match your actual database schema:

### Events Table Field Mapping:
- ✅ `start_date` (not `event_date`)
- ✅ `start_time` and `end_time` (not `event_time`)
- ✅ `max_participants` (not `max_attendees`)
- ✅ `current_participants` (tracks registrations)
- ✅ `registration_link` (checked instead of `registration_open`)
- ✅ `published` flag (only shows published events)

## What Changed?

I've updated both `Events.js` and event detail pages with:

✅ **Correct field names** - Matches your database schema exactly  
✅ **Better error handling** - Won't crash if database connection fails  
✅ **Clear error messages** - Shows exactly what went wrong  
✅ **Retry button** - Users can try again without refreshing  
✅ **Graceful fallback** - Shows empty state instead of breaking  
✅ **Published filter** - Only fetches published events

## Verify It Works

After setting up `.env.local`, you should see:
- ✅ No console errors
- ✅ Events load from Supabase with correct dates and times
- ✅ Registration status shows when `registration_link` exists
- ✅ Participant count displays correctly
- ✅ Or a friendly "No events yet" message if tables are empty

## Still Not Working?

Check:
1. ✅ Database tables exist with correct schema (`events` table)
2. ✅ Table has the correct columns: `start_date`, `start_time`, `end_time`, `max_participants`, etc.
3. ✅ RLS policies allow SELECT for anonymous users on published events
4. ✅ Supabase project is active (not paused)
5. ✅ No typos in environment variable names
6. ✅ Events have `published = true` in the database
