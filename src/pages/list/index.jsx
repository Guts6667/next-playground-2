import React from "react";
import Link from "next/link";
export default function List() {
  return (
    <div>
      <h1>List</h1>
      <Link href={"/list/[list]"} as={"/list/words"}>Go to Static List</Link>
    </div>
  );
}
