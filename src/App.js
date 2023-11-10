import './App.css';

function App() {
  return (
    <div className="login-main">
      <div className='header'>
        <h1 className='header-title'>Login</h1>
      </div>
      <div className='signin-details'>

        <div className='userpass'>

          <input type='email' placeholder='Email *' />

          <div className='icon'>
            <i class="fa-solid fa-user"></i>

          </div>

        </div>
        <div className='userpass'>

          <input type='password' placeholder='Password *' />

          <div className='icon'>
            <i class="fa-solid fa-eye-slash"></i>

          </div>
        </div>

      </div>

      <button>Signin</button>


    </div>
  );
}

export default App;
