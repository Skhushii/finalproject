import './App.css';
import { Routes , Route} from "react-router-dom";
import AdminElectionSelect from "./components/admin/ElectionSelect";
import AdminElectionParty from "./components/admin/ElectionParty";
import AdminElectionConnect from "./components/admin/ElectionConnect";
import AdminElectionVote from "./components/admin/ElectionVote";
import Cookies from "js-cookie";
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import UserVoting from './components/user/UserVoting';
import UserProfile from './components/user/UserProfile';



function App() {
  const role = Cookies.get("Role")

  if (!role || role === ""){
    // console.log("Role not Found..!");
    return (
      <Routes>
      <Route path='/login' element = {<UserLogin />} />
      <Route path='*' element = {<UserLogin />} />
      <Route path='/admin' element = {<AdminLogin />} />
      </Routes>
    );
  }
  else if (role === "admin"){
    return(
      <div className='admin-app'>
      <Routes>
        <Route path='/' element = {<AdminElectionSelect />} />
        <Route path='/admin/ElectionParty' element = {<AdminElectionParty />} />
        <Route path='/admin/PartyConnect' element = {<AdminElectionConnect />} />
        <Route path='/admin/E-Vote' element = {<AdminElectionVote />} />
      </Routes>
      </div>
    )
  } else if (role === "user")
  return (
    <div className='user-app'>
      <Routes>
        <Route path='/' element = {<UserVoting />} />
        <Route path='*' element = {<UserVoting />} />
        <Route path='/User-profile' element = {<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
