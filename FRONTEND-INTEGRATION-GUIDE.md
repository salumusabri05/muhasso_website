# Frontend Supabase Integration - News & Events

## Overview
This document describes how the frontend components (`News.js`, `NewsCard.js`, `Events.js`, `EventCard.js`) have been integrated with Supabase to display real-time data from the database.

---

## Components Updated

### 1. News.js - Latest News Section
**Location:** `src/components/News.js`

#### Features Added:
- ✅ Real-time data fetching from `news` table
- ✅ Loading skeleton UI (6 animated placeholder cards)
- ✅ Empty state with helpful message
- ✅ Dynamic gradient assignment for visual variety
- ✅ Pagination with "Load More" functionality
- ✅ Only shows published news (`published = true`)

#### Data Flow:
```javascript
Supabase Query:
- Table: news
- Filter: published = true
- Order: created_at DESC (newest first)
- Fetch: All published news

Display Logic:
- Initial display: 6 news items
- Click "Load More": Shows next 6 items
- Continues until all news is displayed
```

#### UI States:
1. **Loading**: Shows 6 animated skeleton cards
2. **Empty**: Shows icon + message when no news exists
3. **Data**: Shows news cards with gradient backgrounds
4. **Load More**: Button appears if more news available

---

### 2. NewsCard.js - Individual News Card
**Location:** `src/components/NewsCard.js`

#### Features Added:
- ✅ Displays featured image (with fallback to gradient)
- ✅ Category badge
- ✅ Title with smart splitting (handles colon-separated titles)
- ✅ Excerpt/description with fallback to content preview
- ✅ Tags display (first 3 tags)
- ✅ Decorative icons based on card position
- ✅ Image error handling

#### Props Schema:
```javascript
{
  news: {
    id: string,              // UUID from Supabase
    title: string,           // News title
    excerpt: string,         // Short description
    content: string,         // Full article content
    featured_image: string,  // Image URL from storage
    category: string,        // News category
    tags: array,            // Array of tag strings
    created_at: timestamp   // Creation date
  },
  index: number,            // Card position (for styling)
  gradient: string          // Tailwind gradient class
}
```

---

### 3. Events.js - Upcoming Events Section
**Location:** `src/components/Events.js`

#### Features Added:
- ✅ Real-time data fetching from `events` table
- ✅ Loading skeleton UI (3 animated placeholders)
- ✅ Empty state for no events
- ✅ Dynamic icon mapping based on event type
- ✅ Dynamic color scheme based on event type
- ✅ Registration status badges
- ✅ Date formatting (human-readable)
- ✅ Only shows upcoming events (`status = 'upcoming'`)

#### Data Flow:
```javascript
Supabase Query:
- Table: events
- Filter: status = 'upcoming'
- Order: event_date ASC (soonest first)
- Limit: 3 events

Event Type Mapping:
- 'conference' → Users icon, Blue color
- 'workshop'   → BookOpen icon, Purple color
- 'summit'     → Stethoscope icon, Green color
- 'meeting'    → Users icon, Indigo color
- 'assembly'   → Users icon, Pink color
- default      → Calendar icon, Blue color
```

#### UI States:
1. **Loading**: Shows 3 animated skeleton cards
2. **Empty**: Shows Calendar icon + message
3. **Data**: Shows up to 3 upcoming events with icons/colors

---

### 4. EventCard.js - Individual Event Card
**Location:** `src/components/EventCard.js`

#### Features Added:
- ✅ Featured image display with gradient fallback
- ✅ Event status badge (upcoming/ongoing/completed)
- ✅ Registration open badge
- ✅ Event type chip
- ✅ Date, time, location display with icons
- ✅ Max attendees indicator
- ✅ Tags display (first 3 tags)
- ✅ Dynamic action buttons (View Details + Register)
- ✅ Image error handling
- ✅ Hover animations (Framer Motion)

#### Props Schema:
```javascript
{
  event: {
    id: string,                      // UUID from Supabase
    title: string,                   // Event name
    description: string,             // Event details
    featured_image: string,          // Image URL from storage
    event_date: date,               // Date of event
    event_time: string,             // Time (HH:MM format)
    location: string,               // Venue/location
    event_type: string,             // Type: conference, workshop, etc.
    status: string,                 // upcoming/ongoing/completed
    registration_required: boolean, // If registration needed
    registration_open: boolean,     // If registration is open
    max_attendees: number,          // Max capacity
    tags: array                     // Array of tag strings
  }
}
```

---

## Database Tables Used

### News Table Schema:
```sql
Table: news
Columns:
- id (uuid, primary key)
- title (text)
- excerpt (text)
- content (text)
- featured_image (text) - URL from news-images bucket
- category (text)
- tags (text[])
- published (boolean)
- created_at (timestamp)
- updated_at (timestamp)
```

### Events Table Schema:
```sql
Table: events
Columns:
- id (uuid, primary key)
- title (text)
- description (text)
- featured_image (text) - URL from event-images bucket
- event_date (date)
- event_time (text)
- location (text)
- event_type (text)
- status (text) - 'upcoming', 'ongoing', 'completed'
- registration_required (boolean)
- registration_open (boolean)
- max_attendees (integer)
- tags (text[])
- created_at (timestamp)
- updated_at (timestamp)
```

---

## Visual Enhancements

### News Card Gradients:
Six rotating gradient combinations:
1. `from-green-400 to-blue-500`
2. `from-purple-400 via-pink-400 to-blue-400`
3. `from-blue-600 to-blue-800`
4. `from-indigo-500 to-purple-600`
5. `from-pink-500 to-rose-600`
6. `from-cyan-500 to-blue-600`

### Event Card Colors (by type):
- **Conference**: Blue (`bg-blue-600`)
- **Workshop**: Purple (`bg-purple-600`)
- **Summit**: Green (`bg-green-600`)
- **Meeting**: Indigo (`bg-indigo-600`)
- **Assembly**: Pink (`bg-pink-600`)

---

## Loading States

### News Loading:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[1, 2, 3, 4, 5, 6].map((i) => (
    <div className="animate-pulse">
      <div className="h-64 bg-gray-300"></div>
      <div className="p-6 space-y-3">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  ))}
</div>
```

### Events Loading:
```jsx
{[1, 2, 3].map((i) => (
  <div className="animate-pulse p-6">
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
      <div className="flex-1 space-y-3">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
))}
```

---

## Empty States

### News Empty State:
```jsx
<div className="text-center py-16">
  <FileText className="h-16 w-16 text-gray-400" />
  <p className="text-gray-600 text-lg">No news available</p>
  <p className="text-gray-400 text-sm">Check back soon!</p>
</div>
```

### Events Empty State:
```jsx
<div className="text-center p-12">
  <Calendar className="h-16 w-16 text-gray-400" />
  <p className="text-gray-600 text-lg">No upcoming events</p>
  <p className="text-gray-400 text-sm">Check back soon!</p>
</div>
```

---

## Error Handling

### Image Loading Errors:
Both NewsCard and EventCard include image error handling:

```javascript
const [imageError, setImageError] = useState(false);

// In Image component:
onError={() => setImageError(true)}

// Fallback rendering:
{event.featured_image && !imageError ? (
  <Image src={event.featured_image} ... />
) : (
  <div className="gradient-fallback">
    <Calendar className="icon" />
  </div>
)}
```

### Supabase Query Errors:
```javascript
try {
  const { data, error } = await supabase.from('news').select('*');
  if (error) throw error;
  setNewsItems(data);
} catch (error) {
  console.error('Error fetching news:', error);
  // Component shows empty state
}
```

---

## Performance Optimizations

### 1. Lazy Loading (News):
- Initial load: Only 6 news items displayed
- User action: Click "Load More" to fetch next batch
- Prevents overwhelming UI with hundreds of items

### 2. Limited Queries (Events):
- Only fetches 3 upcoming events
- Reduces data transfer and rendering time
- "View All Events" button for full listing

### 3. Image Optimization:
- Uses Next.js Image component
- Automatic image optimization
- Lazy loading of images
- Responsive image sizes

### 4. Conditional Rendering:
- Loading state prevents layout shift
- Empty states provide immediate feedback
- Skeleton screens match final layout

---

## Responsive Design

### News Grid:
```css
grid-cols-1        /* Mobile: 1 column */
md:grid-cols-2     /* Tablet: 2 columns */
lg:grid-cols-3     /* Desktop: 3 columns */
```

### Events Layout:
```css
grid-cols-1        /* Mobile: Stacked */
lg:grid-cols-2     /* Desktop: 2 columns (left panel + right cards) */
```

---

## Testing Checklist

### News Component:
- [ ] News items load from Supabase
- [ ] Loading skeleton appears during fetch
- [ ] Empty state shows when no published news
- [ ] Only published news is displayed
- [ ] News sorted by newest first
- [ ] "Load More" button appears when > 6 items
- [ ] "Load More" loads additional 6 items
- [ ] Images display correctly (or fallback gradient)
- [ ] Tags display correctly (max 3)
- [ ] Category badges show correct category

### Events Component:
- [ ] Events load from Supabase
- [ ] Loading skeleton appears during fetch
- [ ] Empty state shows when no upcoming events
- [ ] Only upcoming events displayed
- [ ] Events sorted by date (soonest first)
- [ ] Max 3 events shown
- [ ] Icons match event types
- [ ] Colors match event types
- [ ] Registration badge shows when applicable
- [ ] Dates format correctly (human-readable)

### EventCard Component:
- [ ] Featured images display (or gradient fallback)
- [ ] Status badge shows correct status
- [ ] Registration badge shows when open
- [ ] Event type chip displays
- [ ] Date/time/location all show correctly
- [ ] Max attendees displays when set
- [ ] Tags display (max 3)
- [ ] "Register" button shows when registration open
- [ ] Hover animation works smoothly

---

## Future Enhancements

### Phase 1 (High Priority):
1. **Individual Article Pages**: Click "Read More" → full article page
2. **Individual Event Pages**: Click "View Details" → full event page
3. **Search & Filter**: Search news by title, filter by category
4. **Event Registration**: Functional registration form

### Phase 2 (Medium Priority):
1. **Real-Time Updates**: Supabase subscriptions for live updates
2. **Infinite Scroll**: Replace "Load More" with auto-load on scroll
3. **Social Sharing**: Share buttons for news and events
4. **Calendar Integration**: Add to Google Calendar, iCal

### Phase 3 (Low Priority):
1. **Comments System**: User comments on news articles
2. **Event Reminders**: Email/SMS reminders for events
3. **Related Content**: "You might also like" suggestions
4. **Analytics**: Track views, clicks, engagement

---

## Troubleshooting

### Issue: News/Events not loading
**Check:**
1. Supabase connection (`.env.local` configured?)
2. Table names match exactly: `news`, `events`
3. RLS policies allow public SELECT on published items
4. Browser console for Supabase errors

### Issue: Images not displaying
**Check:**
1. Storage buckets exist: `news-images`, `event-images`
2. Bucket policies allow public read
3. Image URLs are valid and accessible
4. Image file extensions supported (jpg, png, webp)

### Issue: Empty state showing despite data
**Check:**
1. News: `published = true` in database?
2. Events: `status = 'upcoming'` in database?
3. Date format correct in database (YYYY-MM-DD)?
4. RLS policies not blocking data?

---

## Dependencies

### Required Packages:
```json
{
  "@supabase/supabase-js": "^2.x",
  "next": "^14.x",
  "react": "^18.x",
  "framer-motion": "^10.x",
  "lucide-react": "^0.x"
}
```

### Environment Variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## Support

For issues or questions:
1. Check Supabase dashboard for data
2. Verify RLS policies in Supabase SQL Editor
3. Check browser console for errors
4. Ensure all environment variables are set

---

*Frontend Integration Complete* ✅  
*Last Updated: October 11, 2025*
