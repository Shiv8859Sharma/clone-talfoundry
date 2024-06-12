import { Link } from 'react-router-dom'; // You may need to adjust this based on your routing setup
import backGroundImage from '@/assets/svg/onBoardingBackground.svg'
import image1 from '@/assets/commonAssets/onBoarding/image1.svg'
import image2 from '@/assets/commonAssets/onBoarding/image2.svg'
import image3 from '@/assets/commonAssets/onBoarding/image3.svg'
import { useEffect, useState } from 'react';
import Image from "@/components/ImageElement"
import SvgIcon from "@/assets/svg"
import { memo } from 'react';

let images = [image1, image2, image3]
const LoginSignUpLeftLayout = () => {
    const [activeImage, setActiveImage] = useState(0)
    useEffect(() => {
        let interval = setInterval(() => {
            setActiveImage((pre) => pre === 2 ? 0 : ++pre)
        }, 3000);

        return () => {
            clearInterval(interval)
        }
    }, [])
    // const 
    return (
        <div className="content_left hidden lg:block relative lg:w-1/2 h-full overflow-hidden lg:px-10 xl:px-20 3xl:px-24 py-8">
            <div className={`animate-[slide_20s_linear_infinite] absolute top-0 left-0 w-[200%] h-full`} style={{ background: `url(${backGroundImage})` }}>
            </div>
            <div className="content relative flex flex-col items-center gap-10">
                <div className="brand_logo w-full cursor-pointer">
                    <Link to="/" className="flex items-center gap-1 outline-0">
                        <SvgIcon name='logo' folderName='commonAssets' outSide='..' className="w-7 h-5" />
                        <span className="font-bold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-[#4ED4F7] via-[#2C57F3] to-[#7143D7]">Talfoundry</span>
                    </Link>
                </div>

                <div className="heading text-left">
                    <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#17181C] font-semibold">Discover the World’s Best
                        <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] font-semibold word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%"> Cloud Experts</span></span>
                </div>

                <div className="box_animation">
                    <ul className="relative w-full h-full flex justify-center items-center">
                        {images.map((image, index) => {
                            return (
                                <li key={`image_${index}_card`} className={`card absolute top-0 w-[320px] h-[320px] ${activeImage === index ? 'animate-[cardRotate_3s_linear_infinite]' : ''} card_${index}}`}>
                                    <Image src={image} alt="" />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default memo(LoginSignUpLeftLayout);