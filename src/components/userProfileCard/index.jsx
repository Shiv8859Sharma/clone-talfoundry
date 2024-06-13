import { Transition } from '@headlessui/react';
import Image from '../ImageElement'
import SvgIcon from '@/assets/svg';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import NavigatePage from '../navigatePage';
const UserProfileCard = ({ userActivitySummary }) => {
  const userDetails = useSelector(state => state?.userDetails);

  function formatNumbers(number, length) {
    return  String(number).padStart(length, '0');
  }

  const maxLength = Math.max(...userActivitySummary.map(userAce => String(userAce.count).length));

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
        {
          userActivitySummary.map((summary, index) => {
            return (
              <NavigatePage key={`userActivitySummary_${index}`} url={summary?.url} className="flex justify-between items-center" id={(summary?.label || '').toLowerCase().split(' ').join('_')}>
                <div className="flex items-center gap-[14px]">
                  <div className="icon bg-[#4361EE] flex justify-center items-center rounded p-1">
                    {
                      summary?.svgIcon ?
                        <SvgIcon name={summary?.svgIcon} />
                        : summary?.icon
                    }
                  </div>
                  <div>
                    <span className="font-figtree text-base font-bold">{summary?.label}</span>
                  </div>
                </div>
                <div className="num">
                  <span className="font-figtree text-base font-bold text-[#4361EE]">{formatNumbers(summary?.count, maxLength)}</span>
                </div>
              </NavigatePage>
            )
          })
        }
      </div>
    </Transition>
  );
};

export default memo(UserProfileCard);
