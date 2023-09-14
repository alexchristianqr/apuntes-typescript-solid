import axios, { AxiosResponse } from "axios"

type TypeStatusHttp = 200 | 301 | 400 | 500
interface MyAxiosResponse extends Partial<AxiosResponse> {
  data: any
  status: TypeStatusHttp | number
}

export class HttpClient {
  async get(url: string): Promise<MyAxiosResponse> {
    const { data, status } = await axios.get(url)
    return { data, status }
  }
}

export class TodoService {
  constructor(private httpClient: HttpClient) {}

  async getTodoItems() {
    const { data } = await this.httpClient.get("https://jsonplaceholder.typicode.com/todos")
    console.log("Listar todos los items", { data })
  }
}

export class PostService {
  constructor(private httpClient: HttpClient) {}

  async getPosts() {
    const data = await this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
    console.log("Listar todos los posts", { data })
  }
}
