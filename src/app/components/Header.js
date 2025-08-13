import React from 'react';
import Image from 'next/image';
import { Menu } from 'react-feather';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="container mx-auto">
            <nav className="border-gray-200 bg-white dark:bg-gray-900">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <Image
                            src="/first-logo.png"
                            alt="Logo"
                            width={100}
                            height={50}
                        />
                    </Link>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu />
                    </button>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-primary block px-3 py-2 text-black no-underline md:border-0 md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-primary block px-3 py-2 text-black no-underline md:border-0 md:p-0"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blogs"
                                    className="hover:text-primary block px-3 py-2 text-black no-underline md:border-0 md:p-0"
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary block px-3 py-2 text-black no-underline md:border-0 md:p-0"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-primary block px-3 py-2 text-black no-underline md:border-0 md:p-0"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
