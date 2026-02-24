import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const imagens = [
  "/imgs/serrilha/01.jpg",
  "/imgs/serrilha/02.jpg",
  "/imgs/serrilha/03.jpg",
  "/imgs/serrilha/04.jpg",
  "/imgs/serrilha/05.jpg",
  "/imgs/serrilha/06.jpg",
  "/imgs/serrilha/07.jpg",
  "/imgs/serrilha/08.jpg",
  "/imgs/serrilha/09.jpg",
  "/imgs/serrilha/10.jpg",
  "/imgs/serrilha/11.jpg",
  "/imgs/serrilha/12.jpg",

];

export default function SerrilhaDosCristais() {
  // dentro do componente CircuitoCoutoPrateleiras:
  const [indiceImagem, setIndiceImagem] = useState<number | null>(null);
  
  const abrirImagem = (index: number) => setIndiceImagem(index);
  const fecharImagem = () => setIndiceImagem(null);
  
  const proximaImagem = () => {
    if (indiceImagem !== null) setIndiceImagem((indiceImagem + 1) % imagens.length);
  };
  
  const imagemAnterior = () => {
    if (indiceImagem !== null) setIndiceImagem((indiceImagem - 1 + imagens.length) % imagens.length);
  };
  const [imagemAberta, setImagemAberta] = useState<string | null>(null);

  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="h-[80vh] bg-cover bg-center relative flex items-end"
        style={{
          backgroundImage: "url('/imgs/serrilha1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Moderado • 1 dia • 2540m
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Serrilha dos Cristais
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
            <h2 className="text-4xl font-extrabold mb-8">A Experiência</h2>

            <div className="space-y-6 text-lg leading-relaxed text-[#1C1C1C]">
              <p>
                A <strong>Serrilha dos Cristais</strong> é uma das trilhas mais
                impressionantes do planalto do Parque Nacional do Itatiaia.
                O percurso acontece sobre uma elegante crista rochosa,
                cercada por campos de altitude e com vistas panorâmicas
                de tirar o fôlego.
              </p>

              <p>
                Durante a caminhada, o visual acompanha você o tempo todo: é possível avistar as Prateleiras, Serra Fina, o Morro do Couto e um horizonte aberto que revela toda a grandiosidade da Serra da Mantiqueira.
              </p>

              <p>
                Não é apenas uma trilha — é uma vivência de conexão com a
                montanha, onde cada trecho revela novas paisagens,
                formações rochosas imponentes e a sensação única
                de estar caminhando no topo do mundo.
              </p>
            </div>
          </div>

          {/* DADOS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { valor: "10km", label: "Distância" },
              { valor: "2540m", label: "Altitude Máx." },
              { valor: "500m", label: "Desnível" },
              { valor: "7h", label: "Duração" },
              { valor: "Moderado", label: "Nível" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-[#9C3F1A]">
                  {item.valor}
                </p>
                <p className="text-sm font-semibold uppercase mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* POR QUE IR COM GUIA */}
          <div className="bg-white rounded-3xl p-10 shadow-md">
            <h3 className="text-3xl font-bold mb-6">Por que ir com guia?</h3>

            <p className="text-lg leading-relaxed">
              A Serrilha dos Cristais possui trechos de navegação em rocha
              e áreas onde o caminho não é tão evidente, principalmente
              em dias de neblina — algo comum no Itatiaia.
              Contar com um guia experiente garante segurança,
              melhor ritmo de caminhada e uma experiência mais tranquila.
              Além disso, você aproveita cada mirante com orientação
              adequada e aprende curiosidades sobre a região.
            </p>
          </div>

          {/* PARA QUEM É */}
          <div className="bg-white rounded-3xl p-10 shadow-md">
            <h3 className="text-3xl font-bold mb-6">Para quem é essa trilha?</h3>

            <p className="text-lg leading-relaxed">
              Ideal para quem busca paisagens impactantes,
              desafio na medida certa e uma experiência diferenciada
              nas montanhas do Itatiaia.
              Se você quer viver um dia memorável nas alturas,
              a Serrilha dos Cristais é o destino certo.
            </p>
          </div>

          {/* GALERIA */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10">Galeria</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imagens.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Serrilha dos Cristais ${index + 1}`}
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

          {imagemAberta && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={() => setImagemAberta(null)}
            >
              <img
                src={imagemAberta}
                className="max-h-[90vh] max-w-[90vw] rounded-2xl"
              />
            </div>
          )}


          {/* INCLUSO / NÃO INCLUSO */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">O que está incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Consultoria técnica</li>
                <li>Guia</li>
              </ul>

              <p className="text-sm mt-6 italic text-gray-600">
                * Temos vagas no carro para quem não possui transporte até a
                portaria do PNI (valor para ajudar nos gastos).
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
        Sanduíches, chocolates, barra de cereais, frutas e outros lanches
        de sua preferência. Recomendamos alimentação de 1h em 1h.
        Levar quantidade suficiente para consumo durante a trilha e
        também refeição como enlatados, macarrão ou alimentos liofilizados.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <strong>Hidratação</strong>
      <p className="mt-2">
        Recipiente com água (mínimo de 1,5 litros por pessoa),
        isotônicos ou sucos.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <strong>Vestimenta</strong>
      <p className="mt-2">
        Uso de agasalhos em camadas (segunda pele + casaco ou anorak).
        Bota ou tênis de caminhada já amaciado, com solado de boa aderência.
        Gorro, luvas e roupa extra para eventual troca em caso de chuva.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <strong>Acessórios Pessoais</strong>
      <p className="mt-2">
        Protetor solar, protetor labial, chapéu ou boné,
        capa de chuva, sacos para lixo, papel higiênico,
        lanterna com pilhas extras, kit de primeiros socorros
        e remédios de uso pessoal.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow md:col-span-2">
      <strong>Máquina Fotográfica</strong>
      <p className="mt-2">
        Verifique na véspera se as pilhas ou baterias estão carregadas,
        cartão de memória disponível e leve carregador ou baterias extras.
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
