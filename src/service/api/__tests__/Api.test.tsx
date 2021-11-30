import axios from "axios";
import HttpClient from "../API";

jest.mock("axios");
describe("Http Client", () => {
  describe("GET", () => {
    it("should fetches successfully data from an API", async () => {
      const data = {
        data: [
          {
            categoryId: "b3d9e7a8-3c31-4aed-9984-c65c14ef0795",
            categoryName: "Data",
            books: [
              {
                id: "405f49b6-e570-4081-8c51-861dd6bfac65",
                name: "Getting Started with Natural Language Processing",
                author: "Ekaterina Kochmar",
                price: 19.99,
                createdAt: "2021-11-28T18:00:20.003097",
              },
            ],
          },
        ],
      };
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get.mockResolvedValue({
        data: data,
        status: 200,
      });

      const resposne = await HttpClient.getAll();

      expect(axios.get).toHaveBeenCalledWith(
        "https://localhost:5001/api/books"
      );
      expect(resposne.data).toEqual(data);
      expect(resposne.status).toEqual(200);
    });
  });
});
