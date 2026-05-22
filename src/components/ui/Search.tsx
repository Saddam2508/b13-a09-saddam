"use client";
import { Label, SearchField } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (searchInput) {
      params.set("search", searchInput);
    } else {
      params.delete("search");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center">
      <SearchField name="search">
        <Label>Search</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            className="w-[250px]"
            placeholder="Search..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
      <button onClick={handleSearch} className="btn">
        Search
      </button>
    </div>
  );
};

export default Search;
