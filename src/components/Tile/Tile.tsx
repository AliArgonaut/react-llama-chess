import './tile.css'

interface Props {
    image? : string;
    number: number; 
}

export default function Tile({ number, image}: Props) {
    if (number % 2 === 0) {
        if (image){ 
        return (
            <div className="tile black-tile"><img src={image}></img></div>
        )   
        }
        else {
            return (
                <div  className="tile black-tile"></div>
            )
        }
    }
    else {
        if (image){
            return (
                <div className="tile white-tile"><img src={image}></img></div>
            )
        }
        else {
            return (
                <div  className="tile white-tile"></div>
            )
        }
    }
}