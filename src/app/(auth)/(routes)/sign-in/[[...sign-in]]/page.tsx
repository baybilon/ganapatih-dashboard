import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
  <div className='flex flex-col justify-center items-center'>
    <div className='my-[20vh]'>
      <SignIn />
    </div>
  </div>
) 
  
}