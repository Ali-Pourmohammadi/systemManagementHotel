/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://uslbsswtdsqvidiakgel.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzbGJzc3d0ZHNxdmlkaWFrZ2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3NDk2MzYsImV4cCI6MjAyNDMyNTYzNn0.V0AndsLljSlXBb0yFqlDl9meXQc9HmN1g2HSR122Bh0'
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;