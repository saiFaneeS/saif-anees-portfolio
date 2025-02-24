import Spline from "@splinetool/react-spline";

export default function Backdrop3d() {
  return (
    <main className="fixed inset-0 h-[110vh] animate-in slide-in-from-bottom-20 rounded-full max-sm:opacity-60">
      <Spline scene="https://prod.spline.design/tV6kzlGcCKFrt83g/scene.splinecode" />
    </main>
  );
}
