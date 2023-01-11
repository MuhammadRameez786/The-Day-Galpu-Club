import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialRed,
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiSocialPinterest,
} from "react-icons/ti";
import { DiJqueryLogo } from "react-icons/di";
import { 
  FaPinterest, 
  FaRedditAlien, 
  FaSnapchatGhost, 
  FaTwitch, 
  FaDiscord, 
} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./AuthorProfileCard.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";

const AuthorProfileCard = ({ currentAccount }) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  //copyAddress function
  const copyAddress = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  const openReport = () => {
    if (!report) {
      setReport(true);
      setShare(false);
    } else {
      setReport(false);
    }
  };

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
            src={images.nft_image_1}
            className={Style.AuthorProfileCard_box_img_img}
            alt="NFT IMAGES"
            width={220}
            height={220}
          />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            The Day Galpu Club{""}{" "}
            <span>
              <MdVerified />
            </span>{" "}
          </h2>

          <div className={Style.AuthorProfileCard_box_info_address}>
            <input type="text" value={currentAccount} id="myInput" />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
          </div>

          <p>
          We create Digital Art based on the authentic storylines of the Indigenous people of Dulunguru, a Micronation that returns liberty for all...
          </p>

          <div className={Style.AuthorProfileCard_box_info_social}>
          <a href="https://www.facebook.com/Thedaygalpuclub">
              <TiSocialFacebook />
            </a>
            <a href="https://www.linkedin.com/company/the-day-galpu-club/">
              <TiSocialLinkedin />
            </a>
            <a href="https://twitter.com/TheDayGalpuClub">
              <TiSocialTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UCSiAaU4ogteY4Q6_2VZhlVw">
              <TiSocialYoutube />
            </a>
            <a href="https://www.instagram.com/thedaygalpuclub">
              <TiSocialInstagram />
            </a>
            <a href="https://www.pinterest.com/TheDayGalpuClub/">
              <TiSocialPinterest />
            </a>
          </div>
          <div className={Style.AuthorProfileCard_box_info_social}>
            <a href="https://www.reddit.com/user/TheDayGalpuClub">
              <FaRedditAlien />
            </a>
            <a href="https://www.snapchat.com/add/thedaygalpuclub?share_id=0B8r2amIyFk&locale=en-US">
              <FaSnapchatGhost />
            </a>
            <a href="https://www.twitch.tv/thedaygalpuclub">
              <FaTwitch />
            </a>
            <a href="https://support.discord.com/hc/en-us/profiles/10059899835671">
              <FaDiscord />
            </a>
          </div>
        </div>

        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={Style.AuthorProfileCard_box_share_icon}
          />

          {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>{" "}
                {""}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>{" "}
                {""}
                Instragram
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>{" "}
                {""}
                LinkedIn
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>{" "}
                {""}
                YouTube
              </p>
            </div>
          )}

          <BsThreeDots
            onClick={() => openReport()}
            className={Style.AuthorProfileCard_box_share_icon}
          />

          {report && (
            <p className={Style.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>{" "}
              {""}
              Report abouse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
