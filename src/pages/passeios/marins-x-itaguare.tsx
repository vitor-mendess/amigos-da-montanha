import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const imagens = [
  "/imgs/marins-itaguare/01.jpeg",
  "/imgs/marins-itaguare/02.jpeg",
  "/imgs/marins-itaguare/03.jpeg",
  "/imgs/marins-itaguare/04.jpg",
  "/imgs/marins-itaguare/05.jpg",
  "/imgs/marins-itaguare/06.jpg",
  "/imgs/marins-itaguare/07.jpg",
  "/imgs/marins-itaguare/08.jpg",
  "/imgs/marins-itaguare/09.jpg",

];

export default function MarinsItaguare() {
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
          backgroundImage: "url('/imgs/marins-itaguare/hero.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Travessia • 3 dias • 21,5km
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Marins x Itaguaré
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

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                A <strong>Travessia Marins–Itaguaré</strong> é uma das caminhadas
                mais conhecidas e desafiadoras da <strong>Serra da Mantiqueira</strong>,
                ligando dois picos marcantes da região: o{" "}
                <strong>Pico dos Marins</strong> (2.420 m) e o{" "}
                <strong>Pico do Itaguaré</strong> (2.308 m).
              </p>

              <p>
                Durante o percurso passamos por cristas de pedra, trechos de mata,
                lajes de granito e diversos pontos de visual aberto, com vistas
                para a <strong>Serra Fina</strong>, o <strong>Vale do Paraíba</strong>
                e, em dias limpos, até para a <strong>Serra do Mar</strong>.
              </p>

              <p>
                É uma travessia que exige preparo físico e experiência em
                caminhada de montanha, mas recompensa com paisagens amplas e
                contato direto com a natureza.
              </p>

              <p>
                O <strong>Pico do Itaguaré</strong> possui encostas íngremes e
                seu nome, de origem tupi, pode significar “pedra sagrada” ou
                “pedra rachada”. A região também é conhecida por relatos de luzes
                vistas à noite, geralmente explicadas por fenômenos naturais.
              </p>

              <p className="italic text-gray-700">
                Importante: o itinerário pode ser alterado conforme condições
                climáticas, logística, desempenho do grupo ou decisões
                administrativas locais.
              </p>
            </div>
          </div>

          {/* DADOS TÉCNICOS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { valor: "21,5 km", label: "Distância" },
              { valor: "3 dias", label: "Duração" },
              { valor: "+1.900 m", label: "Desnível +" },
              { valor: "Alta", label: "Exigência física" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-[#9C3F1A]">
                  {item.valor}
                </p>
                <p className="text-sm uppercase font-semibold mt-2">
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


          {/* EQUIPAMENTOS */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">
                Equipamentos obrigatórios
              </h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Mochila cargueira (mínimo 45L)</li>
                <li>Saco de dormir conforto 0°C</li>
                <li>Barraca e isolante térmico</li>
                <li>Lanterna de cabeça ou de mão</li>
                <li>Capacidade mínima de 5L de água</li>
                <li>Poncho ou capa de chuva</li>
                <li>Remédios pessoais</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">
                Equipamentos recomendados
              </h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Kit de higiene pessoal</li>
                <li>Fogareiro, gás, panela, talheres e copo</li>
                <li>Bota de trekking e meias extras</li>
                <li>Calça de trekking e camisetas manga longa</li>
                <li>Anorak</li>
                <li>Segunda pele, fleece ou pluma</li>
                <li>Gorro, luvas e meias térmicas</li>
              </ul>
            </div>
          </div>

          {/* INCLUSO / NÃO INCLUSO */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">O que está incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Liderança de Luís Felipe Almeida</li>
                <li>Consultoria técnica</li>
                <li>Equipamentos para trechos técnicos</li>
                <li>Kit de primeiros socorros</li>
                <li>Resgate ao final da travessia</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">Não incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Equipamentos pessoais de trekking</li>
                <li>Transportes não mencionados</li>
                <li>Refeições não mencionadas</li>
                <li>Passeios fora do roteiro</li>
                <li>Despesas pessoais</li>
                <li>Reembolso por abandono</li>
                <li>Perda de equipamentos por roubo ou clima</li>
              </ul>
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
