import Link from "next/link";
import { matches } from "@/app/data/matches";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">いわきFC アウェイ遠征ガイド</h1>

        <p className="mb-8 text-lg text-gray-600">
          東京駅からアウェイ試合へ行く方法をまとめています。
          <br />
          3分で遠征計画が立てられるサイトを目指しています。
        </p>

        <div className="space-y-4">
          {matches.map((match) => (
            <Link
              key={match.id}
              href={`/away/${match.id}`}
              className="block border rounded-lg p-4 hover:bg-gray-100 transition"
            >
              {match.opponent} 戦を見る →
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
