type Props = {
  params: {
    id: string;
  };
};

export default function AwayPage({ params }: Props) {
  const { id } = params;

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">アウェイページ: {id}</h1>

        <p>ここに試合情報を表示します。</p>
      </div>
    </main>
  );
}
