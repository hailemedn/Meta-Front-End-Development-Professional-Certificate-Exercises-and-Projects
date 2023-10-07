const Toggle = () => {
    let darkModeOn = true;
    let darkMode = "Dark Mode is on";
    let lightMode = "Light Mode is on";
    return(
        darkModeOn ? darkMode : lightMode 
    );
} 

export default Toggle;