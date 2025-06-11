import { useEffect, useState } from "react";

type Ukol = {
  Id: number;
  Nazev: string;
  Datum: string;
  Hotovo: boolean;
  Smazano: boolean;
};

export default function Ukolnicek() {
  const [ukoly, setUkoly] = useState<Ukol[]>([]);

  useEffect(() => {
    fetch("/api/ukoly")
      .then((res) => res.json())
      .then(setUkoly);
  }, []);

  return (
    <main>
      <h1>📝 Můj Úkolníček</h1>
      <ul>
        {ukoly.map((u) => (
          <li key={u.Id}>
            {u.Hotovo ? "✅ " : "⬜ "} {u.Nazev} - {new Date(u.Datum).toLocaleString()}
          </li>
        ))}
      </ul>
    </main>
  );
}
