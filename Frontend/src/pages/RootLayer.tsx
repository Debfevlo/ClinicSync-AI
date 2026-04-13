import { Outlet } from "react-router"
import MainNavigation from "../compnents/MainNavigation"


const RootLayer = () => {
  return (
    <>
    <MainNavigation/>
    <Outlet/>
    </>
  )
}

export default RootLayer