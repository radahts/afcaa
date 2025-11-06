import { getDictionary } from "@/lib/dictionary";
import { Locale } from "../../../i18n.config";

export default async function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {

  return (
    <>
        {children}
    </>
  );
}
