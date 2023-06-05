import Heading from "../components/Heading";
import Button from "../components/Button";
function Login() {
  return (
    <div className="container">
      <div className="col-sm-12 col-md-6 col-lg-5 y-pad mx-auto">
        <div className="cousMain ">
          <div className="test-content">
          <Heading
            upperHd='Login'
            innerHd='Lets Join Team'
            extraClassHd='dark_HdTheme'
            pages_cusClass='login-hd'
               />
            <div className="login_form">
              <form className="row g-3">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="col-12">
                  <Button 
                  btnId='loginUser'
                  refText="#"
                  buttonText='Login'
                  anyOtherXlass='PrimeClass'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
