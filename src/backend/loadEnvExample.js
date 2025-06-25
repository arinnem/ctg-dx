// Example Node.js script to load and print env variables from .env.local
require('dotenv').config({ path: '.env.local' });

console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY);
console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY); 
console.log('SUPABASE_PUBLIC_KEY:', process.env.SUPABASE_PUBLIC_KEY); 
console.log('SUPABASE_PERSONAL_ACCESS_TOKEN:', process.env.SUPABASE_PERSONAL_ACCESS_TOKEN); 
console.log('SUPABASE_PROJECT_ID:', process.env.SUPABASE_PROJECT_ID);
