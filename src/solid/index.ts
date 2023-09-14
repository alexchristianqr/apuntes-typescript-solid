import { ProductService, ProductForMenService, ProductForWomanService } from "./1-single-responsability"

console.log("*********")
console.log("[ SOLID ]")
console.log("*********")

console.log("--")
console.log("[ 1er PRINCIPIO DE RESPONSABILIDAD UNICA ]")
console.log("--")
const productService = new ProductService()
const productForMenService = new ProductForMenService(productService)
const productForWomanService = new ProductForWomanService(productService)
productForMenService.createProductMen({ id: 1, name: "Colonia Airblue 75ml", startSoccer: "Leonel Messi" })
productForMenService.getProduct(1)
productForWomanService.createProductWoman({ id: 2, name: "Colonia Airpink 85ml", starDisney: "Barbie" })
productForWomanService.getProduct(2)
const products = productService.getProducts()
console.log({ products })

console.log("--")
console.log("[ 2do PRINCIPIO DE ABIERTO Y CERRADO ]")
console.log("--")
import { TodoService, PostService, HttpClient } from "./2-open-and-close"
;(async () => {
  const httpClient = new HttpClient()
  const todoService = new TodoService(httpClient)
  await todoService.getTodoItems()
  const postService = new PostService(httpClient)
  await postService.getPosts()
})()
