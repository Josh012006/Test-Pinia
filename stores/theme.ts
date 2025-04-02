// stores/theme.ts

export const useThemeStore = defineStore('theme', () => {
    const theme = ref('light');
    // const getTheme = () => {
    //     console.log('Getting theme...', theme.value);
    //     return theme.value;
    // }
    const toggleTheme = () => {
        console.log('Toggling theme...', theme.value);
        theme.value = (theme.value === 'light') ? 'dark' : 'light';
    };
    
    return { theme, toggleTheme };
});

