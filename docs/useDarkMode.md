## Usage
---
```tsx
import { useEffect, useState } from "react";
import { useDarkMode } from "@elmnt/use-hooks";

const SwitchTheme = () => {
    const { theme, toggleTheme } = useDarkMode();
    const [toggle, setToggle] = useState<boolean>(false);

    useEffect(() => {
        if (theme === 'dark') setToggle(true);
    }, [theme, toggle])

    const onChange = () => {
        toggleTheme();
        setToggle(!toggle);
    }

    return (
        ...
            <input type="checkbox" onChange={onChange} checked={toggle} />
        ...
    )
};

export default SwitchTheme;
```
