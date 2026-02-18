import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";

const imagens = [
  "/imgs/travessia-serra-fina/01.jpg",
  "/imgs/travessia-serra-fina/02.jpg",
  "/imgs/travessia-serra-fina/03.jpg",
  "/imgs/travessia-serra-fina/04.jpg",
  "/imgs/travessia-serra-fina/05.jpg",
  "/imgs/travessia-serra-fina/06.jpg",
];

export default function TravessiaSerraFina() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="h-[80vh] bg-cover bg-center relative flex items-end"
        style={{
          backgroundImage: "url('/imgs/travessia-serra-fina/home.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Travessia • 3 dias • 30km
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Travessia da Serra Fina
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
                A Serra Fina é considerada uma das travessias de montanha selvagem mais difíceis do Brasil,
                pois existem poucos pontos de água e à noite geralmente faz muito frio,
                com temperaturas que no inverno chegam tranquilamente abaixo de zero.
              </p>

              <p>
                Situada na tríplice divisa entre MG, SP e RJ, sustenta mais de 12 cumes acima de 2.000m.
                Tradicionalmente realizada em 4 dias ou 3 dias.
              </p>

              <p>
                O cume mais alto de toda a Mantiqueira está situada nesta serra e tem o nome de
                <strong> Pedra da Mina</strong>, com 2.798m de altitude.
              </p>

              <p>
                O relevo bastante ondulado possui depressões profundas que não permitem ver o pico mais alto.
                A travessia passa por outros expressivos cumes e cristas ainda pouco acessadas.
              </p>

              <p>
                <strong>Dia 1 (14 km):</strong> Saída de Passa Quatro, subida pelo Quartizito,
                Passos dos Anjos e Capim Amarelo. Seguimos até o Maracanã e depois base da Pedra da Mina,
                onde montamos acampamento.
              </p>

              <p>
                <strong>Dia 2 (6 km):</strong> Nascer do sol na Pedra da Mina.
                Passagem pelo Vale do Ruah para abastecimento de água (aprox. 6L por pessoa).
                Montagem de acampamento em local estratégico.
              </p>

              <p>
                <strong>Dia 3 (10 km):</strong> Subida ao Pico dos Três Estados ao amanhecer,
                passagem pelo Alto dos Ivos e finalização no Sítio do Pierre.
              </p>
            </div>
          </div>

          {/* DADOS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { valor: "30km", label: "Distância" },
              { valor: "3 dias", label: "Duração" },
              { valor: "Altíssimo", label: "Esforço" },
              { valor: "Médio", label: "Exposição" },
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
                <li>Transporte Resende/Itatiaia x Passa Quatro MG</li>
                <li>Transporte Passa Quatro MG x Toca do Lobo</li>
                <li>Transporte Sítio do Pierre x Resende/Itatiaia</li>
                <li>Guia Cadastur</li>
                <li>Camiseta personalizada do evento</li>
                <li>Consultoria técnica</li>
                <li>Filmagem com Drone</li>
                <li>Check-list de itens</li>
              </ul>

              <p className="text-sm mt-6 italic text-gray-600">
                * Temos equipamentos de camping para alugar. Consulte disponibilidade.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">Não incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Alimentação</li>
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
                <strong>Horário de saída:</strong> 22h
              </p>

              <p className="text-sm italic text-gray-600">
                * Horário de chegada depende do grupo
              </p>

              <p>
                <strong>Local de encontro:</strong> Rodoviária de Resende
                (Estacionamento do Mc Donalds) ou Rodoviária de Itatiaia.
              </p>

              <p>
                <strong>Pagamento:</strong> Transferência Bancária, Cartão de Crédito ou Pix.
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
                  Sanduíches, chocolates, barras de cereais, frutas e refeições leves.
                  Alimentar-se de 1h em 1h.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Hidratação</strong>
                <p className="mt-2">
                  Recipiente com no mínimo 6L de água por pessoa.
                  Levar reservatórios vazios.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Vestimenta</strong>
                <p className="mt-2">
                  Roupas em camadas, segunda pele, anorak, bota ou tênis de trilha,
                  gorro e luvas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Equipamento de camping</strong>
                <p className="mt-2">
                  Barraca, isolante térmico, saco de dormir, fogareiro,
                  pratos e talheres.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Acessórios pessoais</strong>
                <p className="mt-2">
                  Protetor solar, capa de chuva, lanterna, kit de primeiros
                  socorros e remédios pessoais.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Eletrônicos</strong>
                <p className="mt-2">
                  Verificar baterias carregadas, cartão de memória,
                  carregador portátil e celular.
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
