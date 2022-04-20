import { useState } from "react";

type BannerProps = {
  className?: string;
  bannerText: string;
};

const Banner = ({ className, bannerText }: BannerProps): JSX.Element => {
  return (
    <>
      <div className={className}>
        <h4>{bannerText}</h4>
      </div>
    </>
  );
};

export default Banner;
