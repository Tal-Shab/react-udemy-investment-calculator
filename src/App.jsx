import Header from './components/Header'
import Results from './components/Results';
import UserInput from './components/UserInput'
import { useState } from 'react';

const INITIAL_INVESTMENT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INVESTMENT);

  const inputIsValid = (userInput.duration > 0);

  function handleChange(inputIdentifier, newValue) {
    //the + in +newValue will force a conversion from string to number - the reason it is needed is explained in UserInput component
    setUserInput( prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
        };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {inputIsValid ? <Results input={userInput}/> : <p className='center'>Please enter a duration grater than zero.</p>}
    </>
  )
}

export default App
