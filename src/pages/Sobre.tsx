import Header from "../components/Header";
import Footer from "../components/Footer";

import { FaPhoneAlt, FaDollarSign, FaUserFriends } from "react-icons/fa";

// IMAGENS
import heroImg from "../assets/sobre/sobre1.jpg";
import sobre2 from "../assets/sobre/sobre2.jpg";
import sobre3 from "../assets/sobre/sobre3.jpg";
import sobre4 from "../assets/sobre/sobre4.jpg";
import sobre5 from "../assets/sobre/sobre5.jpg";

import guia1 from "../assets/guias/guia1.jpeg"; // Roberto
import guiaLuis from "../assets/guias/guia2.jpeg"; // Luis

export default function Sobre() {
  const guias = [
    {
      id: 1,
      nome: "Roberto Soares",
      descricao:
        "Engenheiro Eletricista, apaixonado por sua esposa Michele e pai de três meninas. Aventureiro de coração, iniciou suas primeiras escaladas em meados da década de 90. Conquistou algumas vias de escalada importantes na região.",
      img: guia1,
    },
    {
      id: 2,
      nome: "Luís Felipe Almeida",
      descricao:
        "Luís Felipe Almeida dos Santos é guia de montanha, fotógrafo de natureza e produtor de conteúdo especializado em paisagens e esportes outdoor. Atua desde 2015 em expedições por algumas das montanhas mais desafiadoras e icônicas do Brasil, com ênfase na Serra da Mantiqueira, Serra da Bocaina e Serra do Mar.",
      img: guiaLuis,
    },
  ];

  return (
    <>
      <Header />

      {/* HERO */}
<section className="bg-[#E8D6B3] py-32">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-[#1C1C1C] leading-tight">
      Supere seus desafios <br /> conosco
    </h1>

    <div className="w-24 h-1 bg-[#9C3F1A] mx-auto mb-8 rounded-full" />

    <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
      Para quem quer serviço de qualidade e segurança!
    </p>
  </div>
</section>



      {/* SOBRE / TEXTO */}
      <section className="py-24 bg-[#E8D6B3] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* TEXTO */}
          <div className="space-y-6 text-[#1C1C1C]">
            <h2 className="text-3xl md:text-4xl font-bold">
              Segurança, experiência e respeito à natureza
            </h2>

            <p className="text-lg font-semibold">
              25 anos de experiência no Parque Nacional do Itatiaia
            </p>

            <p className="text-lg leading-relaxed">
              Em um mercado de turismo em constante mudança, às vezes pode ser
              difícil encontrar um parceiro de confiança. E quando você analisa
              os serviços de uma agência, tem que levar em consideração vários
              aspectos – experiência, diversidade, preços, opiniões de outros
              turistas.
            </p>

            <p className="text-lg leading-relaxed">
              Nascido na região de Itatiaia, o Amigos da Montanha é um coletivo
              de guias locais apaixonados pela natureza e por aventura de todos
              os tamanhos e níveis de experiência.
            </p>

            <p className="border-l-4 border-[#1C1C1C] pl-4 text-lg">
              Acreditamos que atravessar paisagens de tirar o fôlego e conquistar
              um cume, é mais do que um passeio, é um momento inesquecível para
              se levar.
            </p>

            {/* ÍCONES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-10">
              <div className="flex flex-col items-center text-center">
                <FaPhoneAlt className="text-4xl mb-4" />
                <p className="font-medium">
                  Disponível para assistência
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaDollarSign className="text-4xl mb-4" />
                <p className="font-medium">
                  Preços acessíveis
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaUserFriends className="text-4xl mb-4" />
                <p className="font-medium">
                  Os clientes são o centro de nossa missão
                </p>
              </div>
            </div>
          </div>

          {/* IMAGENS */}
          <div className="grid grid-cols-2 gap-6">
            <img src={sobre2} className="rounded-3xl h-60 object-cover" />
            <img src={sobre3} className="rounded-3xl h-60 object-cover mt-10" />
            <img src={sobre4} className="rounded-3xl h-60 object-cover" />
            <img src={sobre5} className="rounded-3xl h-60 object-cover mt-10" />
          </div>
        </div>
      </section>

      {/* GUIAS */}
      <section className="py-24 bg-[#E8D6B3] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
  Conheça seu condutor de aventura
        </h2>

      <p className="text-lg text-[#1C1C1C] mb-16">
  Trabalhamos para fornecer a você as melhores experiências.
      </p>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {guias.map((guia) => (
              <div key={guia.id} className="flex flex-col items-center">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-[#1C1C1C]">
                  <img
                    src={guia.img}
                    alt={guia.nome}
                    className="w-full h-full object-cover hover:scale-110 transition"
                  />
                </div>

                <h3 className="mt-6 font-semibold text-xl text-[#1C1C1C]">
                  {guia.nome}
                </h3>

                <p className="text-center mt-3 text-[#1C1C1C] max-w-sm">
                  {guia.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}













