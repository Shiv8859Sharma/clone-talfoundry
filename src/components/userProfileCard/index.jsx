import { Transition } from '@headlessui/react';
import Image from '../ImageElement'
import { ChatBubbleBottomCenterIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import SvgIcon from '../../assets/svg';
import { memo } from 'react';
import { useSelector } from 'react-redux';
const UserProfileCard = () => {
  const userDetails = useSelector(state => state?.userDetails)
  console.log(userDetails?.full_name);
  return (
    <Transition
      show={true}
      as='div'
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 rotateY-90"
      enterTo="opacity-100 rotateY-0"
      className="lg:w-1/4 xl:w-2/5 bg-[#FFFFFF] border border-[#F1E7F8] rounded-xl p-8 flex flex-col gap-6"
    >
      <div className="profile flex items-center gap-5">
        <div className="logo">
          <Image src={userDetails?.image_url} type='profile' className='h-14 w-14' />
        </div>
        <div className="content">
          <div>
            <span className="text-[#17181C] font-figtree font-bold text-2xl">
              Hi {userDetails?.full_name}
            </span>
          </div>
          <div>
            <span className="font-figtree text-sm text-[#4361EE] font-semibold">
              Edit Profile
            </span>
          </div>
        </div>
      </div>

      <div className="divider border border-[#F1E7F8]"></div>

      <div className="detail flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[14px]">
            <div className="icon bg-[#4361EE] flex justify-center items-center rounded p-1">
              {/* <img src="./assets/homepage/signpost.svg" alt="signpost" /> */}
              <SvgIcon name='signPost' />
            </div>
            <div>
              <span className="font-figtree text-base font-bold">Job Posted</span>
            </div>
          </div>
          <div className="num">
            <span className="font-figtree text-base font-bold text-[#4361EE]">29</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[14px]">
            <div className="icon bg-[#4361EE] flex justify-center items-center rounded p-1">
              <SvgIcon name='proposalsDocument' />
            </div>
            <div>
              <span className="font-figtree text-base font-bold">Proposals</span>
            </div>
          </div>
          <div className="num">
            <span className="font-figtree text-base font-bold text-[#4361EE]">12</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[14px]">
            <div className="icon bg-[#4361EE] flex justify-center items-center rounded p-1">
              <ChatBubbleBottomCenterTextIcon className='w-5 h-5' color='white' />
            </div>
            <div>
              <span className="font-figtree text-base font-bold">Invitations</span>
            </div>
          </div>
          <div className="num">
            <span className="font-figtree text-base font-bold text-[#4361EE]">08</span>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default memo(UserProfileCard);
