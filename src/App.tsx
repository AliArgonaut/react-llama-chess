import Chessboard from './components/Chessboard/Chessboard'
import './index.css'
import Ranks from './components/Chessboard/Ranks'
import Files from './components/Chessboard/Files'

function App() {

  return (
  <>
    <div className='boardGroup'>    
      <Chessboard />
      <Ranks />
      <Files />
    </div>
  </> 
)
}

export default App
