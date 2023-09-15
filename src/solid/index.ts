import { ProductService, ProductForMenService, ProductForWomanService } from "./1-single-responsability"
import { TodoService, PostService, HttpClient } from "./2-open-and-close"
import { Honda, Tesla, Toyota, Vehicle } from "./3-liskov-substitution"
import { TucanBird, PenguinBird, HumminBird, OstrichBird } from "./4-interface-segregation"

console.log("******************************")
console.log("****** PRINCIPIOS SOLID ******")
console.log("******************************")
;(async () => {
  console.log("--")
  console.log("[ 1er PRINCIPIO DE RESPONSABILIDAD ÚNICA ]")
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
  console.log("[ 3er PRINCIPIO DE SUSTITUCIÓN DE LISKOV ]")
  console.log("--")
  const vehiclesList = (vehicles: Array<Vehicle>) => {
    vehicles.forEach((item) => {
      console.log({ className: item.constructor.name, quantitySeats: item.getNumberOfSeats() })
      return { className: item.constructor.name, quantitySeats: item.getNumberOfSeats() }
    })
  }
  const vehicles = [new Tesla(6), new Honda(4), new Toyota(5)]
  vehiclesList(vehicles)

  console.log("--")
  console.log("[ 4to PRINCIPIO DE SEGREGACIÓN DE INTERFAZ ]")
  console.log("--")
  const tucanBird = new TucanBird()
  tucanBird.eat()
  tucanBird.fly()
  const penguinBird = new PenguinBird()
  penguinBird.eat()
  penguinBird.swim()
  penguinBird.swimmingChampionship()
  const ostrichBird = new OstrichBird()
  ostrichBird.eat()
  ostrichBird.run()
  const humminBird = new HumminBird()
  humminBird.eat()
  humminBird.fly()
})()
