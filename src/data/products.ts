export interface Product {
  id: number
  name: string
  price: string
  rating: number
  reviews: number
  image: string
  badge?: string
}

const products: Product[] = [
  { id: 1, name: "Premium Dog Food - 1kg", price: "€39.99", rating: 5, reviews: 128, image: "/assets/dog_food.jpg", badge: "PREMIUM" },
  { id: 2, name: "Interactive Cat Toy", price: "€24.99", rating: 5, reviews: 94, image: "/assets/cat_toy.jpg" },
  { id: 3, name: "Orthopedic Dog Bed", price: "€59.99", rating: 5, reviews: 76, image: "/assets/dog_bed.jpg" },
  { id: 4, name: "Automatic Pet Feeder", price: "€79.99", rating: 3, reviews: 112, image: "/assets/feeder.jpg" },
  { id: 5, name: "Cat Scratching Post", price: "€34.99", rating: 5, reviews: 89, image: "/assets/cat_post.jpg" },
  { id: 6, name: "Dog Leash & Collar Set", price: "€29.99", rating: 5, reviews: 104, image: "/assets/dog_leash.jpg" },
  { id: 7, name: "Aquarium Starter Kit", price: "€89.99", rating: 5, reviews: 67, image: "/assets/aquarium.jpg" },
  { id: 8, name: "Bird Cage", price: "€119.99", rating: 5, reviews: 52, image: "/assets/bird_cage.jpg" }
]

export default products
