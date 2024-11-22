import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={320}
    height={65}
    viewBox="0 0 320 65"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="40" cy="32" r="26" /> 
    <rect x="84" y="9" rx="0" ry="0" width="138" height="27" /> 
    <rect x="85" y="47" rx="0" ry="0" width="180" height="15" /> 
    <rect x="286" y="22" rx="0" ry="0" width="21" height="21" />
  </ContentLoader>
);