import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div>
          <Link href={'/'}>Event Management</Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} legacyBehavior>
            <a className="mr-5 hover:text-gray-900">Home</a>
          </Link>
          <Link href={"/event"} legacyBehavior>
            <a className="mr-5 hover:text-gray-900">All Events</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
