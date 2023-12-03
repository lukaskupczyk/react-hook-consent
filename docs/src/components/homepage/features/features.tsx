/* eslint-disable @typescript-eslint/no-var-requires */

export type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

export const features: FeatureItem[] = [
    {
        title: 'GDPR compliant',
        Svg: require('@site/static/img/homepage/compliant.svg').default,
        description: <>Manages cookies, session storage, local storage and external scripts with ease.</>,
    },
    {
        title: 'Customizable',
        Svg: require('@site/static/img/homepage/customizable.svg').default,
        description: <>Fully customizable styling, dark mode and granular consent settings.</>,
    },
    {
        title: 'Powered by React',
        Svg: require('@site/static/img/homepage/react.svg').default,
        description: <>Works with Next.js and other React based frameworks out of the box.</>,
    },
];
