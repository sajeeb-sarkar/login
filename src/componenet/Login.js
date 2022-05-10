import React,{useState} from 'react';
import './login.css'

function Login() {

        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');
        const [allAntry,setAllEntry]=useState('');

        const submitHandelar=(event)=>{
            event.preventDefault();
            const newEntry=[{email:email, password:password}]
            setAllEntry(newEntry,...allAntry)
            console.log(allAntry)
            setEmail('')
            setPassword('')
            
        }
    return (
        <form className='container' onSubmit={submitHandelar}>
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
                    <input type='email' name='email' placeholder='Email or Phone Number' autoComplete='off' 
                     value={email}  onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <div className='password'>
                    <input type='password' name='password' placeholder='Password' autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)} />

                    <span className="material-symbols-outlined icon">
                        visibility_off
                    </span>
                </div>
            </div>
{/* submit button div */}
            <div className='submit-btn' >
                <span>Forgot Your Password?</span>
                <button type='submit'>Sign In</button>
            </div>

        </form>

    )
}
export default Login
