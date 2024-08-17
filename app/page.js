"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

export default function Auth() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URL(window.location.href);
    const token = urlParams.searchParams.get("token");

    console.log({tokenaagya: token});

    if (token) {
      localStorage.setItem('jwt', token);
      router.push('/home'); 
    } else {
      router.push('/');
    }
  }, [router]); 

  return (
    <div className="h-full">
      <a
        href="https://craper-backend-project.onrender.com/auth/google"
        className="border-2 bg-blue-500 text-white p-2 rounded-lg"
      >
        Click to Sign in with Google
      </a>
    </div>
  );
}
