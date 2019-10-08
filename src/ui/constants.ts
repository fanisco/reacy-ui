import { Styles, Sizes } from './enums';

const defaultColors = {
    text: '#fff',
    baseL0: '#1b2431',
    baseL1: '#222c3c',
    baseL2: '#293546',
    baseL3: '#313d4f',
};

const successColors = {
    text: '#fff',
    baseL0: '#1a740b',
    baseL1: '#1b8c09',
    baseL2: '#29a326',
    baseL3: '#39b54a',
};

const dangerColors = {
    text: '#fff',
    baseL0: '#bd0d13',
    baseL1: '#cd1f26',
    baseL2: '#e53a40',
    baseL3: '#f75157',
};

const warningColors = {
    text: '#fff',
    baseL0: '#e75d09',
    baseL1: '#e8700d',
    baseL2: '#f7791c',
    baseL3: '#f7971c',
};

export const Colors = {
    [Styles.default]: defaultColors,
    [Styles.success]: successColors,
    [Styles.warning]: warningColors,
    [Styles.danger]: dangerColors,
};

export const Fonts = {
    ff: 'Open Sans',
    ms: '12px',
    fs: '14px',
    lh: '1.5'
};

type Dims = {
    font: string,
    spacing: string,
    elementPadding: string,
    elementHeight: string,
    borderRadius: string,
    containerWidth: string
}

const dims = (factor: number): Dims => {
    return {
        font: `${factor + 2}px`,
        spacing: `${factor}px`,
        elementPadding: `${factor * 2}px`,
        elementHeight: `${factor * 3}px`,
        borderRadius: '3px',
        containerWidth: `${factor * 54}px`
    }
};

export const Dims = {
    [Sizes.xs]: dims(8),
    [Sizes.sm]: dims(10),
    [Sizes.md]: dims(12),
    [Sizes.lg]: dims(16),
    [Sizes.xl]: dims(20),
};
