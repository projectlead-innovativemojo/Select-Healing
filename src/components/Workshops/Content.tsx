import Image from 'next/image'
import React from 'react'
import Text from '../ui/Text'
import Button from '../ui/Button';

// Define the type for the props
interface ContentProps {
  heading: string;
  text: string;
  imgpath: any;
}

// Use the defined type in your component
const Content: React.FC<ContentProps> = ({ text,heading, imgpath }) => {
  return (
   <>
   <div className="flex flex-wrap max-w-[1173px] w-full gap-20 mob:gap-10 justify-center mb-14">
          <div className="flex-col ">
            <Image src={imgpath} alt="" width={332} height={251} />
          </div>
          <div className="flex-col items-center">
            <div className="">
              <Text as="h2" className="mt-3 mob:text-center">{heading}</Text>
              <Text as="p" className="max-w-[734px] text-[#525252] py-6 mob:text-center">
              {text}
              </Text>
             <div className="mob:flex mob:justify-center">
             <Button className="bg-transparent text-[#E0B15E] max-w-[235.55px]">
                Enroll Now
              </Button>
             </div>
              <hr className="h-px mt-7  bg-[#767676]/30 border-0 " />
            </div>
          </div>
        </div>
   </>
  );
}

export default Content;
