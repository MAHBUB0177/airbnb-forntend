"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import CommonModal from "../common/commonmodal";
import CommonLogin from "../login/page";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { setSearchModal } from "@/redux/reducer/authReducer";

interface AuthDataType {
  token: string; // Assuming token is a string
  firstName: string;
  // Add other properties as needed
}

interface FooterProps {
  isopen: boolean;
  setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SmallDeviceFooter = ({ setIsopen }: FooterProps) => {
  const dispatch = useDispatch();
  const authData = useSelector(
    (state: RootState) => state.auth?.authData
  ) as AuthDataType;
  //modal open part
  const [isModalOpen, setIsModalOpen] = useState(false);
  const _handleCancel = () => {
    setIsModalOpen(false);
  };
  const [active, setActive] = useState("Explore");
  return (
    <div>
      <div className="flex justify-center gap-10 items-center pt-2  mx-auto">
        <div
          onClick={() => {
            setActive("Explore");
            dispatch(setSearchModal(true));
          }}
          className={`${
            active === "Explore" ? "text-secondary font-semibold" : "font-light"
          }`}
        >
          <div className="flex justify-center items-center">
            <IoSearchOutline
              style={{ fontWeight: "bold", height: "20px", width: "20px" }}
            />
          </div>
          <p className="text-xs ">Explore</p>
        </div>
        <div
          onClick={() => setActive("Whistle")}
          className={`${
            active === "Whistle" ? "text-secondary font-semibold" : "font-light"
          }`}
        >
          <div className="flex justify-center items-center">
            <MdFavoriteBorder />
          </div>
          <p className="text-xs ">Whistle</p>
        </div>

        {authData?.token ? (
          <>
            <Link href={"/profile"}>
              <div
                onClick={() => {
                  setActive("Profile");
                }}
                className={`${
                  active === "Profile"
                    ? "text-secondary font-semibold"
                    : "font-light"
                }`}
              >
                <div className="flex justify-center items-center">
                  <FaUserCircle
                    style={{
                      fontWeight: "bold",
                      height: "20px",
                      width: "20px",
                    }}
                  />
                </div>
                <p className="text-xs ">Profile</p>
              </div>
            </Link>
          </>
        ) : (
          <div
            onClick={() => {
              setActive("Log In");
              setIsModalOpen(true);
            }}
            className={`${
              active === "Log In"
                ? "text-secondary font-semibold"
                : "font-light"
            }`}
          >
            <div className="flex justify-center items-center">
              <FaUserCircle
                style={{ fontWeight: "bold", height: "20px", width: "20px" }}
              />
            </div>
            <p className="text-xs ">Log In</p>
          </div>
        )}

        <div
          onClick={() => {
            setActive("Menu");
            setIsopen((prevIsOpen) => !prevIsOpen);
          }}
          className={`${
            active === "Menu" ? "text-secondary font-semibold" : "font-light"
          }`}
        >
          <div className="flex justify-center items-center">
            <TiThMenu
              style={{ fontWeight: "bold", height: "20px", width: "20px" }}
            />
          </div>
          <p className="text-xs ">Menu</p>
        </div>

        <CommonModal
          open={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title={`Log in or sign up`}
          onCancel={_handleCancel}
          width={"500px"}
        >
          <CommonLogin setIsModalOpen={setIsModalOpen} />
        </CommonModal>
      </div>
    </div>
  );
};

export default SmallDeviceFooter;
