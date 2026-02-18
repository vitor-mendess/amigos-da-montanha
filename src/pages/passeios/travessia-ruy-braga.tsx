import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";

const imagens = [
  "/imgs/travessia-ruy-braga/01.jpg",
  "/imgs/travessia-ruy-braga/02.jpg",
  "/imgs/travessia-ruy-braga/03.jpg",
  "/imgs/travessia-ruy-braga/04.jpg",
  "/imgs/travessia-ruy-braga/05.jpg",
  "/imgs/travessia-ruy-braga/06.jpg",
];

export default function TravessiaRuyBraga() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="h-[80vh] bg-cover bg-center relative flex items-end"
        style={{
          backgroundImage: "url('/imgs/travessia-ruy-braga/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Travessia • 2 dias • 20km
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Ruy Braga
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
                <strong>Dia 1:</strong> São ao todo aproximadamente{" "}
                <strong>20 km</strong> saindo do Posto Marcão, passando próximo às
                <strong> Prateleiras</strong> e <strong>Pedra do Eco</strong>.
              </p>

              <p>
                A trilha tem o mesmo início das Prateleiras até encontrarmos a
                bifurcação para a trilha da <strong>Ruy Braga</strong>. É uma
                trilha extremamente bonita, com vistas diferenciadas do Pico
                das Agulhas Negras, Prateleiras e Pedra Assentada.
              </p>

              <p>
                Após alguns quilômetros chegamos ao{" "}
                <strong>Abrigo Massenas</strong>, hoje em ruínas, local onde é
                possível montar acampamento. Seguindo a trilha, notamos a
                mudança gradual da vegetação, com árvores cada vez mais altas.
              </p>

              <p>
                No percurso passamos pelo antigo{" "}
                <strong>Abrigo Macieiras</strong>, outro abrigo histórico do PNI,
                também em ruínas. Logo após, encontramos a bifurcação para o{" "}
                <strong>Abrigo Água Branca*</strong>, onde normalmente
                pernoitamos.
              </p>

              <p>
                <strong>Dia 2:</strong> Continuamos a descida para a parte baixa
                do parque, caminhando por trilha em meio à mata fechada até
                chegarmos ao destino final, a{" "}
                <strong>Cachoeira do Maromba</strong>.
              </p>

              <p>
                Outras atrações ao longo do caminho incluem o{" "}
                <strong>Rio Campo Belo</strong>,{" "}
                <strong>Abrigo Rebouças</strong> e{" "}
                <strong>Morro do Couto</strong>.
              </p>

              <p className="text-sm italic text-gray-700">
                * O Abrigo Água Branca é um excelente local para observar o nascer
                e o pôr do sol, por estar localizado em uma crista da montanha.
              </p>
            </div>
          </div>

          {/* DADOS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { valor: "20km", label: "Distância" },
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
                <li>Consultoria técnica</li>
                <li>Guia</li>
                <li>Filmagem de drone</li>
              </ul>

              <p className="text-sm mt-6 italic text-gray-600">
                * Temos equipamentos de camping para alugar. Consulte
                disponibilidade.
              </p>
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
                  Sanduíches, chocolates, barras de cereais, frutas e refeições
                  leves. Alimentar-se de 1h em 1h.
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
                  Roupas em camadas, segunda pele, anorak, bota ou tênis de trilha
                  com bom solado, gorro e luvas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Equipamento de camping</strong>
                <p className="mt-2">
                  Isolante térmico, saco de dormir, fogareiro, pratos e
                  talheres. Barraca apenas se a opção for acampamento.
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
