import { useNavbar } from "@/context/Navbar";
import Spline from "@splinetool/react-spline";

export default function Backdrop3d() {
  return (
    <main
      className={`fixed inset-0 h-[110vh] animate-in slide-in-from-bottom-20 rounded-full max-sm:opacity-60 transition-all ease-in-out duration-300`}
    >
      <Spline scene="https://prod.spline.design/p2D4gDqRotM7at4G/scene.splinecode" />
    </main>
  );
}
