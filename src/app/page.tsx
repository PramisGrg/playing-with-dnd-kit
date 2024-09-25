import { List, Item } from "@/components/List";
import rawData from "../../db/data.json";

interface RawData {
  data: {
    id: number;
    artist: string;
    title: string;
    sequence: number;
  }[];
}

export default async function Home() {
  const typedData: RawData = rawData;

  const items: Item[] = typedData.data.map((item) => ({
    id: item.id,
    artist: item.artist,
    title: item.title,
    sequence: item.sequence,
  }));

  return (
    <main className="flex min-h-dvh p-8">
      <List data={items} />
    </main>
  );
}
