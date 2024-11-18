import { Link } from 'react-router-dom'
// import AllPlayers from './components/AllPlayers';


export default function Navbar() {
    return (
    <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/players">Players</Link>
        {/* <Link to="/red">Red</Link>
        <Link to="/pink">Pink</Link>
        <Link to="/green">Green</Link> */}
      </div>
    );
  }

// export default function NavBar() {
//     const { isLoggedIn, user, logout } = useUser();
//     return (
//         <div id="navigation" css={styles.navigation}> 
//             <Link to='/'>
//                 <div>
//                     <AllPlayers />
//                     <div>Players</div>
//                 </div>
//             </Link>
//             {/* <LoginOrProfile isLoggedIn={isLoggedIn} user={user} logout={logout} /> */}
            
//         </div>
//     )
// }