interface BookData {
  id: string;
  name: string;
  author: string;
  price: number;
  createdAt: string;
}

interface DataInformation {
  CategoryName: string;
  BookData: BookData[];
}

interface Data {
  data: DataInformation[];
}

const bookData: Data = {
  data: [
    {
      CategoryName: "Data",
      BookData: [
        {
          id: "1",
          name: "Inside Deep Learning",
          author: "Edward Raff",
          price: 1234.56,
          createdAt: "hello world",
        },
        {
          id: "2",
          name: "Getting Started with Natural Language Processing",
          author: "Ekaterina Kochmar",
          price: 1234.56,
          createdAt: "hello world",
        },
      ],
    },

    {
      CategoryName: "Development",
      BookData: [
        {
          id: "3",
          name: "Inside Deep Learning",
          author: "Edward Raff",
          price: 1234.56,
          createdAt: "hello world",
        },
        {
          id: "2",
          name: "Getting Started with Natural Language Processing",
          author: "Ekaterina Kochmar",
          price: 1234.56,
          createdAt: "hello world",
        },
      ],
    },
    {
      CategoryName: "General",
      BookData: [
        {
          id: "1",
          name: "Inside Deep Learning",
          author: "Edward Raff",
          price: 1234.56,
          createdAt: "hello world",
        },
        {
          id: "2",
          name: "Getting Started with Natural Language Processing",
          author: "Ekaterina Kochmar",
          price: 1234.56,
          createdAt: "hello world",
        },
      ],
    },
    {
      CategoryName: "Java/JVM",
      BookData: [
        {
          id: "1",
          name: "Inside Deep Learning",
          author: "Edward Raff",
          price: 1234.56,
          createdAt: "hello world",
        },
        {
          id: "2",
          name: "Getting Started with Natural Language Processing",
          author: "Ekaterina Kochmar",
          price: 1234.56,
          createdAt: "hello world",
        },
      ],
    },
    {
      CategoryName: "Microsoft& .NET",
      BookData: [
        {
          id: "1",
          name: "Inside Deep Learning",
          author: "Edward Raff",
          price: 1234.56,
          createdAt: "hello world",
        },
        {
          id: "2",
          name: "Getting Started with Natural Language Processing",
          author: "Ekaterina Kochmar",
          price: 1234.56,
          createdAt: "hello world",
        },
      ],
    },
    {
      CategoryName: "Operation & Cloud",
      BookData: [
        {
          id: "1",
          name: "Inside Deep Learning",
          author: "Edward Raff",
          price: 1234.56,
          createdAt: "hello world",
        },
        {
          id: "2",
          name: "Getting Started with Natural Language Processing",
          author: "Ekaterina Kochmar",
          price: 1234.56,
          createdAt: "hello world",
        },
      ],
    },
    {
      CategoryName: "Programming",
      BookData: [
        {
          id: "1",
          name: "Inside Deep Learning",
          author: "Edward Raff",
          price: 1234.56,
          createdAt: "hello world",
        },
        {
          id: "2",
          name: "Getting Started with Natural Language Processing",
          author: "Ekaterina Kochmar",
          price: 1234.56,
          createdAt: "hello world",
        },
      ],
    },
    {
      CategoryName: "Python",
      BookData: [
        {
          id: "1",
          name: "Inside Deep Learning",
          author: "Edward Raff",
          price: 1234.56,
          createdAt: "hello world",
        },
        {
          id: "2",
          name: "Getting Started with Natural Language Processing",
          author: "Ekaterina Kochmar",
          price: 1234.56,
          createdAt: "hello world",
        },
      ],
    },
    {
      CategoryName: "Web",
      BookData: [
        {
          id: "1",
          name: "Inside Deep Learning",
          author: "Edward Raff",
          price: 1234.56,
          createdAt: "hello world",
        },
        {
          id: "2",
          name: "Getting Started with Natural Language Processing",
          author: "Ekaterina Kochmar",
          price: 1234.56,
          createdAt: "hello world",
        },
      ],
    },
  ],
};
export default bookData;
