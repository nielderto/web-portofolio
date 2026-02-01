import Portofolio, { BibleVerse } from "@/components/Portofolio";
import PreOpener from "@/components/PreOpener";

async function fetchBibleVerse(): Promise<BibleVerse> {
  try {
    const response = await fetch("https://labs.bible.org/api/?passage=votd&type=json", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    const data = await response.json();
    if (data && data[0]) {
      return data[0];
    }
    return null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const bibleVerse = await fetchBibleVerse();

  return (
    <PreOpener>
      <Portofolio bibleVerse={bibleVerse} />
    </PreOpener>
  );
}
