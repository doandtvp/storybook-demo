import Button from './stories/button/Button';
import Tags from './stories/tags/Tags';

function App() {
  const handleClick = () => {
    console.log('ddfdf');
  };

  return (
    <div className="App">
      <Button
        primary={true}
        label="register"
        size="large"
        backgroundColor="red"
        onClick={handleClick}
      />
      <Tags label="This Is Mine" backgroundColor="pink" />
    </div>
  );
}

export default App;
