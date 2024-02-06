

const SocialMediaLink = ({ socialMedia, svgIcons, className }) => {

  return <>
  {Object.entries(socialMedia[0]).map(([platform, link], index) => {
    if (svgIcons && svgIcons[platform] && link !== null) {
      const IconComponent = svgIcons[platform]; // Получаем компонент SVG
      return (
        <li className={className} key={index}>
          <a href={link}>
            <IconComponent />
          </a>
        </li>
      );
    }
    return '';
  })}
</>;
};

export { SocialMediaLink };