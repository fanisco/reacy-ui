type Map = {
    [x: string]: {
        [x: string]: any
    }
};

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

export const colors: Map = {
    default: defaultColors,
    success: successColors
};

export const fonts = {
    ff: 'Open Sans',
    ms: '12px',
    fs: '14px',
    lh: '1.5'
};

export const sizes = {
    spacing: '10px',
    xSpacing: '10px',
    ySpacing: '10px',
    buttonHeight: '36px',
    buttonPadding: '20px',
    borderRadius: '3px',
    panelPadding: '20px'
};
