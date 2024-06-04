const GradientButton = (props) => {
    let { className, onClick = () => { }, children, text, id = '' } = props
    return (
        <button onClick={onClick}
            className={`py-2.5 px-6 w-full lg:w-auto rounded-3xl font-figtree text-base text-[#FFFFFF] text-center text-bold bg-gradient-to-r from-[#4361EE] to-[#7209B7] whitespace-nowrap ${className}`}
            id={id}
        >
            {text}{children}
        </button>
    )
}

export default GradientButton