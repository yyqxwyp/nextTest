"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathname = usePathname();
  const pathList = [
    { path: "/one", name: "one" },
    { path: "/two", name: "two" },
    { path: "/three", name: "three" },
  ];
  const accessLink = ['/', '/one', '/two', '/three']

  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto p-8 text-white">
        <Link
          className={
            pathname == "/"
              ? "text-3xl font-bold text-yellow-400"
              : "text-3xl font-bold"
          }
          href="/"
        >
          Home
        </Link>
        <div className="text-xl space-x-4">
          {pathList.map((item) => {
            return (
              <Link
                key={item.path}
                className={`${pathname === item.path ? "text-yellow-400" : ""}`}
                href={item.path}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
