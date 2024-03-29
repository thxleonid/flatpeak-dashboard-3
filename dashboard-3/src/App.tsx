import Header from "./components/header";
import Signup from "./components/signup";
import Signin from "./components/signin";

const accounts = [
  {icon: '', label: 'Timeshift', email: 'timeshift@gmail.com'}, 
  {icon: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png', label: 'Timeshift 2', email: 'anothertimeshift@gmail.com'},
  {icon: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', label: 'Timeshift 3', email: 'thirdtimeshift@gmail.com'},
  
]

export default function MyApp() {
  return (
    <div>
      <Header accounts={accounts}/>
      <Signin />
    </div>
  );
}


