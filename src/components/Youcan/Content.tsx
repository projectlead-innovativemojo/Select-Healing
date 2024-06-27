import Image from 'next/image'
import React from 'react'
import Text from '../ui/Text'

// Define the type for the props
interface ContentProps {
  text: string;
  imgpath: any;
}

// Use the defined type in your component
const Content: React.FC<ContentProps> = ({ text, imgpath }) => {
  return (
    <div className="flex-col">
      <div className="">
        <div className="flex justify-center">
          <Image
            className=""
            src={imgpath}
            alt=""
            width={123.95}
            height={123.95}
          />
        </div>
        <Text as="h2" className="text-[20px] leadding-[26px] mt-5">
          {text}
        </Text>
      </div>
    </div>
  );
}

export default Content;
