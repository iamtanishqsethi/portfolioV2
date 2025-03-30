const Login=()=>{
    return (
        <div className={'flex flex-col items-center justify-center text-white h-screen'}>
            <div className={'bg-gradient-to-br from-zinc-950/50 via-zinc-900/50 to-zinc-800/50 backdrop-blur-xl rounded-xl  h-[60%] lg:h-[68%] w-[90%] lg:w-[28%] p-8 flex flex-col items-center '}>
                <h1 className="text-4xl text-center font-bold m-2 mb-8">
                    SignIn
                </h1>
                <input type="email" className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'} placeholder={'Email'}/>
                <input type="password" className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'} placeholder={'Password'}/>
                <button className={' bg-blue-700 rounded py-3 font-bold m-2 my-4 w-full focus:outline-none'}>SignIn</button>
            </div>
        </div>
    )
}
export default Login;