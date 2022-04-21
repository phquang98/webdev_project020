import { useState } from "react";

type BannerProps = {
  className?: string;
  bannerText: string;
};

const Banner = ({ className, bannerText }: BannerProps): JSX.Element => {
  return (
    <>
      <div className={className}>
        <h5>{bannerText}</h5>
      </div>
    </>
  );
};

export default Banner;
