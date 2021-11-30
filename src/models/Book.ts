interface BookData {
  id: string;
  name: string;
  author: string;
  price: number;
  createdAt: string;
}

interface DataInformation {
  categoryId: string;
  categoryName: string;
  books: BookData[];
}

export interface Data {
  data: DataInformation[];
}
