import { Link } from "react-router-dom";
import { MagnifyingGlassPlus } from "phosphor-react";
import LogoImg from "../public/assets/Logo.png";
import Button from "@/components/Button";

function App() {
  return (
    <div className="max-w-[1344px] min-h-screen w-full flex flex-col items-center mx-auto my-6 px-5 md:my-20 md:px-0">
      <img src={LogoImg} alt="logo" />

      <h1 className="mt-20 text-center text-3xl md:text-[4rem] text-white">
        Seu
        <span className="font-black bg-blend-normal text-transparent bg-clip-text bg-nlw-gradient">
          {" "}
          duo
        </span>{" "}
        está aqui
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-6 mt-16">
        <Link to="/jogo" className="relative rounded-lg overflow-hidden">
          <img src="assets/image1.png" alt="" className="object-cover w-full" />

          <div className="absolute bottom-0 w-full h-fit bg-game-gradient pb-4 pt-16 px-4">
            <strong className="font-bold text-base text-white capitalize leading-[19px] block">
              League Of Legendes{" "}
            </strong>
            <span className="text-zinc-400 text-sm mt-2">4 anúncios</span>
          </div>
        </Link>
      </div>

      <div className="rounded-lg  w-full pt-1 bg-nlw-gradient mt-8">
        <div className="relative  flex items-center justify-between  py-6 px-8  bg-[#2A2634] ">
          <div className="flex flex-col">
            <strong className="font-black text-2xl leading-[38px] text-white">
              Não encontro seu duo?
            </strong>
            <p className="text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </p>
          </div>
          <Button
            title="Publicar anúncio"
            icon={<MagnifyingGlassPlus size={24} />}
            variant="purple"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
