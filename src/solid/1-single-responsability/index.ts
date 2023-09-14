/**
 * Servicio de un producto en general
 */
interface Product {
  id: number
  name: string
}
export class ProductService {
  private products: Array<Product> = []

  getProduct(id: number) {
    return this.products.find((item: Product) => item.id === id)
  }

  createProduct(product: Product) {
    this.products.push(product)
  }

  updateProduct(id: number) {
    console.log("Actualizar producto", { id })
  }

  deleteProduct(id: number) {
    console.log("Eliminar producto", { id })
  }
}

/**
 * Servicio de un producto para hombres
 */
type StarSoccer = "Leonel Messi" | "Cristiano Ronaldo" | "Andrea Pirlo"
interface ProductForMen extends Product {
  startSoccer: StarSoccer
}
export class ProductForMenService {
  private productService: ProductService

  constructor(productService: ProductService) {
    this.productService = productService
  }

  getProduct(id: number) {
    const product = this.productService.getProduct(id)
    console.log("Obtener producto para hombre", { product })
  }

  createProductMen(product: ProductForMen) {
    product.id = 1
    product.name = "Colonia Airblue 75ml"
    product.startSoccer = "Leonel Messi"
    this.productService.createProduct(product)
    console.log("Crear producto para hombre", { product })
  }
}

/**
 * Servicio de un producto para mujeres
 */
type StarDisney = "Barbie" | "Malefica" | "Fiona"
interface ProductForWoman extends Product {
  starDisney: StarDisney
}
export class ProductForWomanService {
  private productService: ProductService

  constructor(productService: ProductService) {
    this.productService = productService
  }

  getProduct(id: number) {
    const product = this.productService.getProduct(id)
    console.log("Obtener producto para mujer", { product })
  }

  createProductWoman(product: ProductForWoman) {
    product.id = 1
    product.name = "Colonia Airpink 85ml"
    product.starDisney = "Barbie"
    this.productService.createProduct(product)
    console.log("Crear producto para mujer", { product })
  }
}

/**
 * Servicio para notificar un producto en genral
 */
type ChannelVia = "SMS" | "WhatsApp" | "Email"
interface ChannelType {
  via: ChannelVia
}
export class ProductNotificationService {
  sendNotify(channelType: ChannelType) {
    channelType.via = "Email"
    console.log("Enviar notificación por EMAIL", { channelType })
  }
}
