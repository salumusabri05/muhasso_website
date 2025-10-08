import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export const useSupabaseData = (tableName, options = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { columns = '*', filters = {}, orderBy = {} } = options;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Start the query
        let query = supabase.from(tableName).select(columns);
        
        // Add filters if any
        Object.entries(filters).forEach(([column, value]) => {
          query = query.eq(column, value);
        });
        
        // Add order by if specified
        if (orderBy.column) {
          query = query.order(orderBy.column, { ascending: orderBy.ascending });
        }
        
        // Execute the query
        const { data, error } = await query;
        
        if (error) throw error;
        
        setData(data || []);
      } catch (err) {
        setError(err);
        console.error(`Error fetching data from ${tableName}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tableName, JSON.stringify(filters), JSON.stringify(orderBy), columns]);

  return { data, loading, error };
};
