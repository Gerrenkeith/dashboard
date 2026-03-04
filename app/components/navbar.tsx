import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/reels">Reels</Link>
                </li>
                <li>
                    <Link href="/marketplace">Marketplace</Link>
                </li>
                <li>
                    <Link href="/events">Events</Link>
                </li>
                <li>
                    <Link href="/notifications">Notifications</Link>
                </li>
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;
