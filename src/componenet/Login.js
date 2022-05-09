import React from 'react';
import './login.css'

function Login() {
    return (
        <form className='container'>
            {/* first div sign in file */}
            <div className='SignIn-div'>
                <div className='signin'>
                    <span className='sign'>Sign In</span>
                    <span className='text'>Wellcome Back</span>

                </div>
                <div><span className="material-symbols-outlined close" >
                    close
                </span></div>
            </div> <hr />
            {/* Input files */}
            <div className='data-input'>
                <div className='email'>
                    <input type='email' name='email' placeholder='Email or Phone Number' />
                </div>


                <div className='password'>
                    <input type='password' name='password' placeholder='Password' />

                    <span className="material-symbols-outlined icon">
                        visibility_off
                    </span>
                </div>
            </div>
{/* submit button div */}
            <div className='submit-btn' >
                <span>Forgot Your Password?</span>
                <button>Sign In</button>
            </div>

        </form>

    )
}
export default Login
