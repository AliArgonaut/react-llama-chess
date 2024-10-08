import './tile.css'

interface Props {
    image? : string;
    number: number; 
}

export default function Tile({ number, image}: Props) {
    if (number % 2 === 0) {
        if (image){ 
        return (
            <div className="tile black-tile">
                <div style={{backgroundImage: `url(${image})`}} className='chessPiece'></div>
            </div>
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
                <div className="tile white-tile">
                    <div style={{backgroundImage: `url(${image})`}} className='chessPiece'></div>
                </div>
            )
        }
        else {
            return (
                <div  className="tile white-tile"></div>
            )
        }
    }
}