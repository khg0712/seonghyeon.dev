import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
    ...novelaTheme,
    fonts: {
        ...novelaTheme.fonts,
        serif: "'Nanum Myeongjo', 'Merriweather', Georgia, Serif",
    },
};