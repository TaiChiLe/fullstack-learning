import { Auth } from '@supabase/auth-ui-react';
import supabase from './utils/supabase.ts';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export function EmployeeAuth() {
  return (
    <div>
      <h1>Sign in / Sign up</h1>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </div>
  );
}
