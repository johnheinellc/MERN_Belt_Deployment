import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MakePet from './components/MakePet';
import DisplayPets from './components/DisplayPets';
import PetDetail from './components/PetDetail';
import EditPet from './components/EditPet';


function App() {

  const [updateForm, setUpdateForm]= useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        
        <h1>Pet Shelter</h1>
        <Switch>
          <Route exact path="/">
            <DisplayPets updateForm={updateForm}/>
          </Route>
          <Route exact path="/details/:_id">
            <PetDetail/>
          </Route>
          <Route exact path="/edit/:_id">
            <EditPet/>
          </Route>
          <Route exact path="/new">
          <MakePet updateForm={updateForm} setUpdateForm={setUpdateForm}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
