import Icon from "components/Icon/Icon";
import { socialIcons } from "lib/constants";
import { AvailableIcons, IconLinkProps } from "types/common";

const IconLink = ({ socialLink, hotLink, ...restProps }: IconLinkProps) => (
  <a href={hotLink || socialLink}>
    <Icon {...restProps} />
  </a>
);

export const renderIconLink = ({
  iconName,
  hotLink,
  size = "2",
}: {
  iconName: AvailableIcons;
  hotLink?: string;
  size?: string | "2";
}) => <IconLink {...{ ...socialIcons[iconName], hotLink, color: "white", styles: { fontSize: `1.${size}rem` } }} />;
