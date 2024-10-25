export default function AuthLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <div className='relative flex justify-center items-center mx-auto overflow-clip'>     
            <div className=" w-full ">
            {children}
            </div>
        </div>
    )
}