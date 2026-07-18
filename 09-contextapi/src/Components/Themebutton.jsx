import React from "react";
import useTheme from "../Context/Theme";
export default function ThemeBtn() {
    const {themeMode,lightTheme,darkTheme}=useTheme()
    const onchangebtn=(e)=>{
        const darkmodestatus=e.currentTarget.checked
        if(darkmodestatus){
            darkTheme()
        }
        else{
            lightTheme()
        }
    }
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        onChange={onchangebtn}
        checked={themeMode==='dark'}
      />

      <div
        className="
          relative h-6 w-11 rounded-full bg-gray-300 transition-colors
          peer-checked:bg-blue-600
          peer-focus:ring-4 peer-focus:ring-blue-300
          before:absolute
          before:top-0.5
          before:left-0.5
          before:h-5
          before:w-5
          before:rounded-full
          before:bg-white
          before:transition-transform
          before:content-['']
          peer-checked:before:translate-x-5
        "
      />

      <span className="ml-3 text-sm font-medium">
        Toggle Theme
      </span>
    </label>
  );
}