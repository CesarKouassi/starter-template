'use client'

import { useChangeLocale, useCurrentLocale } from "../../../locales/client";

export const  LocaleSelect = () => {
    const locale = useCurrentLocale();
   const changeLocale = useChangeLocale();

   return(
    <select className="bg-blanc-pur border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
    value={locale}
    onChange={(e) => changeLocale(e.target.value as "fr" | "en")}
    >
        <option value="en">English</option>
        <option value="fr">french</option>
    </select>
   )
}