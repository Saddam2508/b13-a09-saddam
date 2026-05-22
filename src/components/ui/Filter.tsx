"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFiltered = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("type", value);
    } else {
      params.delete("type");
    }
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <div>
      <select
        defaultValue=""
        className="btn px-4 py-2"
        onChange={handleFiltered}
      >
        <option value="">Select a item</option>
        <option value="Football Turf">Football Turf</option>
        <option value="Badminton Court">Badminton Court</option>
      </select>
    </div>
  );
};

export default Filter;
