type Nivel = "Fácil" | "Moderada" | "Difícil";

interface ExperienceCardProps {
  nome: string;
  descricao: string;
  valor: string;
  nivel: Nivel;
  dark?: boolean;
}

const nivelColor = {
  Fácil: "bg-green-600",
  Moderada: "bg-yellow-500 text-black",
  Difícil: "bg-red-700",
};

export default function ExperienceCard({
  nome,
  descricao,
  valor,
  nivel,
  dark = false,
}: ExperienceCardProps) {
  return (
    <div
      className={`rounded-3xl p-8 shadow-xl flex flex-col justify-between ${
        dark ? "bg-[#262626] text-[#E8D6B3]" : "bg-white text-[#1C1C1C]"
      }`}
    >
      <div>
        <span
          className={`inline-block px-4 py-1 text-sm rounded-full text-white mb-4 ${nivelColor[nivel]}`}
        >
          {nivel}
        </span>

        <h3 className="text-2xl font-bold mb-3">{nome}</h3>
        <p className="text-sm mb-6">{descricao}</p>
      </div>

      <div
        className={`flex items-baseline gap-2 ${
          dark ? "text-[#C98A3A]" : "text-[#9C3F1A]"
        }`}
      >
        <span className="text-2xl font-extrabold">{valor}</span>
        <span className="text-sm font-medium opacity-80">por pessoa</span>
      </div>
    </div>
  );
}


