import './Ranks.css'

export default function Ranks(){
    const rankList = []

    for (let i = 8; i > 0; i--) {
        rankList.push(<div key={`rank${i}`} className='rankTile'>{i}</div>)
    }
    
    return (
        <div className='rankContainer'>
            {rankList}
        </div>
    )
}