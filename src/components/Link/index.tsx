import { Link } from "react-router-dom";

type AnchorProps = {
  className?: string;
  key?: string;
  anchorArrival: string;
  textData: string;
  styledFontSize?: string;
  styledTextColor?: string;
};

const Anchor = (props: AnchorProps): JSX.Element => {
  const { className, anchorArrival, textData } = props;

  return (
    <>
      <Link className={className} to={anchorArrival}>
        {textData}
      </Link>
    </>
  );
};

export default Anchor;
