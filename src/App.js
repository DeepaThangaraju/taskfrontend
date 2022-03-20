import { Forms } from "./components/Form";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { EditDetail } from "./components/EditDetail";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Forms}/>
        <Route path="/api/edit/:id" component={EditDetail}/>
      </Switch>
      
    </div>
  );
}

export default App;
