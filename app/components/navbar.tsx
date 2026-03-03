import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/dashboard/sports">Sports</Link>
        </nav>
    </div>
  );
};

export default Navbar;
