import React, { useEffect, useState } from 'react'

import './style.scss'

export default function Home() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('theme-color')

        if(currentThemeColor === 'dark-theme') {
            setIsDark(true)
        } else {
            setIsDark(false)
        }
    }, [])

    const handleSwitchClick = () => {
        if(isDark) {
            localStorage.setItem('theme-color', 'light-theme')
            setIsDark(false)
        } else {
            localStorage.setItem('theme-color', 'dark-theme')
            setIsDark(true)
        }
    }

    return (
        <div className={`app ${isDark ? 'dark-theme' : ''}`}>
            <div className="theme-container">
                <div className="theme-switcher-wrap">
                    <label className={`theme-switcher-label ${isDark ? 'active' : ''}`}
                        onClick={handleSwitchClick}
                    >
                        <div className="switch-path">
                            <div className="switch-handle"></div>
                        </div>
                    </label>
                </div>

                <h1>Custom Light Dark Theme</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eius, reprehenderit ad sed nemo magni iure quibusdam adipisci! Voluptate, quis. Dicta molestiae iste mollitia. Deserunt earum rem magnam sunt eum!</p>
            </div>
        </div>
    )
}