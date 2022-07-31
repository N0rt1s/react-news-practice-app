import ReactDOM from "react-dom/client";
import './App.css';
import Navigation from './components/navigation'
import NewsContainer from './components/NewsContainer.js';
import { BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
         <Routes>
          <Route  path="/" exact element={<NewsContainer key="main" heading="News Stash-Top Headlines" category=""/>}/>
          <Route path="/Entertainment" exact element={<NewsContainer key="Entertainment"  heading="Entertainment" category="Entertainment"/>}/>
          <Route path="/Health" exact element={<NewsContainer key="Health" heading="Health" category="Health"/>}/>
          <Route path="/Science" exact element={<NewsContainer key="Science" heading="Science" category="Science"/>}/>
          <Route path="/Sports" exact element={<NewsContainer key="Sports" heading="Sports" category="Sports"/>}/>
          <Route path="/Technology" exact element={<NewsContainer key="Technology" heading="Technology" category="Technology"/>}/>
          <Route path="/Business" exact element={<NewsContainer key="Business" heading="Business" category="Business"/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
