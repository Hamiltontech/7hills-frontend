import React from 'react'
import { BsPinterest } from "react-icons/bs";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiOutlineTwitter,
    AiFillCopy,
    AiFillMail,
} from "react-icons/ai";

import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    EmailShareButton,
  EmailIcon,
  } from 'next-share';


const ShareButtons = ({ slug}) => {

    return (
        <div className=" grid grid-cols-6 lg:block lg:top[18%] lg:fixed  justify-center">
 

<div className='flex p-1 lg:my-1 mx-1 hover:scale-110'>
            <EmailShareButton
  url={'https://7-hills.vercel.app/post/' + slug}
  subject={'Check out this post from 7hills.Jo!'}
  body="body"
>
<AiFillMail size={25} />
</EmailShareButton>
</div>

<div className='flex p-1 lg:my-1  mx-1 hover:scale-110'>
            <FacebookShareButton
  url={'https://7-hills.vercel.app/post/' + slug}
  quote={'Check out this post from 7hills.Jo!'}
  hashtag={'#7hills'}
>
<AiFillFacebook size={25} />
</FacebookShareButton>
</div>

<div className='flex p-1  lg:my-1 mx-1 hover:scale-110'>
<FacebookMessengerShareButton
  url={'https://7-hills.vercel.app/post/' + slug}
  appId={''}
>
<RiMessengerFill size={25} />
</FacebookMessengerShareButton>
</div>

<div className='flex p-1 lg:my-1  mx-1 hover:scale-110'>
<PinterestShareButton
  url={'https://7-hills.vercel.app/post/' + slug}
  media={'Check out this post from 7hills.Jo!'}
>
<BsPinterest size={25} />
</PinterestShareButton>
</div>

<div className='flex p-1 lg:my-1 mx-1 hover:scale-110'>
<TwitterShareButton
  url={'https://7-hills.vercel.app/post/' + slug}
  title={'Check out this post from 7hills.Jo!'}
>
<AiOutlineTwitter size={25} />
</TwitterShareButton>
</div>

<div className='flex p-1 lg:my-1 mx-1 hover:scale-110'>
<WhatsappShareButton
  url={'https://7-hills.vercel.app/post/' + slug}
  title={'Check out this post from 7hills.Jo!'}
  separator=":: "
>
<RiWhatsappFill size={25} />
</WhatsappShareButton>
</div>
        </div>
    )
}

export default ShareButtons