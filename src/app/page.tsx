import BannerInicio from "@/Components/BannerInicio/BannerInicio";
import Menu from "@/Components/Menu/Menu";

export default function Home() {
  return (
    <div className="contenedorHome">
      <Menu title="EL NEGOCIO" />
      <BannerInicio />
    </div>
  );
}
