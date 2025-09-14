import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mqyiukfhqujgvcylhcej.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xeWl1a2ZocXVqZ3ZjeWxoY2VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxNDAxOTUsImV4cCI6MjA3MTcxNjE5NX0.ybQBhpY_8MnQipsBM1t_rrktBM48Pwbd2WXVK7QqFHU'
export const supabase = createClient(supabaseUrl, supabaseKey)