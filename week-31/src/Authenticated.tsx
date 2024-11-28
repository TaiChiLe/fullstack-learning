import { useEffect, useState } from 'react';
import supabase from './utils/supabase.ts';

export function Authenticated(props) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <div>Dude, you are not authorized!</div>;
  } else {
    return props.children;
  }
}
