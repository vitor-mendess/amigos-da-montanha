import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const imagens = [
  "/imgs/agulhas-negras/01.jpg",
  "/imgs/agulhas-negras/02.jpg",
  "/imgs/agulhas-negras/03.jpg",
  "/imgs/agulhas-negras/04.jpg",
  "/imgs/agulhas-negras/05.jpg",
  "/imgs/agulhas-negras/06.jpg",
  "/imgs/agulhas-negras/07.jpg",
  "/imgs/agulhas-negras/08.jpg",
  "/imgs/agulhas-negras/09.jpg",
  "/imgs/agulhas-negras/10.jpg",
  "/imgs/agulhas-negras/11.jpg",
  "/imgs/agulhas-negras/12.jpg",
  "/imgs/agulhas-negras/13.jpg",
  "/imgs/agulhas-negras/14.jpg",
  "/imgs/agulhas-negras/15.jpg",
  "/imgs/agulhas-negras/16.jpg",
  "/imgs/agulhas-negras/17.jpg",
  "/imgs/agulhas-negras/18.jpg",
  "/imgs/agulhas-negras/19.jpg",
  "/imgs/agulhas-negras/20.jpg",
  "/imgs/agulhas-negras/21.jpg",
  "/imgs/agulhas-negras/22.jpg",
  "/imgs/agulhas-negras/23.jpg",
  "/imgs/agulhas-negras/24.jpg",
  "/imgs/agulhas-negras/25.jpg",
  "/imgs/agulhas-negras/26.jpg",
];

export default function AgulhasNegras() {
  const [indiceImagem, setIndiceImagem] = useState<number | null>(null);

const abrirImagem = (index: number) => setIndiceImagem(index);
const fecharImagem = () => setIndiceImagem(null);

const proximaImagem = () => {
  if (indiceImagem !== null) setIndiceImagem((indiceImagem + 1) % imagens.length);
};

const imagemAnterior = () => {
  if (indiceImagem !== null) setIndiceImagem((indiceImagem - 1 + imagens.length) % imagens.length);
};
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="h-[80vh] bg-cover bg-center relative flex items-end"
        style={{
          backgroundImage: "url('/imgs/agulhas-negras/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Moderada • 1 dia • 2792m
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Pico das Agulhas Negras
          </h1>

          <a
            href="https://wa.me/5524988418212"
            target="_blank"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full text-lg font-bold transition"
          >
            <FaWhatsapp className="text-2xl" />
            Quero participar
          </a>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-[#E8D6B3] py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {/* O QUE FAREMOS */}
          <div>
            <h2 className="text-4xl font-extrabold mb-8">O que faremos</h2>

            <div className="space-y-6 text-lg leading-relaxed text-[#1C1C1C]">
              <p>
                A trilha tem início no <strong>Abrigo Rebouças</strong>, onde
                caminharemos por áreas de <strong>Campos de Altitude</strong> que
                somam aproximadamente <strong>1,3km</strong> até a base das
                Agulhas Negras.
              </p>

              <p>
                As vias mais acessíveis são a <strong>Via Pontão</strong> e a
                <strong> Via Normal</strong>, e o tempo total de subida varia de
                acordo com o ritmo e experiência do grupo.
              </p>

              <p>
                Os <strong>2.792 metros de altitude</strong> são conquistados em
                três etapas bem definidas.
              </p>

              <p>
                A primeira é uma caminhada leve, com pouco desnível, até o
                riacho que limita a base das Agulhas. A segunda exige mais preparo
                físico, com cerca de <strong>800m</strong> e um desnível de
                aproximadamente <strong>200m</strong>, incluindo trecho com
                <strong> uso de corda</strong> para quem segue pela Via Pontão.
              </p>

              <p>
                A etapa final é uma <strong>escalaminhada</strong>, também
                conhecida como <strong>trepa-pedra</strong>. Por ser mais técnica,
                normalmente é realizada em um ritmo mais controlado até o cume.
              </p>
            </div>
          </div>

          {/* DADOS DA TRILHA */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { valor: "11km", label: "Distância" },
              { valor: "2792m", label: "Altitude" },
              { valor: "8h", label: "Duração" },
              { valor: "Médio", label: "Esforço" },
              { valor: "Médio", label: "Exposição" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-[#9C3F1A]">
                  {item.valor}
                </p>
                <p className="text-sm font-semibold tracking-wide uppercase mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* GALERIA */}
<div>
  <h2 className="text-4xl font-extrabold mb-10">Galeria</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {imagens.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Circuito Couto ${index + 1}`}
        onClick={() => abrirImagem(index)}
        className="cursor-pointer rounded-2xl object-cover h-64 w-full hover:scale-[1.03] transition"
      />
    ))}
  </div>
</div>

{/* LIGHTBOX */}
{indiceImagem !== null && (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
    <button className="absolute top-5 right-5 text-white text-3xl" onClick={fecharImagem}>
      <FaTimes />
    </button>

    <button className="absolute left-5 text-white text-4xl hover:text-gray-300" onClick={imagemAnterior}>
      <FaArrowLeft />
    </button>

    <img
      src={imagens[indiceImagem]}
      className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
    />

    <button className="absolute right-5 text-white text-4xl hover:text-gray-300" onClick={proximaImagem}>
      <FaArrowRight />
    </button>
  </div>
)}


          {/* INCLUSO / NÃO INCLUSO */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">O que está incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Consultoria técnica</li>
                <li>Guia especializado</li>
                <li>Equipamentos</li>
              </ul>

              <p className="text-sm mt-6 italic text-gray-600">
                * Temos algumas vagas no nosso carro para pessoas que não possuem
                transporte até a portaria do PNI. Valor cobrado para ajudar nos
                gastos.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">Não incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Alimentação</li>
                <li>Entrada do PNI</li>
                <li>Vestuário</li>
                <li>Despesas pessoais</li>
                <li>Medicamentos pessoais</li>
                <li>Passeios não descritos</li>
              </ul>
            </div>
          </div>


          {/* RECOMENDAÇÕES */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10">Recomendações</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Alimentação</strong>
                <p className="mt-2">
                  Sanduíches, chocolates, barras de cereais, frutas e lanches.
                  Recomendamos alimentação de 1h em 1h.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Hidratação</strong>
                <p className="mt-2">
                  Recipiente com no mínimo 1,5L de água, isotônicos ou sucos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Vestimenta</strong>
                <p className="mt-2">
                  Agasalhos em camadas, segunda pele, anorak, bota ou tênis de
                  trilha já amaciado, gorro e luvas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Acessórios</strong>
                <p className="mt-2">
                  Protetor solar, capa de chuva, lanterna, kit de primeiros
                  socorros e remédios pessoais.
                </p>
              </div>
            </div>
          </div>


          {/* VALORES E HORÁRIOS */}
<div className="rounded-3xl p-10 shadow-md text-center bg-[#E8D6B3]">
  <h2 className="text-4xl font-extrabold mb-6 text-[#1C1C1C]">
    Valores e horários
  </h2>

  <p className="text-lg mb-8 text-[#1C1C1C]">
    Clique abaixo para consultar valores, formas de pagamento e horários de saída.
  </p>

  <a
    href="https://agenda-am.lovable.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#9C3F1A] text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition"
  >
    Clique aqui para saber mais
  </a>
</div>

        </div>
      </section>



      <Footer />
    </>
  );
}
