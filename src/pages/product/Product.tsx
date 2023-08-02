import "./product.scss"
import { Single } from "../../components/single/Single"
import { singleProduct } from "../../data"

export const Product = () => {
  return (
    <div className='product'>
        <Single {...singleProduct}/>
    </div>
  )
}
