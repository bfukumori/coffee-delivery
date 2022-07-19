import americano from "./images/americano.png";
import arabe from "./images/arabe.png";
import cafeComLeite from "./images/cafe-com-leite.png";
import cafeGelado from "./images/cafe-gelado.png";
import capuccino from "./images/capuccino.png";
import chocolateQuente from "./images/chocolate-quente.png";
import cubano from "./images/cubano.png";
import expressoCremoso from "./images/expresso-cremoso.png";
import expresso from "./images/expresso.png";
import havaiano from "./images/havaiano.png";
import irlandes from "./images/irlandes.png";
import latte from "./images/latte.png";
import macchiato from "./images/macchiato.png";
import mocaccino from "./images/mocaccino.png";

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
    img: expresso,
  },
  {
    id: "2",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    type: [CoffeeType.TRADICIONAL],
    unitPrice: 9.9,
    img: americano,
  },
  {
    id: "3",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    type: [CoffeeType.TRADICIONAL],
    unitPrice: 9.9,
    img: expressoCremoso,
  },
  {
    id: "4",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    type: [CoffeeType.TRADICIONAL, CoffeeType.GELADO],
    unitPrice: 9.9,
    img: cafeGelado,
  },
  {
    id: "5",
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: cafeComLeite,
  },
  {
    id: "6",
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: latte,
  },
  {
    id: "7",
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: capuccino,
  },
  {
    id: "8",
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: macchiato,
  },
  {
    id: "9",
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    type: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: mocaccino,
  },
  {
    id: "10",
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    type: [CoffeeType.ESPECIAL, CoffeeType.COM_LEITE],
    unitPrice: 9.9,
    img: chocolateQuente,
  },
  {
    id: "11",
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    type: [CoffeeType.ESPECIAL, CoffeeType.ALCOOLICO, CoffeeType.GELADO],
    unitPrice: 9.9,
    img: cubano,
  },
  {
    id: "12",
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    type: [CoffeeType.ESPECIAL],
    unitPrice: 9.9,
    img: havaiano,
  },
  {
    id: "13",
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    type: [CoffeeType.ESPECIAL],
    unitPrice: 9.9,
    img: arabe,
  },
  {
    id: "14",
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    type: [CoffeeType.ESPECIAL, CoffeeType.ALCOOLICO],
    unitPrice: 9.9,
    img: irlandes,
  },
];
