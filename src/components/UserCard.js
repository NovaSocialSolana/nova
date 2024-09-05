"use client";

import { useRef } from "react";
import { Card, Dropdown } from "flowbite-react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export function UserCard() {
  return (
    <Card className="w-80 flex-shrink-0 bg-gray-800 border border-gray-700 rounded-lg mt-8">
      <div className="flex justify-end px-4 pt-0">
        <Dropdown inline label="">
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Export Data
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center">
        <img
          alt="Bonnie image"
          src="https://i.postimg.cc/dtB99V3m/E92c5es-WYAE4-TQV.jpg"
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-white">MemeCoiner</h5>
        <span className="text-sm text-gray-400">Top Trader</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-indigo-500 hover:bg-indigo-400 px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </Card>
  );
}

export function UserCardRow() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 h-12 w-12 text-lg bg-gray-900 bg-opacity-75 text-white rounded-full flex items-center justify-center hover:bg-gray-700"
        onClick={scrollLeft}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-x-4 overflow-x-auto scroll-smooth hide-scrollbar max-w-full px-4"
      >
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 h-12 w-12 text-lg bg-gray-900 bg-opacity-75 text-white rounded-full flex items-center justify-center hover:bg-gray-700"
        onClick={scrollRight}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
