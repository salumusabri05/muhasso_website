# Supabase Integration Guide for MUHASSO Website

This guide explains how to connect your Next.js application to Supabase for data management.

## Setup Steps

1. Create a Supabase account and project at [https://supabase.com](https://supabase.com)

2. Get your Supabase URL and anon key from your project settings:
   - Go to your Supabase project dashboard
   - Click on the "Settings" icon (gear icon)
   - Select "API" from the sidebar
   - Copy the "URL" and "anon" key

3. Update your `.env.local` file with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Create tables in your Supabase database:
   - Go to your Supabase project dashboard
   - Click on "Table editor"
   - Create new tables as needed for your application

## Using Supabase in the Project

### Basic Data Fetching

The project includes a custom hook `useSupabaseData` that simplifies fetching data:

```javascript
import { useSupabaseData } from '@/lib/hooks/useSupabaseData';

// Inside your component
const { data, loading, error } = useSupabaseData('your_table_name', {
  columns: 'id, name, created_at',
  filters: { status: 'active' },
  orderBy: { column: 'created_at', ascending: false }
});
```

### Direct Query Example

You can also use the Supabase client directly:

```javascript
import { supabase } from '@/lib/supabase';

// Inside an async function
const fetchData = async () => {
  const { data, error } = await supabase
    .from('your_table_name')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  
  console.log('Data:', data);
};
```

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Next.js with Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
