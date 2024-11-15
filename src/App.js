
import './App.css';
import Home from"./Components/Home"
function App() {
  return (
    <div className="font-robotoMono ">
        <div className={"fixed bg-black -z-10 m-0 min-h-screen w-full "}>
            <img src="https://cdn.pixabay.com/photo/2017/08/24/03/41/starry-sky-2675322_960_720.jpg" alt="bg"
                 className="min-h-screen w-full object-cover opacity-55"/>
        </div>
        <Home/>
    </div>
  );
}

export default App;
