import imgShock from "../assets/images/shock-e-street-final.png";
import imgUrbanX1 from "../assets/images/urban-x1.jpg";
import imgMaxiSport from "../assets/images/maxi-sport.jpg";
import imgDeliveryPro from "../assets/images/delivery-pro.jpg";
import imgTrailXt from "../assets/images/trail-xt.jpg";
import imgRetroEv from "../assets/images/retro-ev.jpg";
import imgCityS2 from "../assets/images/city-s2.jpg";
import imgHeavyDuty from "../assets/images/heavyduty-max.jpg";
import imgMiniStreet from "../assets/images/mini-street.jpg";
import imgLuxuryEvx from "../assets/images/luxury-evx.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Cidade" | "Sport" | "Trabalho" | "Aventura" | "Premium";
  tag: string;
  tagTone: "neon" | "volt" | "rose" | "amber";
  image: string;
  price: number;
  description: string;
  longDescription: string[];
  battery: string;
  charge: string;
  speed: number; // km/h
  range: number; // km
  extraSpecs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "shock-e-street-black",
    name: "Shock E-Street Black",
    category: "Premium",
    tag: "Mais Vendida",
    tagTone: "neon",
    image: imgShock,
    price: 7499,
    description:
      "A fusão perfeita entre design agressivo e tecnologia elétrica. Pneus largos, farol redondo LED de alta intensidade e estrutura robusta para dominar as ruas.",
    longDescription: [
      "A Shock E-Street Black é a fusão perfeita entre design agressivo e tecnologia elétrica. Com pneus largos, farol redondo LED de alta intensidade e estrutura robusta, ela foi feita para dominar as ruas com zero emissões.",
      "O motor de 1.500W entrega torque instantâneo desde a primeira arrancada, enquanto a bateria de lítio 60V 20Ah garante até 60 km de autonomia real com apenas 4 horas de recarga em qualquer tomada comum. O chassi reforçado em aço suporta até 200 kg com total estabilidade.",
      "É a escolha número 1 da loja: presença imponente, manutenção quase zero e um custo por quilômetro que chega a ser 90% menor que o de uma moto a gasolina.",
    ],
    battery: "60V 20Ah (lítio)",
    charge: "4h",
    speed: 45,
    range: 60,
    extraSpecs: [
      { label: "Motor", value: "1.500W brushless" },
      { label: "Freios", value: "Disco hidráulico D/T" },
      { label: "Suspensão", value: "Dianteira telescópica" },
      { label: "Pneus", value: 'Fat 18" x 9,5"' },
      { label: "Carga Máxima", value: "200 kg" },
    ],
  },
  {
    id: "urban-mobility-x1",
    name: "Urban Mobility X1",
    category: "Cidade",
    tag: "Cidade",
    tagTone: "rose",
    image: imgUrbanX1,
    price: 5290,
    description:
      "Compacta, ágil e perfeita para o trânsito diário. A X1 conta com painel digital e espaço de armazenamento sob o banco.",
    longDescription: [
      "Compacta, ágil e perfeita para o trânsito diário. A X1 conta com painel digital completo e um espaço de armazenamento sob o banco que cabe capacete aberto, mochila pequena ou as compras do dia.",
      "Com apenas 58 kg, ela estaciona em qualquer vaga e corta o trânsito com agilidade. A recarga completa leva só 3 horas e custa menos de R$ 1,00 — o parceiro ideal para quem vive na correria urbana.",
    ],
    battery: "48V 12Ah (lítio)",
    charge: "3h",
    speed: 35,
    range: 40,
    extraSpecs: [
      { label: "Motor", value: "800W brushless" },
      { label: "Freios", value: "Disco D/T" },
      { label: "Suspensão", value: "Dianteira" },
      { label: "Pneus", value: '14" urbanos' },
      { label: "Carga Máxima", value: "150 kg" },
    ],
  },
  {
    id: "maxi-sport-touring",
    name: "Maxi Sport Touring",
    category: "Sport",
    tag: "Sport",
    tagTone: "volt",
    image: imgMaxiSport,
    price: 12150,
    description:
      "Para quem busca velocidade e aventura. Design aerodinâmico, suspensão esportiva e freios a disco duplos.",
    longDescription: [
      "Para quem busca velocidade e aventura. Design aerodinâmico de verdade, suspensão esportiva ajustável e freios a disco duplos que param a máquina com precisão cirúrgica.",
      "O motor de 3.000W empurra a Maxi Sport Touring até 80 km/h, e a bateria 72V 30Ah entrega 90 km de autonomia para escapadas de fim de semana sem ansiedade de recarga. Carenagem completa, posição de pilotagem esportiva e presença de superbike — com zero emissões.",
    ],
    battery: "72V 30Ah (lítio)",
    charge: "5h",
    speed: 80,
    range: 90,
    extraSpecs: [
      { label: "Motor", value: "3.000W brushless" },
      { label: "Freios", value: "Disco duplo dianteiro" },
      { label: "Suspensão", value: "Esportiva ajustável" },
      { label: "Pneus", value: '17" sport' },
      { label: "Carga Máxima", value: "180 kg" },
    ],
  },
  {
    id: "delivery-pro-cargo",
    name: "Delivery Pro Cargo",
    category: "Trabalho",
    tag: "Entrega",
    tagTone: "amber",
    image: imgDeliveryPro,
    price: 8999,
    description:
      "Feita para trabalhadores. Suporte de carga reforçado, bateria de longa duração e baixo custo de recarga.",
    longDescription: [
      "Feita para trabalhadores. Suporte de carga reforçado com baú top case, bateria de longa duração para o dia inteiro de rota e o menor custo de recarga da categoria.",
      "São 100 km de autonomia com a bateria 60V 40Ah — dá para rodar o turno completo de entregas sem parar. Chassi preparado para 250 kg, suspensão calibrada para carga e painel com indicador de economia em tempo real. Sua ferramenta de trabalho, zero gasolina.",
    ],
    battery: "60V 40Ah (lítio)",
    charge: "6h",
    speed: 40,
    range: 100,
    extraSpecs: [
      { label: "Motor", value: "1.200W brushless" },
      { label: "Freios", value: "Disco + CBS" },
      { label: "Suspensão", value: "Reforçada p/ carga" },
      { label: "Pneus", value: '16" carga' },
      { label: "Carga Máxima", value: "250 kg" },
    ],
  },
  {
    id: "trail-explorer-e-xt",
    name: "Trail Explorer E-XT",
    category: "Aventura",
    tag: "Off-Road",
    tagTone: "volt",
    image: imgTrailXt,
    price: 10500,
    description:
      "Motinha elétrica off-road. Pneus mixtos, suspensão de longo curso e painel de instrumentação à prova d'água.",
    longDescription: [
      "Motinha elétrica off-road de verdade. Pneus mixtos que mordem terra e asfalto, suspensão de longo curso que engole obstáculos e painel de instrumentação totalmente à prova d'água.",
      "Com 2.000W de potência e torque instantâneo, a Trail Explorer encara trilhas, estradas de chão e subidas pesadas sem esforço — e sem barulho de motor atrapalhando a natureza. Autonomia de 70 km para explorar longe, com recarga em apenas 4 horas.",
    ],
    battery: "72V 20Ah (lítio)",
    charge: "4h",
    speed: 60,
    range: 70,
    extraSpecs: [
      { label: "Motor", value: "2.000W brushless" },
      { label: "Freios", value: "Disco off-road" },
      { label: "Suspensão", value: "Longo curso" },
      { label: "Pneus", value: 'Mixtos 17"' },
      { label: "Carga Máxima", value: "180 kg" },
    ],
  },
  {
    id: "classic-retro-ev",
    name: "Classic Retro EV",
    category: "Premium",
    tag: "Retrô",
    tagTone: "amber",
    image: imgRetroEv,
    price: 9200,
    description:
      "Estilo retrô com tecnologia de ponta. Banco com costura aparente, tanque falsificado com baú interno e rodas de raios.",
    longDescription: [
      "Estilo retrô com tecnologia de ponta. Banco em costura aparente, o clássico 'tanque' falsificado que esconde um prático compartimento para bagagem e rodas de raios que completam o visual café racer.",
      "Por dentro, nada de velho: motor brushless de 1.000W, bateria de lítio 48V 24Ah removível e painel digital disfarçado de mostrador analógico. É a motinha para quem quer virar pescoços com consciência ambiental.",
    ],
    battery: "48V 24Ah (lítio)",
    charge: "4h",
    speed: 45,
    range: 55,
    extraSpecs: [
      { label: "Motor", value: "1.000W brushless" },
      { label: "Freios", value: "Disco + tambor" },
      { label: "Suspensão", value: "Telescópica clássica" },
      { label: "Pneus", value: 'Raiados 16"' },
      { label: "Carga Máxima", value: "160 kg" },
    ],
  },
  {
    id: "city-speed-s2",
    name: "City Speed S2",
    category: "Cidade",
    tag: "Leve",
    tagTone: "rose",
    image: imgCityS2,
    price: 6750,
    description:
      "Leve, silenciosa e super econômica. Ideal para iniciantes e deslocamentos curtos na cidade.",
    longDescription: [
      "Leve, silenciosa e super econômica. Ideal para iniciantes e deslocamentos curtos na cidade: faculdade, mercado, trabalho — tudo a poucos minutos de distância.",
      "A S2 pesa só 46 kg, acelera suave e tem limitador de velocidade para quem está começando. Recarga de 3 horas em qualquer tomada e autonomia de 35 km cobrem tranquilamente a rotina de segunda a sexta.",
    ],
    battery: "48V 10Ah (lítio)",
    charge: "3h",
    speed: 30,
    range: 35,
    extraSpecs: [
      { label: "Motor", value: "600W brushless" },
      { label: "Freios", value: "Disco dianteiro" },
      { label: "Suspensão", value: "Dianteira" },
      { label: "Pneus", value: '12" urbanos' },
      { label: "Carga Máxima", value: "120 kg" },
    ],
  },
  {
    id: "heavy-duty-cargo-max",
    name: "Heavy Duty Cargo Max",
    category: "Trabalho",
    tag: "Carga Pesada",
    tagTone: "amber",
    image: imgHeavyDuty,
    price: 11300,
    description:
      "Potência máxima para cargas pesadas. Chassi reforçado, motor de alto torque e dupla bateria.",
    longDescription: [
      "Potência máxima para cargas pesadas. Chassi reforçado em aço de alta resistência, motor de alto torque e sistema de dupla bateria que dobra o alcance de trabalho.",
      "São 120 km de autonomia e 300 kg de capacidade total — a Heavy Duty carrega o que uma van pequena carregaria, com custo de operação irrisório. Ideal para distribuidoras, mercados e operações de última milha em grande escala.",
    ],
    battery: "72V 40Ah — dupla (lítio)",
    charge: "7h",
    speed: 45,
    range: 120,
    extraSpecs: [
      { label: "Motor", value: "2.500W alto torque" },
      { label: "Freios", value: "Disco duplo + EBS" },
      { label: "Suspensão", value: "Dupla reforçada" },
      { label: "Pneus", value: '16" heavy duty' },
      { label: "Carga Máxima", value: "300 kg" },
    ],
  },
  {
    id: "mini-street-fun",
    name: "Mini Street Fun",
    category: "Cidade",
    tag: "Compacta",
    tagTone: "volt",
    image: imgMiniStreet,
    price: 4500,
    description:
      "A entrada perfeita no mundo elétrico. Pequena, divertida e fácil de estacionar. Perfeita para campi universitários.",
    longDescription: [
      "A entrada perfeita no mundo elétrico. Pequena, divertida e fácil de estacionar em qualquer canto — perfeita para campi universitários, condomínios fechados e trajetos curtinhos.",
      "Apesar do tamanho, entrega sorrisos: aceleração esperta até 25 km/h, recarga de apenas 2 horas e manutenção praticamente inexistente. A Mini prova que mobilidade elétrica pode começar por menos de R$ 5 mil.",
    ],
    battery: "36V 8Ah (lítio)",
    charge: "2h",
    speed: 25,
    range: 25,
    extraSpecs: [
      { label: "Motor", value: "350W brushless" },
      { label: "Freios", value: "Tambor traseiro" },
      { label: "Suspensão", value: "Deck absorvente" },
      { label: "Pneus", value: '10" compactos' },
      { label: "Carga Máxima", value: "100 kg" },
    ],
  },
  {
    id: "premium-luxury-ev-x",
    name: "Premium Luxury EV-X",
    category: "Premium",
    tag: "Topo de Linha",
    tagTone: "neon",
    image: imgLuxuryEvx,
    price: 18900,
    description:
      "O topo de linha. Bancos em couro sintético, som embutido, conectividade com app e carregamento ultra-rápido.",
    longDescription: [
      "O topo de linha da Faustino. Bancos em couro sintético premium, sistema de som Bluetooth embutido, conectividade total com o app do celular — trava, localização GPS e diagnóstico na palma da mão — e carregamento ultra-rápido.",
      "O motor de 5.000W leva a EV-X aos 100 km/h, e a bateria 96V 40Ah entrega impressionantes 150 km de autonomia com recarga de apenas 3 horas no modo Fast Charge. Suspensão ativa, freios ABS duplos e acabamento de carro de luxo. Simplesmente a motinha elétrica mais completa do Brasil.",
    ],
    battery: "96V 40Ah (lítio)",
    charge: "3h (Fast Charge)",
    speed: 100,
    range: 150,
    extraSpecs: [
      { label: "Motor", value: "5.000W brushless" },
      { label: "Freios", value: "ABS duplo" },
      { label: "Suspensão", value: "Ativa eletrônica" },
      { label: "Pneus", value: '17" premium' },
      { label: "Carga Máxima", value: "200 kg" },
    ],
  },
];
