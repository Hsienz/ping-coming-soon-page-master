const Icon = (props : {src:string} ) => {
    return (
        <a href='#' className="rounded-full w-10 h-10 border-[1px] border-solid border-Gray flex justify-center items-center">
            <img className="w-6 aspect-square filter-Blue" src={props.src} alt="" />
        </a>
    )
}

export default Icon