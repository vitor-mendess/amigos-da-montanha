import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const imagens = [
  "/imgs/travessia-serra-negra/01.jpg",
  "/imgs/travessia-serra-negra/02.jpg",
  "/imgs/travessia-serra-negra/03.jpg",
  "/imgs/travessia-serra-negra/04.jpg",
  "/imgs/travessia-serra-negra/05.jpg",
  "/imgs/travessia-serra-negra/06.jpg",
  "/imgs/travessia-serra-negra/07.jpg",
  "/imgs/travessia-serra-negra/08.jpg",
  "/imgs/travessia-serra-negra/09.jpg",
  "/imgs/travessia-serra-negra/10.jpg",
  "/imgs/travessia-serra-negra/11.jpg",
  "/imgs/travessia-serra-negra/12.jpg",
  "/imgs/travessia-serra-negra/13.jpg",
  "/imgs/travessia-serra-negra/14.jpg",
  "/imgs/travessia-serra-negra/15.jpg",
  "/imgs/travessia-serra-negra/16.jpg",
  "/imgs/travessia-serra-negra/17.jpg",
  "/imgs/travessia-serra-negra/18.jpg",
  "/imgs/travessia-serra-negra/19.jpg",
  "/imgs/travessia-serra-negra/20.jpg",
  "/imgs/travessia-serra-negra/21.jpg",
  "/imgs/travessia-serra-negra/22.jpg",
  "/imgs/travessia-serra-negra/23.jpg",
  "/imgs/travessia-serra-negra/24.jpg",
  "/imgs/travessia-serra-negra/25.jpg",

];

export default function TravessiaSerraNegra() {
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
          backgroundImage: "url('/imgs/travessia-serra-negra/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Travessia • 2 dias • 30km
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Serra Negra
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
                A <strong>Travessia da Serra Negra</strong> inicia-se no{" "}
                <strong>Posto Marcão</strong>, seguindo pelo{" "}
                <strong>Abrigo Rebouças</strong> em direção à{" "}
                <strong>Pedra do Altar</strong>.
              </p>

              <p>
                O caminho leva a um vale onde é possível avistar os{" "}
                <strong>Ovos da Galinha</strong> e a{" "}
                <strong>Pedra do Sino</strong>, seguindo à esquerda da{" "}
                <strong>Cachoeira do Aiuruoca</strong>, considerada a mais alta
                do Brasil em altitude.
              </p>

              <p>
                A partir da cachoeira, a trilha segue em direção à{" "}
                <strong>Invernada</strong> e às{" "}
                <strong>Cabanas do Aiuruoca</strong>, acompanhando o rio
                Aiuruoca até a região do <strong>Matão</strong>.
              </p>

              <p>
                No Matão está localizada a pousada da{" "}
                <strong>Dona Sônia</strong>, indicada pelo parque para pernoite.
                Até esse ponto são percorridos aproximadamente{" "}
                <strong>18 km</strong>.
              </p>

              <p>
                No <strong>segundo dia</strong>, iniciamos a subida do{" "}
                <strong>Morro da Misericórdia</strong> da Serra Negra. Após vencer
                esse obstáculo, percorremos a crista da serra e seguimos por uma
                longa descida até o vilarejo de{" "}
                <strong>Maromba</strong>.
              </p>

              <p>
                A travessia completa possui cerca de{" "}
                <strong>30 km</strong> e o ideal é que seja realizada em{" "}
                <strong>dois dias</strong>.
              </p>

              <p>
                Existe ainda a alternativa de iniciar a travessia pelo novo
                circuito denominado <strong>Cinco Lagos</strong>, que encontra
                a trilha principal próximo à Pedra do Altar.
              </p>

              <p className="italic text-gray-700">
                Há opção de <strong>camping ou chalé</strong>. A pousada é uma
                excelente alternativa para quem está iniciando em travessias,
                pois não é necessário levar barraca, utensílios, fogareiro ou
                comida para janta e café da manhã — já inclusos no pacote.
              </p>
            </div>
          </div>

          {/* DADOS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { valor: "30km", label: "Distância" },
              { valor: "2 dias", label: "Duração" },
              { valor: "Médio", label: "Esforço" },
              { valor: "Baixo", label: "Exposição" },
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


          {/* INCLUSO / NÃO INCLUSO */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">O que está incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Transporte Resende/Itatiaia x Posto Marcão e Maromba</li>
                <li>Pousada</li>
                <li>Consultoria técnica</li>
                <li>Guia</li>
                <li>Café da manhã e janta</li>
                <li>Filmagem de drone</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">Não incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Alimentação</li>
                <li>Entrada do PNI</li>
                <li>Vestuário e equipamentos</li>
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
                  trilha com bom solado, gorro e luvas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Equipamento de camping</strong>
                <p className="mt-2">
                  Barraca, isolante térmico, saco de dormir, fogareiro, pratos e
                  talheres (caso opte por não ficar na pousada).
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Acessórios pessoais</strong>
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

