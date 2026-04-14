import { Outlet } from "react-router"
import MainNavigation from "../compnents/landing-page-components/MainNavigation"


const RootLayer = () => {
  return (
    <>
    <MainNavigation/>
    <Outlet/>
    </>
  )
}

export default RootLayer