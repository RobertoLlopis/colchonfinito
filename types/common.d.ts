import { IconProps } from "components/Icon/Icon";

interface IconLinkProps extends IconProps {
  socialLink?: string;
  hotLink?: string;
}

type AvailableIcons = "email" | "facebook" | "twitter" | "instagram" | "youtube";
