import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="mx-auto min-h-screen  bg-gradient-to-b  text-white">
      {images.map((image, idx) => (
        <div key={idx} className="text-primary">
          <img src={image.url} alt={image.name} />
        </div>
      ))}
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, idx) => (
          <div key={image.id + "-" + idx} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
