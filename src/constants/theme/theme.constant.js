import Theme from '@ant-design/cssinjs/lib/theme/Theme';
import defaultAlgorithm from 'antd/lib/theme/themes/default';
import seed from 'antd/lib/theme/themes/seed';

export const themeToken = {
    colorPrimary: '#006c3e',
    colorSecondary: '#107546',
};

const derivativeTheme = new Theme([defaultAlgorithm]);

export const colorsToken = Object.fromEntries(
    Object.entries(
        derivativeTheme.getDerivativeToken(Object.assign(seed, themeToken)),
    ).filter(
        ([key, value]) =>
            key &&
            typeof value === 'string' &&
            /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value),
    ),
);
