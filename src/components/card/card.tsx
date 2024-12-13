import "./card.css"

interface cardProps {
   price: number,
   title: string,
   image: string,
}

export function Card({ price, image, title }: cardProps) {
 return (
   <div className="card">
    <img src={image}/>
    <h2>{title}</h2>
    <p><b>Valor:</b> {price},00</p>
   </div>
 )
}