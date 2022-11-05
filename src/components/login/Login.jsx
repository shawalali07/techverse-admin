import './login.css';

const Login = () => {
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1 className='loginHeading'>Hello Techverse.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aut alias at eius! Dolorum inventore itaque, nostrum aperiam ut
            provident.
          </p>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
