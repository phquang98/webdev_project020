import { useState } from "react";

export type TypographyProps = {
  className?: string;
  textData: string;
  styledFontSize?: string;
};

const Typography = (props: TypographyProps): JSX.Element => {
  const { textData, className } = props;

  return (
    <>
      <div className={className}>
        <p>{textData}</p>
      </div>
    </>
  );
};

export default Typography;
