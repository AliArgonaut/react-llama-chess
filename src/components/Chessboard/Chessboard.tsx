import './Chessboard.css'
import Tile from '../Tile/Tile'

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const ranks = [1, 2, 3, 4, 5, 6, 7, 8].reverse()

interface Piece {
    image: string,
    x: number,
    y: number,
}

const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
    pieces.push({image: '../../../public/images/pawnBlack.png', x:1 , y: i})
}

for (let i = 0; i < 8; i++) {
    pieces.push({image: '../../../public/images/pawnWhite.png', x: 6, y: i})
}

pieces.push(
    { image: '../../../public/images/knightBlack.png', x: 0, y: 1},
    { image: '../../../public/images/bishopBlack.png', x: 0, y: 2},
    { image: '../../../public/images/rookBlack.png', x: 0, y: 0},
    { image: '../../../public/images/queenBlack.png', x: 0, y: 4},
    { image: '../../../public/images/kingBlack.png', x: 0, y: 3},
    { image: '../../../public/images/knightBlack.png', x: 0, y:6},
    { image: '../../../public/images/rookBlack.png', x: 0, y: 7},
    { image: '../../../public/images/bishopBlack.png', x: 0, y: 5},

    { image: '../../../public/images/kingWhite.png', x: 7, y: 3},
    { image: '../../../public/images/queenWhite.png', x: 7, y: 4},
    { image: '../../../public/images/rookWhite.png', x: 7, y: 0},
    { image: '../../../public/images/bishopWhite.png', x: 7, y: 2},
    { image: '../../../public/images/knightWhite.png', x: 7, y: 1},
  { image: '../../../public/images/knightWhite.png', x: 7, y: 6},
    { image: '../../../public/images/rookWhite.png', x: 7, y: 7},
    { image: '../../../public/images/bishopWhite.png', x: 7, y: 5}
    )

export default function Chessboard() {
    
    let board = []

    for (let i = 0; i < ranks.length; i++) {
        for (let j = 0; j < files.length; j++) {
            let number = i + j + 2;
            let image = undefined

            pieces.forEach((piece) => {
                if (piece.x === i && piece.y === j) {
                    image = piece.image
                }
 
            })
            board.push(<Tile key={`${j}*${i}`} image={image} number={number}/>)
        }
    }


    return (
        <div id="Chessboard">
            {board}       
        </div>
)
}
