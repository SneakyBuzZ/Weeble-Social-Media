import { Outlet, Navigate } from "react-router-dom"

function AuthLayout() {
  const isAuthenticated = false;
  return (
    <>
    {isAuthenticated?(
      <Navigate to="/"/>
    ):(
      <>
      <section className="flex flex-1 justify-center items-center flex-col">
        <Outlet />
      </section>

      <img src="/auth-side.png" alt="AUTH-SIDE" className=" hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"/>
      </>
    )}
    </>
  )
}

export default AuthLayout