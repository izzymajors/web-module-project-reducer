import React, { uesState, useReducer } from 'react';
import reducer, { initialState }from './reducers/index';
import {addOne, applyNumber, changeOperation, clearDisplay, memoryAdd, memoryRecord, memoryClear } from './actions/index';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAddClick = () =>{
  //   dispatch(addOne(1));
  // };

  const applyNumberClick = (num) =>{
    dispatch(applyNumber(num));
  };
 
  const changeOperationClick = (e) => {
    dispatch(changeOperation(e));
  };

  const clearDisplayCLick = () => {
    dispatch(clearDisplay());
  };

  const memoryAddClick = (num) => {
    dispatch(memoryAdd(num));
  };

  const memoryRecordClick = () => {
    dispatch(memoryRecord());
  };

  const memoryClearClick = () => {
   dispatch(memoryClear);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={ () => (memoryAddClick("M+"))} value={"M+"}/>
              <CalcButton onClick={ () => (memoryRecordClick("MR"))} value={"MR"}/>
              <CalcButton onClick={ () => (memoryClearClick)} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={ () => (applyNumberClick(1))} value={1}/>
              <CalcButton onClick={ () => (applyNumberClick(2))} value={2}/>
              <CalcButton onClick={ () => (applyNumberClick(3))} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={ () => (applyNumberClick(4))} value={4}/>
              <CalcButton onClick={ () => (applyNumberClick(5))} value={5}/>
              <CalcButton onClick={ () => (applyNumberClick(6))} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={ () => (applyNumberClick(7))} value={7}/>
              <CalcButton onClick={ () => (applyNumberClick(8))} value={8}/>
              <CalcButton onClick={ () => (applyNumberClick(9))} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={ () => (changeOperationClick("+"))} value={"+"}/>
              <CalcButton onClick={ () => (changeOperationClick("*"))}  value={"*"}/>
              <CalcButton onClick={ () => (changeOperationClick("-"))}  value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clearDisplayCLick} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
