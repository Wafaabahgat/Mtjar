import { FC } from "react";
import { Helmet } from "react-helmet";

interface metaDateProps {
  ttl: string;
  disc?: string;
}

const MetaDate: FC<metaDateProps> = ({ ttl, disc }) => {
  return (
    <Helmet>
      <title>{ttl}</title>
      <meta name="description" content={disc} />
    </Helmet>
  );
};

export default MetaDate;
