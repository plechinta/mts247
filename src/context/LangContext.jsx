import { createContext, useContext, useState } from 'react'
import en from '../i18n/en'
import nl from '../i18n/nl'
import fr from '../i18n/fr'

const translations = { en, nl, fr }

const LangContext = createContext(null)

export function LangProvider({ children }) {
    const [lang, setLang] = useState('en')

    const t = (key) =>
        key.split('.').reduce((obj, k) => obj?.[k], translations[lang]) ?? key

    return (
        <LangContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LangContext.Provider>
    )
}

export const useLang = () => useContext(LangContext)
