import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://tsqgzfzritwycwstgmct.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzcWd6ZnpyaXR3eWN3c3RnbWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3NTEzMDAsImV4cCI6MjAxMzMyNzMwMH0.D5895joa53v6EkpESOaMkyFueIdMGzBGANAmwVFSOOk')