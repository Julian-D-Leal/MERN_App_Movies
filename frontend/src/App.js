import './App.css';
import Movies from './components/Movies'; 

function App() {
  return (
    <div className="bg-black dark:bg-slate-900 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div className='text-slate-50	font-semibol text-3xl flex place-items-start gap-2'>
        <img alt="" width="100" height="88" src="https://www.shutterstock.com/image-vector/cute-wombat-smiling-over-wall-260nw-1796993968.jpg"></img>
        <h1 className='py-8' >Wombat Movies</h1>
      </div>
     <Movies/>
    </div>
  );
}

export default App;
