interface Product {
  id: number
  name: string
}
export class ProductService {
  private products: Array<Product> = []

  getProducts() {
    return this.products
  }

  getProduct(id: number) {
    return this.products.find((item: Product) => item.id === id)
  }

  createProduct(product: Product) {
    this.products.push(product)
  }
}

type StarSoccer = "Leonel Messi" | "Cristiano Ronaldo" | "Andrea Pirlo"
interface ProductForMen extends Product {
  startSoccer: StarSoccer
}
export class ProductForMenService {
  constructor(private productService: ProductService) {}

  getProduct(id: number) {
    const product = this.productService.getProduct(id)
    console.log("Obtener producto para hombre", { product })
  }

  createProductMen(product: ProductForMen) {
    this.productService.createProduct(product)
    console.log("Crear producto para hombre", { product })
  }
}

type StarDisney = "Barbie" | "Malefica" | "Fiona"
interface ProductForWoman extends Product {
  starDisney: StarDisney
}
export class ProductForWomanService {
  constructor(private productService: ProductService) {}

  getProduct(id: number) {
    const product = this.productService.getProduct(id)
    console.log("Obtener producto para mujer", { product })
  }

  createProductWoman(product: ProductForWoman) {
    this.productService.createProduct(product)
    console.log("Crear producto para mujer", { product })
  }
}

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
