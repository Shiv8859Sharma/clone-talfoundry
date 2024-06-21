import { Outlet } from "react-router-dom"
import PopupComponent from "@/components/Popup"
import Headers from '@/layouts/headers'
import { Suspense, memo } from "react";
import Footer from "@/layouts/footer";
// import useNetworkStatus from "@/utills/customHooks";
import SvgIcon from "@/assets/svg"

const layout = () => {
  // useNetworkStatus();
  let InitialLoader = () => {

    return (
      <div className="flex items-center justify-center h-[50vh] w-[100vw]">
        <p className="text-center flex gap-1">
          <SvgIcon name='logo' folderName='commonAssets' outSide='..' width='3.8rem' />
          <span className="font-bold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-[#4ED4F7] via-[#2C57F3] to-[#7143D7]">
            Talfoundry
          </span>
        </p>
      </div>
    )
  }

  return (
    <>
      <PopupComponent />
      <Headers />
      <Suspense fallback={InitialLoader()}>
        <div className="pt-[5rem]">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </>
  )

}
export default memo(layout)