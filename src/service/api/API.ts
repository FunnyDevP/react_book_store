import axios, { AxiosResponse } from "axios";
import { Data } from "../../models/Book";

class HttpClient {
  public async getAll(): Promise<AxiosResponse<Data>> {
    return await axios.get<Data>("https://localhost:5001/api/books");
  }
}

const client = new HttpClient();
export default client;
