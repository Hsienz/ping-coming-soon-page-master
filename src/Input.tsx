const Input = () => {
    const handleBtnOnClick = (e:React.BaseSyntheticEvent) => {
        let ok:Boolean = /^\w+@[a-z]+\.[a-z]+$/.test(e.target.parentElement.getElementsByTagName('input')[0].value) 
        if( ok ) return
        if( !e.target.parentElement.classList.contains('error') ){
            e.target.parentElement.classList.add('error')
        }
    }
    const handleInputOnClick = (e:React.BaseSyntheticEvent) => {
        e.target.parentElement.classList.remove('error')
    }
    return (
        <div className="flex flex-col w-full gap-y-4">
            <input type="text" onClick={handleInputOnClick} placeholder="Your email address" 
            className="pl-10 border-[1px] outline-none border-solid border-Blue w-full h-12 rounded-full" />
            <i className="hidden text-sm relative bottom-3 text-Light_Red font-light">Please provide a valid email address</i>
            <button type="button" onClick={handleBtnOnClick}
            className="w-full text-white bg-Blue h-12 rounded-full">
                Notify Me
            </button>
        </div>
    )
}
export default Input