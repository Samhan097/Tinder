import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";

function App() {
  return (
    // BEM class naming convention
    <div className="App">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
