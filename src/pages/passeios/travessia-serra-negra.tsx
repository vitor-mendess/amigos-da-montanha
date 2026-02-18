import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";

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
];

export default function TravessiaSerraNegra() {
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
              {imagens.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-2xl h-56 w-full object-cover hover:scale-105 transition cursor-pointer"
                />
              ))}
            </div>
          </div>

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

          {/* VALORES E HORÁRIOS */}
          <div className="bg-white rounded-3xl p-10 shadow-md">
            <h2 className="text-4xl font-extrabold mb-8">
              Valores e horários
            </h2>

            <div className="space-y-4 text-lg">
              <p>
                <strong>Hospedagem:</strong> Temos hospedagem em Itatiaia —
                <strong> R$ 60,00</strong> (café da manhã incluso)
              </p>

              <p>
                <strong>Horário de saída:</strong> 5h30
              </p>

              <p className="text-sm italic text-gray-600">
                * Horário de chegada depende do grupo
              </p>

              <p>
                <strong>Local de encontro:</strong> Rodoviária de Resende
                (Estacionamento do Mc Donalds) ou Rodoviária de Itatiaia.
              </p>
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

        </div>
      </section>

      <Footer />
    </>
  );
}

