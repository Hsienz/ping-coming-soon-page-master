const Icon = (props : {src:string} ) => {
    return (
        <a href='#' className="rounded-full w-10 h-10 border-[1px] border-solid border-Gray flex justify-center items-center hover:border-none hover:bg-Blue transition-all group">
            <img className="w-6 aspect-square filter-Blue group-hover:filter-white transition-all" src={props.src} alt="" />
        </a>
    )
}

export default Icon