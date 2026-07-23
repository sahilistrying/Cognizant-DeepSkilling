import React,{useState} from "react";
function GuestGreeting (){
  return <h2>Please sign up</h2>
}
function UserGreeting(){
  return (<h2>Welcome back</h2>)
}
function Greeting(props){
  if(props.isLoggedin){
    return (<UserGreeting/>)
  }
  else{
    return (<GuestGreeting />)
  }
}
function LoginButton(props){
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
function LogoutButton(props){
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}
function App(){
  const [isLoggedin,setIsLoggedin]=useState(false);
  function handleLogin(){
    setIsLoggedin(true);
  }
  function handleLogout(){
    setIsLoggedin(false);
  }
  return (
    <div>
      <Greeting isLoggedin={isLoggedin}></Greeting>
      {isLoggedin ? <LogoutButton onClick={handleLogout}></LogoutButton> : <LoginButton onClick={handleLogin}></LoginButton>}
    </div>
  )
}
export default App;
