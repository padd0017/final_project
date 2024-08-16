import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <h2>This is the homepage of the Crapr App.</h2>
      <Link href="/">
        <button className="NavBtn">Search</button>
      </Link>
      <Link href="/offer">
        <button className="NavBtn">Offer Crap</button>
      </Link>
      <Link href="/mine">
      <button className="NavBtn">My Crap</button>
      </Link>
      <Link href="/wiped">
      <button className="NavBtn">Wiped</button>
      </Link>
      <Link href="/logout">
      <button className="NavBtn">Logout</button>
      </Link>
  
    </div>
  );
};

export default Navbar;
