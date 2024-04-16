import { usePathname } from 'next/navigation';
import React from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

interface guestprops {
    setguestList: (guestList: any) => void; 
    guestList: any; 
    width?:string,
    setShow?:React.Dispatch<React.SetStateAction<boolean>>;
  }
const GuestCount = ({guestList,setguestList,width,setShow}:guestprops) => {
    const pathname = usePathname();
    console.log(pathname,'pathname++++++++++++++')

    const handleClose = () => {
        if (setShow) {
            setShow(false); // Ensure setShow is defined before calling it
        }
    };
  return (
    <div>
        <div className={`${width? 'w-[width]' : 'w-auto'}`}>
            <p className="text-sm ">
              This place has a maximum of 10 guests, not including infants. Pets
              aren't allowed.
            </p>
            {/* //adults */}
            <div className="flex justify-between py-2 ">
              <div>
                <p className="leading-normal font-medium">Adults</p>
                <p className="leading-normal font-normal text-textprimary">
                  Ages 13 or above
                </p>
              </div>
              <div className="flex justify-between gap-2">
                <CiCircleMinus
                  className={`text-textprimary cursor-pointer h-[30px] w-[30px] ${
                    guestList.adult === 0 ? "cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (guestList?.adult >= 1) {
                      setguestList({
                        ...guestList,
                        adult: guestList.adult - 1,
                      });
                    }
                  }}
                />
                <p>{guestList.adult}</p>
                <CiCirclePlus
                  className="text-textprimary h-[30px] w-[30px] cursor-pointer"
                  onClick={() =>
                    setguestList({
                      ...guestList,
                      adult: guestList.adult + 1,
                    })
                  }
                />
              </div>
            </div>
            {/* //child */}
            <div className="flex justify-between py-2 ">
              <div>
                <p className=" font-medium">Children</p>
                <p className=" font-normal text-textprimary">Ages 2–12</p>
              </div>
              <div className="flex justify-between gap-2">
                <CiCircleMinus
                  className={`text-textprimary cursor-pointer h-[30px] w-[30px] ${
                    guestList.child === 0 ? "cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (guestList?.child > 0) {
                      setguestList({
                        ...guestList,
                        child: guestList.child - 1,
                      });
                    }
                  }}
                />
                <p>{guestList.child}</p>
                <CiCirclePlus
                  className="text-textprimary h-[30px] w-[30px] cursor-pointer"
                  onClick={() =>
                    setguestList({
                      ...guestList,
                      child: guestList.child + 1,
                    })
                  }
                />
              </div>
            </div>
            {/* //infants */}
            <div className="flex justify-between py-2">
              <div>
                <p className=" font-medium">Infants</p>
                <p className=" font-normal text-textprimary">Under 2</p>
              </div>
              <div className="flex justify-between gap-2">
                <CiCircleMinus
                  className={`text-textprimary cursor-pointer h-[30px] w-[30px] ${
                    guestList.infants === 0 ? "cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (guestList?.infants > 0) {
                      setguestList({
                        ...guestList,
                        infants: guestList.infants - 1,
                      });
                    }
                  }}
                />
                <p>{guestList.infants}</p>
                <CiCirclePlus
                  className="text-textprimary h-[30px] w-[30px] cursor-pointer"
                  onClick={() =>
                    setguestList({
                      ...guestList,
                      infants: guestList.infants + 1,
                    })
                  }
                />
              </div>
            </div>
            {/* //pets */}
            <div className="flex justify-between py-2">
              <div>
                <p className=" font-medium">Pets</p>
                <p className=" font-medium text-textprimary underline">
                  Bringing a service animal?
                </p>
              </div>
              <div className="flex justify-between gap-2">
                <CiCircleMinus
                  className={`text-textprimary cursor-pointer h-[30px] w-[30px] ${
                    guestList.pets === 0 ? "cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (guestList?.pets > 0) {
                      setguestList({
                        ...guestList,
                        pets: guestList.pets - 1,
                      });
                    }
                  }}
                />
                <p>{guestList.pets}</p>
                <CiCirclePlus
                  className="text-textprimary h-[30px] w-[30px] cursor-pointer"
                  onClick={() =>
                    setguestList({
                      ...guestList,
                      pets: guestList.pets + 1,
                    })
                  }
                />
              </div>
            </div>
         
            {pathname === '/rooms'||  pathname === '/filterRoom' || pathname === '/'  ? <div className="flex justify-end">
                <p
                  className=" bg-slate-200 rounded-md w-[60px] p-1 flex justify-center cursor-pointer"
                  onClick={handleClose}
                >
                  {" "}
                  close
                </p>
              </div> :''}
          </div>
    </div>
  )
}

export default GuestCount;