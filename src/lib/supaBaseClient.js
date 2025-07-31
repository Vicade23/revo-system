import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uqtgmvvolpqzjqtqmiyz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxdGdtdnZvbHBxempxdHFtaXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MDQ3NzQsImV4cCI6MjA2OTQ4MDc3NH0.XglUX5s-psKDYdYbj4S3Y5cgghzJJJj6InjJfnd6mwA';
console.log(supabaseUrl)

export const supabase = createClient(supabaseUrl, supabaseKey)