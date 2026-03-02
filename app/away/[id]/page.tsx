import { matches } from "@/app/data/matches";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AwayPage({ params }: Props) {
  const { id } = await params;

  const match = matches.find((m) => m.id === id);

  if (!match) {
    return <div className="p-10">試合が見つかりません。</div>;
  }

  const googleMapUrl = `https://www.google.com/maps/dir/東京駅/${match.nearestStation}`;

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-2xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">vs {match.opponent}</h1>

        <p>スタジアム：{match.stadium}</p>
        <p>最寄駅：{match.nearestStation}</p>

        <hr />

        <p>東京駅 → {match.nearestStation}</p>
        <p>所要時間：{match.travelTime}</p>
        <p>費用：{match.cost}</p>

        <a
          href={googleMapUrl}
          target="_blank"
          className="inline-block mt-4 border px-4 py-2 rounded hover:bg-gray-100"
        >
          GoogleMapで経路を見る →
        </a>
      </div>
    </main>
  );
}
