import Appbar from '../components/Appbar/Appbar.js';
import Container from 'react-bootstrap/Container';
import List from '../components/List/List.js';


function App() {
  return (
    <div>
      <Appbar/>
      <Container>
        <List/>
      </Container>
    </div>

  );
}

export default App;
