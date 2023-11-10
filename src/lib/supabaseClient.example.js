import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://xxx.supabase.co', 'anon_key')