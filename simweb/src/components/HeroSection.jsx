import EarthModel from "../threeD/EarthModel";

export default function HeroSection() {
  return (
    <section className="h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="w-full h-[400px]">
        <EarthModel />
      </div>
      <h1 className="text-4xl font-bold mt-4">Innovating the Future</h1>
    </section>
  );
}
