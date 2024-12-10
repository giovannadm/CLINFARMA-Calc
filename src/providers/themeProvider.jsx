import { ConfigProvider } from "antd";
import { colorsToken, themeToken } from "../constants/theme/theme.constant";
import { useEffect } from "react";

export default function ThemeProvider({ children }) {

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--color-primary', themeToken.colorPrimary);
        root.style.setProperty('--color-primary-light', themeToken.colorSecondary);
    }, []);

    return (
        <ConfigProvider
            theme={{
                token: colorsToken,
            }}
        >
            {children}
        </ConfigProvider>
    );
}
