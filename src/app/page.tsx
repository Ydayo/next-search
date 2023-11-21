"use client";
import { ChangeEvent, useCallback, useState } from "react";

export default function Home() {
  const data: string[] = ["データ", "編集", "散歩", "プログラミング", "IT"];
  const [inputSearch, setInputSearch] = useState<string>("");
  const results = data.filter((item: string) => {
    return item.includes(inputSearch);
  });
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputSearch(e.target.value);
    },
    [setInputSearch]
  );
  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} value={inputSearch} />
        {results.map((result: string) => (
          <p key={result}>{result}</p>
        ))}
        <button>search</button>
      </form>
    </div>
  );
}
