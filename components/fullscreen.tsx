export function Fullscreen(props){
    return <>
        <div className='h-full w-full relative bg-indigo-500'>
            {props.children}
        </div>
    </>
}