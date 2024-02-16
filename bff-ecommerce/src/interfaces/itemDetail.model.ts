import Item from "./item.model";

interface Author {
  name: string;
  lastname: string;
}

export default interface ItemDetail {
  author: Author;
  item: Item;
}
