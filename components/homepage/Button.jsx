const Button=()=>{

    function handleClick(){
        console.log("sign in button is clicked")
    }

    return (
        <div>
            <button onClick={handleClick} className="Btn">Sign in</button>
        </div>
    )
}

export default Button