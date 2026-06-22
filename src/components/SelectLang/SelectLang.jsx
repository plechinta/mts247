'use client'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useLang } from '../../context/LangContext.jsx'

import English from '../../assets/Icons/en.svg'
import Dutch from '../../assets/Icons/nl.svg'
import France from '../../assets/Icons/fr.svg'

const languages = [
    { id: 'en', name: 'EN', avatar: English },
    { id: 'nl', name: 'NL', avatar: Dutch },
    { id: 'fr', name: 'FR', avatar: France },
]

export default function SelectLang() {
    const { lang, setLang } = useLang()
    const selected = languages.find(l => l.id === lang) ?? languages[0]

    return (
        <Listbox value={selected} onChange={(l) => setLang(l.id)}>
            <div className="relative">
                <ListboxButton className="flex items-center gap-2 cursor-pointer text-white hover:text-[#FFBC00] transition outline-none">
                    <img src={selected.avatar} alt={selected.name} className="size-6 rounded-full object-cover" />
                    <span className="font-semibold uppercase text-sm">{selected.name}</span>
                    <ChevronDownIcon className="size-4 text-white" />
                </ListboxButton>

                <ListboxOptions
                    anchor="bottom end"
                    className="absolute z-[1000] mt-2 w-32 bg-[#111] rounded-lg shadow-xl border border-white/10 p-1 focus:outline-none max-h-60 overflow-y-auto"
                >
                    {languages.map((lang) => (
                        <ListboxOption
                            key={lang.id}
                            value={lang}
                            className="group flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-white/10 rounded-md transition"
                        >
                            <img src={lang.avatar} alt={lang.name} className="size-5 rounded-full object-cover" />
                            <span className="text-white text-sm group-data-selected:font-bold">{lang.name}</span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    )
}
