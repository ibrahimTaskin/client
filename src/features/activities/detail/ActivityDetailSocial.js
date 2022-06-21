import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  PinterestIcon,
  VKIcon,
} from "react-share";

const ActivityDetailSocial = () => {
  const title = "aa";
  const size = 32;
  return (
    <div class="col">
      <div class="box">
        <div
          style={{
            display: "flex",
            gap: 15,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <strong>Bu etkinliği paylaş !</strong>
          <FacebookShareButton quote={title} url="www.facebook.com">
            <FacebookIcon size={size} />
          </FacebookShareButton>

          <TwitterShareButton title={title} url="www.twitter.com">
            <TwitterIcon size={size} />
          </TwitterShareButton>

          <WhatsappShareButton
            title={title}
            url="www.whatsapp.com"
            separator=":: "
          >
            <WhatsappIcon size={size} />
          </WhatsappShareButton>

          <LinkedinShareButton
            title={title}
            url="www.linkedin.com"
            windowWidth={750}
            windowHeight={600}
          >
            <LinkedinIcon size={size} />
          </LinkedinShareButton>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ActivityDetailSocial;
