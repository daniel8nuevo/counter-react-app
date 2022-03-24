import "/Design/styles.css";
import Counter from "/components/counter.js";
import Header from "/components/header.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Counter />
    </div>
  );
};

export default App;
