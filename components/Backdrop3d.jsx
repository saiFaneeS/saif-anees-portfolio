import Spline from "@splinetool/react-spline";

export default function Comp1() {
  return (
    <main className="fixed sm:inset-0 sm:h-screen max-sm:flex items-center justify-center h-screen max-sm:opacity-10 max-sm:-right-44 max-sm:-bottom-40">
      <div className="aspect-square mb-2">
        <Spline scene="https://prod.spline.design/rx6nqrKJaoXfkokO/scene.splinecode" />
      </div>
    </main>
  );
}
