'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const SupabaseExample = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'your_table_name' with the actual table name in your Supabase project
    const fetchData = async () => {
      try {
        setLoading(true);
        // This is an example query - replace with your actual table name
        const { data, error } = await supabase
          .from('your_table_name')
          .select('*')
          .limit(10);

        if (error) throw error;
        setData(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center p-4">Loading data...</div>;
  
  if (error) return (
    <div className="text-center p-4 text-red-500">
      Error: {error}
      <p className="text-sm text-gray-600 mt-2">
        Make sure you&apos;ve set up your Supabase credentials in .env.local and created a table in your Supabase project.
      </p>
    </div>
  );

  if (data.length === 0) return (
    <div className="text-center p-4">
      No data found. Make sure your table exists and has data.
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Data from Supabase</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key} className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                {Object.values(item).map((value, idx) => (
                  <td key={idx} className="px-4 py-2 border-t">
                    {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupabaseExample;
