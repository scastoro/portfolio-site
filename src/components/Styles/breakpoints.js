const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '550px',
  tablet: '768px',
  tabletL: '900px',
  laptop: '1024px',
  laptopL: '1240px',
  desktop: '1700px',
  desktopL: '2250px',
}

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  tabletL: `(max-width: ${sizes.tabletL})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktopL})`,
}
