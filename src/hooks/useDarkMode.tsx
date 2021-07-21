import { useEffect, useState } from 'react';
import { writeStorage, deleteFromStorage, useLocalStorage } from '@rehooks/local-storage';

export default function useDarkMode() {
    const [theme, setTheme] = useState<string>('light');
    const [localTheme] = useLocalStorage<string>('theme', theme);
    const rootElement = document.getElementById('root') as HTMLElement; // Assume to have a div with a 'root' id

    const toggleTheme = () => {
		if (theme !== "dark") {
            deleteFromStorage('theme');
            writeStorage('theme', 'dark');
			setTheme('dark');
		} else {
            deleteFromStorage('theme')
            writeStorage('theme', 'light');
			setTheme('light');
		}
	};

	useEffect(() => {
		if (localTheme) {
			setTheme(localTheme);
            if (localTheme === 'dark') {
                rootElement!.classList.add('dark');
            } else {
                rootElement!.classList.remove('dark');
            }
		}
	}, [localTheme, rootElement]);

    return {
        theme,
        toggleTheme,
    };
}
