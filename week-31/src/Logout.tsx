import supabase from './utils/supabase.ts';

export function Logout() {
  const onClick = () => {
    supabase.auth.signOut();
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={onClick}>Logout</button>
    </div>
  );
}
