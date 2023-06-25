import Card from "../Card/Card";
import "./Main.scss";
import { data } from "../../helpers/data";
const Main = () =>{
    return(
        <div className="card-container">
            {data.map((item) => (
            <Card 
                city ={item.title}
                description ={item.desc}
                img ={item.image}
                />
            ))} 
        </div>
    )
}


export default Main;