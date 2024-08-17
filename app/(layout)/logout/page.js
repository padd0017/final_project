"use client";
import { useRouter } from 'next/navigation'; // Correct import for Next.js 14

const Logout = () => {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem('jwt');
    router.push('/');
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        className="border-2 bg-red-500 text-white p-2 rounded-lg"
      >
        Click to Logout and Redirect to Login
      </button>
    </div>
  );
};

export default Logout;
