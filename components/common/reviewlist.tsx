//review list
import { MdCleanHands } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GrKey } from "react-icons/gr";
import { CiChat2 } from "react-icons/ci";
import { FaMapLocation } from "react-icons/fa6";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { GrTextAlignLeft } from "react-icons/gr";
//review description
import image1 from '@/assets/images/reviewcard/image1.webp'
import image2 from '@/assets/images/reviewcard/image2.webp'
import image3 from '@/assets/images/reviewcard/image3.webp'
import image4 from '@/assets/images/reviewcard/image4.webp'
import image5 from '@/assets/images/reviewcard/image5.webp'
import image6 from '@/assets/images/reviewcard/image6.webp'

export const reviewlist=[
    {
        image:image1,
        name:'Romain',
        city:'Brussels, Belgium',
        icon:'',
        date:'November 2023',
        description:'The accommodation was conveniently located close to one of the entrances to the Taj Mahal. The room was comfortable and quiet. The family was welcoming, breakfast included, and'
    },
    {
        image:image2,
        name:'Abril',
        city:'Mexico City, Mexico',
        icon:'',
        date:'May 2023',
        description:'I had the best experience at this place. It was my birthday and they gave me a cake as a surprise. Also I broke one of my toes and the help to to find some band-aids and everything I need'
    },
    {
        image:image3,
        name:'Wei',
        city:'Singapore, Singapore',
        icon:'',
        date:'March 2023',
        description:'Suraj and Beena’s place is simply fantastic. It’s the best BnB since I arrived in India. The bedroom and toilets are squeaky clean and most importantly, the bed is very comfortable'
    },
    {
        image:image4,
        name:'Barry',
        city:'Bali, Indonesia',
        icon:'',
        date:'February 2023',
        description:'We had an amazing stay here, highly suggested. Staff is super helpful.'
    },
    {
        image:image5,
        name:'Romain',
        city:'Brussels, Belgium',
        icon:'',
        date:'November 2023',
        description:'The accommodation was conveniently located close to one of the entrances to the Taj Mahal. The room was comfortable and quiet. The family was welcoming, breakfast included, and'
    },
    {
        image:image6,
        name:'ratis',
        city:'Burulia, Belgium',
        icon:'',
        date:'November 2023',
        description:'conveniently located close to one of the entrances to the Taj Mahal. The room was comfortable and quiet. The family was welcoming, breakfast included, and'
    }
]




export const  reviewlistitem = [
    {
      title: "Overall rating",
      icon: GrTextAlignLeft,
      rating: "4.9",
    },
    {
      title: "Cleanliness",
      icon: MdCleanHands,
      rating: "5.0",
    },
    {
      title: "Accuracy",
      icon: FaRegCircleCheck,
      rating: "4.8",
    },
    {
      title: "Check-in",
      icon: GrKey,
      rating: "4.9",
    },
    {
      title: "Communication",
      icon: CiChat2,
      rating: "4.8",
    },
    {
      title: "Location",
      icon: FaMapLocation,
      rating: "4.9",
    },
    {
      title: "value",
      icon: RiShieldKeyholeLine,
      rating: "4.8",
    },
  ];