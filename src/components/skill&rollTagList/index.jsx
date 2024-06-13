import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SvgIcon from "@/assets/svg";

const ImageObject = {
   AWS: 'black-circle-aws',
   Salesforce: 'salesforce',
   Google: 'googleCloud',
   Microsoft: 'microsoft',
   Oracle: 'oracle',
   Amazon: 'black-circle-aws',
   Azure:'microsoft'
}

const RollSkillTagList = (props) => {
   let { list = [], handleDelete = () => { }, deleteIconShow = true, showImage = true, containerClass = '', textClass = '', imageClassName = '', onClick = () => { }, LabelClassName = '' } = props

   const handleRemove = (tag) => {
      let updatedTags = [...list].filter(item => item !== tag)
      handleDelete(updatedTags)
   }

   const getSvgIconName = (tag) => {
      const key = Object.keys(ImageObject).find(key => tag.toLowerCase().split(' ').includes(key.toLowerCase()));
      return ImageObject[key]
   }
   return (
      <ul className="tags flex items-center gap-4 flex-wrap">
         {
            [...(list || [])].map((tag, index) => {
               return (
                  <li
                     key={`${tag}_RenderTagsList_${index}`}
                     className={`border border-[#BBBDC8] rounded-full flex items-center gap-2 ${containerClass}`}
                  >
                     <div className={`flex gap-2 h-full w-full ${LabelClassName}`} data-tagdata={tag} onClick={onClick}>

                        {
                           showImage && getSvgIconName(tag) && <div className="icon">
                              <SvgIcon name={getSvgIconName(tag)} outSide={'..'} folderName='commonAssets' className={imageClassName} />
                           </div>
                        }

                        <span className={`text-primary text-sm ${textClass}`}>{tag}</span>
                     </div>

                     {
                        deleteIconShow && <div className="cursor-pointer border p-0.5 hover:border-[#BBBDC8] hover:shadow-[0_0_35px_0_#AEAEAE1A] rounded-full" onClick={() => handleRemove(tag)}>
                           <XMarkIcon className="w-5 h-5" />
                        </div>
                     }

                  </li>
               )
            })
         }
      </ul>
   )
}

export default RollSkillTagList