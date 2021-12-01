export interface BookData {
  id: string;
  name: string;
  author: string;
  price: number;
  publicationAt: string;
}

interface DataInformation {
  categoryId: string;
  categoryName: string;
  books: BookData[];
}

export interface Data {
  data: DataInformation[];
}
