import { hamburger } from "../../../dashboard/src/vendorDashboard/constants"
import biryani from './images/items/biryani.png'
import chicken from './images/items/chicken.png'
import noodles from './images/items/noodles.png'
import burger from './images/items/burger.png'
import cake from './images/items/cake.png'
import dosa from './images/items/dosa.png'
import pizza from './images/items/pizza.png'
import samosa from './images/items/samosa.png'
import milkshake from './images/items/milkshake.png'
import free from './images/offers/free.png'
import discount from './images/offers/discount.png'
import gift from './images/offers/gift.png'


export {
  hamburger,discount,free,gift
}

export const items = [
  {img:biryani,title:"biryani"},
  {img:pizza,title:"pizza"},
  {img:samosa,title:"samosa"},
  {img:chicken,title:"chicken"},
  {img:burger,title:"burger"},
  {img:dosa,title:"dosa"},
  {img:cake,title:"cake"},
  {img:milkshake,title:"milkshake"},
  {img:noodles,title:"noodles"}
]

export const navLinks = [
  {title:"Home", href:"/"},
  {title:"Restaurants", href:"/"},
  {title:"About", href:"/"},
  {title:"Contact", href:"/"}
]