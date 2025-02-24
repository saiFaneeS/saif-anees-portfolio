import Spline from "@splinetool/react-spline";

export default function Comp1() {
  return (
    // <main className="fixed sm:inset-0 sm:h-screen max-sm:flex items-center justify-center h-screen max-sm:opacity-10 max-sm:-right-44 max-sm:-bottom-40">
    <main className="fixed inset-0 h-[110vh] animate-in fade-in-10 rounded-full">
        <Spline scene="https://prod.spline.design/tV6kzlGcCKFrt83g/scene.splinecode" />
    </main>
  );
}
