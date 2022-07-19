export interface Coffee {
  id: string;
  title: string;
  description: string;
  type: CoffeeType[];
  unitPrice: number;
  img: string;
}

export enum CoffeeType {
  TRADICIONAL = "Tradicional",
  GELADO = "Gelado",
  COM_LEITE = "Com leite",
  ESPECIAL = "Especial",
  ALCOOLICO = "Alcoólico",
}

export const data: Coffee[] = [
  {
    id: "1",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: [CoffeeType.TRADICIONAL],
    unitPrice: 9.9,
    img: "/src/assets/images/expresso.png",
  },
  {
    id: "2",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    type: [CoffeeType.TRADICIONAL],
    unitPrice: 9.9,
    img: "./src/assets/images/americano.png",
  },
  {
    id: "3",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    type: [CoffeeType.TRADICIONAL],
    unitPrice: 9.9,
    img: "./src/assets/images/expresso-cremoso.png",
  },
  {
    id: "4",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    type: [CoffeeType.TRADICIONAL, CoffeeType.GELADO],
    unitPrice: 9.9,
    img: "./src/assets/images/cafe-gelado.png",
  },
  {
    id: "5",
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: "./src/assets/images/cafe-com-leite.png",
  },
  {
    id: "6",
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: "./src/assets/images/latte.png",
  },
  {
    id: "7",
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: "./src/assets/images/capuccino.png",
  },
  {
    id: "8",
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: "./src/assets/images/macchiato.png",
  },
  {
    id: "9",
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: "./src/assets/images/mocaccino.png",
  },
  {
    id: "10",
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    type: [CoffeeType.ESPECIAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: "./src/assets/images/chocolate-quente.png",
  },
  {
    id: "11",
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    type: [CoffeeType.ESPECIAL, CoffeeType.ALCOOLICO, CoffeeType.GELADO],
    unitPrice: 9.9,
    img: "./src/assets/images/cubano.png",
  },
  {
    id: "12",
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    type: [CoffeeType.ESPECIAL],
    unitPrice: 9.9,
    img: "./src/assets/images/havaiano.png",
  },
  {
    id: "13",
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    type: [CoffeeType.ESPECIAL],
    unitPrice: 9.9,
    img: "./src/assets/images/arabe.png",
  },
  {
    id: "14",
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    type: [CoffeeType.ESPECIAL, CoffeeType.ALCOOLICO],
    unitPrice: 9.9,
    img: "./src/assets/images/irlandes.png",
  },
];
