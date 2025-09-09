import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yrlxbodrsoxbwmphbdvi.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlybHhib2Ryc294YndtcGhiZHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NDgzMzgsImV4cCI6MjA3MTEyNDMzOH0.NuWvDP5au9ci6aagfJXXwZenjLM4VgZ6xp8WY6dmswM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
