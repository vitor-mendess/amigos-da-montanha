import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

// IMAGENS
import agenda1 from "../assets/agenda/agenda1.jpg";
import agenda2 from "../assets/agenda/agenda2.jpg";

export default function Agenda() {
  const agenda = [
    {
      mes: "Fevereiro",
      eventos: [
        {
          datas: "15, 16 e 17/02 - Dom, Seg e Terça",
          nome: "Trilha do Ouro - Feriado de Carnaval",
        },
        {
          datas: "28/02 e 01/03 - Sábado e Domingo",
          nome: "Travessia da Serra Negra - Itatiaia",
        },
      ],
    },
    {
      mes: "Março",
      eventos: [
        {
          datas: "21 e 22/03 - Sábado e Domingo",
          nome: "Travessia Rancho Caído com nascer do sol",
        },
        {
          datas: "29/03 - Domingo",
          nome: "Vivência feminina no Itatiaia",
        },
      ],
    },
    {
      mes: "Abril",
      eventos: [
        {
          datas: "03, 04 e 05 - Sexta, Sáb e Domingo",
          nome:
            "Acampamento Amigos da Montanha: Prateleiras, Pico das Agulhas Negras e Asa de Hermes - Feriado",
        },
        {
          datas: "18 e 19 - Sábado e Domingo",
          nome: "Lado B do PNI - Pedra Assentada e Serrilha dos Cristais",
        },
      ],
    },
    {
      mes: "Maio",
      eventos: [
        {
          datas: "01, 02 e 03 - Sexta, Sáb e Domingo",
          nome: "Travessia Marins x Itaguaré - Feriado",
        },
        {
          datas: "23 - Sábado",
          nome: "Prateleiras - Subterrânea",
        },
      ],
    },
    {
      mes: "Junho",
      eventos: [
        {
          datas: "05, 06 e 07 - Sexta, Sáb e Domingo",
          nome:
            "Travessia da Joatinga - Feriado (Mais informações em breve)",
        },
        {
          datas: "20 - Sábado",
          nome: "Pico das Agulhas Negras - Via Longitudinal",
        },
      ],
    },
    {
      mes: "Julho",
      eventos: [
        {
          datas: "11 - Sábado",
          nome: "Prateleiras - Subterrânea",
        },
      ],
    },
    {
      mes: "Agosto",
      eventos: [
        {
          datas: "01 e 02 - Sábado e Domingo",
          nome: "Travessia Marins x Itaguaré - Realizada em 2 dias",
        },
      ],
    },
  ];

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-[#E8D6B3] py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-[#1C1C1C]">
            Agenda 2026
          </h1>

          <div className="w-24 h-1 bg-[#9C3F1A] mx-auto mb-8 rounded-full" />

          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-[#1C1C1C]">
            Viva aventuras inesquecíveis
          </p>

          {/* IMAGENS */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <img
              src={agenda1}
              alt="Aventura na montanha"
              className="rounded-3xl h-72 w-full object-cover shadow-xl"
            />
            <img
              src={agenda2}
              alt="Trilha e montanhismo"
              className="rounded-3xl h-72 w-full object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-24 bg-[#E8D6B3] text-[#1C1C1C] px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {agenda.map((mes) => (
            <div key={mes.mes}>
              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                {mes.mes}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {mes.eventos.map((evento, index) => (
                  <div
                    key={index}
                    className="p-8 bg-[#F4EAD6] rounded-3xl shadow-lg hover:shadow-xl transition"
                  >
                    <p className="font-semibold text-sm uppercase tracking-wide text-[#6B5E4A] mb-2">
                      {evento.datas}
                    </p>

                    <h3 className="text-xl font-bold">
                      {evento.nome}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="mt-20 text-center space-y-6">
            <p className="text-lg md:text-xl text-[#3A3A3A]">
              Para mais informações sobre outros roteiros, vagas e valores,
              fale com nossa equipe pelo WhatsApp:
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5524988418212"
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-white text-lg transition"
              >
                <FaWhatsapp className="text-2xl" />
                Fale com a gente – Roberto
              </a>

              <a
                href="https://wa.me/5524992329540"
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-white text-lg transition"
              >
                <FaWhatsapp className="text-2xl" />
                Fale com a gente – Luis
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
