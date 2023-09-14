import { ProductService, ProductForMenService } from "./1-single-responsability"

console.log("[ Los 5 Principios SOLID ]")
console.log("--")
console.log("1.- Responsabilidad unica")
const productService = new ProductService()
const productForMenService = new ProductForMenService(productService)
productForMenService.createProductMen({ id: 1, name: "Colonia Airblue 75ml", startSoccer: "Leonel Messi" })
productForMenService.getProduct(1)
