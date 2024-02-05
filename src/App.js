import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import Header from "./components/Header";
import { Footer } from './components/Footer';
import { User } from './components/Users/User';
import { AddEmployee } from './components/employee/AddEmployee';
import { ValidateEmployee } from './components/employee/ValidateEmployee';
import { RegisterEmployee } from './components/employee/RegisterEmployee';
import { Navbar } from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { NetflixMovies } from './components/netflix/NetflixMovies';
import { Thriller } from './components/netflix/Thriller';
import { Comedy } from './components/netflix/Comedy';
import { NetflixHome } from './components/netflix/NetflixHome';
import { Series } from './components/netflix/Series';
import { ErrorPage } from './components/netflix/ErrorPage';
import { SeriesDetail } from './components/netflix/SeriesDetail';
import { ApiDemo1 } from './components/apis/ApiDemo1';
import { ApiDemo2 } from './components/apis/ApiDemo2';
import { ApiDemo3 } from './components/apis/ApiDemo3';
import { ApiDemo4 } from './components/apis/ApiDemo4';
import { ApiDemo5 } from './components/apis/ApiDemo5';
import { HookDemo } from './components/HookDemo';
import { UserDetail } from './components/apis/UserDetail';
import { UpdateUser } from './components/apis/UpdateUser';
import { Students } from './components/students/Students';
import { AppContext } from './context';
import { LoginUser } from './components/LoginUser';
import ProtectedRoute from './hooks/ProtectedRoutes';
import { ProductComponent } from './components/ProductComponent';
import { CartComponent } from './components/CartComponent';
import { WithdrawComponent } from './components/WithdrawComponent';
import { ContentComponent } from './components/ContentComponent';
import { UserQuery } from './components/query/UserQuery';
import axios from 'axios';
import { AddUserQuery } from './components/query/AddUserQuery';


function App() {
  axios.defaults.baseURL = "https://node5.onrender.com";
  
  var company = "KGF";
  var title = "INDIA";
  var indepndence = "15th August 1947";
  var freedomFighters ={
    "Mg": "Father of the Nation",
    "Bs": "Shaheed",
  }
  const users =[
    {
      id:1,
      name:"Raj",
    },
    {
      id:2,
      name:"Ravi",
    }
  ]

  return (
    <div className="App">
      {/*<Header title={title} ind={indepndence} ff = {freedomFighters}></Header>
      <Home t={title} ind = {indepndence} ff ={freedomFighters} users = {users}></Home>*/}
      {/* <User title={title}></User> */}
      {/*<Footer />*/}
      {/* <AddEmployee></AddEmployee> */}
      {/* <ValidateEmployee></ValidateEmployee> */}
      <Navbar />
      {/* <RegisterEmployee/> */}

      <AppContext.Provider value={{company}}>
      <Routes>
        <Route path="/" element={<NetflixHome />}></Route>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies/>}></Route>
        <Route path="/thriller" element={<Thriller/>}></Route>
        <Route path="/netflixmovies/comedy" element={<Comedy/>}></Route>
        <Route path="/series" element={<Series/>}></Route>
        <Route path="/hookdemo" element={<HookDemo/>}></Route>
        
        <Route element={<ProtectedRoute/>}>
          <Route path="/apidemo1" element={<ApiDemo1/>}></Route>
          <Route path="/apidemo2" element={<ApiDemo2/>}></Route>
          <Route path="/apidemo3" element={<ApiDemo3/>}></Route>
        </Route>

        <Route path="/apidemo4" element={<ApiDemo4/>}></Route>
        <Route path="/apidemo5" element={<ApiDemo5/>}></Route>
        <Route path="/userdetail/:id" element={<UserDetail/>}></Route>
        <Route path="/userupdate/:id" element={<UpdateUser/>}></Route>
        <Route path="/product" element={<ProductComponent/>}></Route>
        <Route path='/login' element={<LoginUser/>}></Route>
        <Route path='/cart' element={<CartComponent/>}></Route>
        <Route path='/withdraw' element={<WithdrawComponent/>}></Route>
        <Route path='/content' element={<ContentComponent/>}></Route>


        <Route path="/students" element={<Students/>}></Route>
        <Route path="/userquery" element={<UserQuery/>}></Route>    
        <Route path="/adduserdata" element={<AddUserQuery/>}></Route>    
        {/* <Route path= "/series/detail/:id" element ={<SeriesDetail/>}></Route> */}
        <Route path = "/series/detail/:id/:name" element ={<SeriesDetail/>}></Route>
        
         {/* <Route path = "*" element = {<h1>404</h1>}></Route> */}
         <Route path = "*" element = {<ErrorPage/>}></Route>
      </Routes>
      
      </AppContext.Provider>
    </div>
  );
}

export default App;
