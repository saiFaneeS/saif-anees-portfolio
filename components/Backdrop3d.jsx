import { useNavbar } from "@/context/Navbar";
import Spline from "@splinetool/react-spline";

export default function Backdrop3d() {
  const { isActive } = useNavbar();

  return (
    <main className={`fixed inset-0 h-[110vh] animate-in slide-in-from-bottom-20 rounded-full opacity- max-sm:opacity-60 ${isActive ? "scale-110" : "scale-100"} transition-all ease-in-out duration-300`}>
      <Spline scene="https://prod.spline.design/p2D4gDqRotM7at4G/scene.splinecode" />
    </main>
  );
}
