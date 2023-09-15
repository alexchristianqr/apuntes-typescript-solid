import { ProductService, ProductForMenService, ProductForWomanService } from "./1-single-responsability"
import { TodoService, PostService, HttpClient } from "./2-open-and-close"
import { Honda, Tesla, Toyota, Vehicle } from "./3-liskov-substitution"

console.log("******************************")
console.log("****** PRINCIPIOS SOLID ******")
console.log("******************************")
;(async () => {
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
  const httpClient = new HttpClient()
  const todoService = new TodoService(httpClient)
  await todoService.getTodoItems()
  const postService = new PostService(httpClient)
  await postService.getPosts()

  console.log("--")
  console.log("[ 3er PRINCIPIO DE SUSTITUCION DE LISKOV ]")
  console.log("--")
  const vehiclesList = (vehicles: Array<Vehicle>) => {
    vehicles.forEach((item) => {
      console.log({ className: item.constructor.name, quantitySeats: item.getNumberOfSeats() })
      return { className: item.constructor.name, quantitySeats: item.getNumberOfSeats() }
    })
  }
  const vehicles = [new Tesla(6), new Honda(4), new Toyota(5)]
  vehiclesList(vehicles)

  // console.log("--")
  // console.log("[ 4to PRINCIPIO DE SEGRESACION DE INTERFAZ ]")
  // console.log("--")
})()
