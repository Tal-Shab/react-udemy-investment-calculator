import logo from '../assets/investment-calculator-logo.png'

// could also be directly in the html file since it is not dynamic
function Header() {
  return (
    <header id="header">
      <img src={logo} alt="a green bag with a dollar sign on it"/>
      <h1>React Investment Calculator</h1>
    </header>
  )
}

export default Header
