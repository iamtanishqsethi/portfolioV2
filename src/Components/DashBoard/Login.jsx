import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {setUser} from "../../utils/auth";
import {BASE_URL} from "../../utils/constants";

const Login=()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const handleSubmit=async ()=>{
        // e.preventDefault();
        try{
            const response=await fetch(`${BASE_URL}/user/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            })
            if(!response.ok){
                throw new Error('Invalid email or password')

            }
            const user=await response.json();
            if(user){
                dispatch(setUser(user));
                navigate('/dashboard');
            }


        }catch(err){
            console.log(err);
            setError(err.message);
        }


    }



    return (
        <div className={'flex flex-col items-center justify-center text-white h-screen'}>
            <div className={'bg-gradient-to-br from-zinc-950/50 via-zinc-900/50 to-zinc-800/50 backdrop-blur-xl rounded-xl  h-[60%] lg:h-[68%] w-[90%] lg:w-[28%] p-8 flex flex-col items-center '}>
                <h1 className="text-4xl text-center font-bold m-2 mb-8">
                    SignIn
                </h1>
                <input
                    type="email"
                    className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'}
                    placeholder={'Email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'}
                    placeholder={'Password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <h1 className={'text-red-600'}>{error}</h1>
                <button
                    onClick={handleSubmit}
                    className={' bg-blue-700 rounded py-3 font-bold m-2 my-4 w-full focus:outline-none'}>SignIn</button>
            </div>
        </div>
    )
}
export default Login;