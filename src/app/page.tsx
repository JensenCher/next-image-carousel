import CarouselDialog from "./_components/cdialog";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start p-24">
      <div className="text-3xl font-bold text-center">Image Carousel</div>
      <div className="my-5">
        <CarouselDialog />
      </div>
    </main>
  );
}
