import Appbar from '../components/Appbar/Appbar.js';
import Board from '../components/List/Board.js';

const style ={
  Board: {

  }
}
function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}>
      <div style={{
        alignSelf: 'stretch',
      }}>
        <Appbar/>
      </div>
      <div style={{
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: 'red',
      }}>
        <Board style={{width: '80%'}} />
      </div>
    </div>

  );
}

export default App;
