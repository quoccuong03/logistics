import { getEnums } from "@/lib/get-enum";
import EnumBlock from "./EnumBlock";
type Props = {
    id: string;
    lang: any;
};
export default async function Reviews({ lang, id }: Props) {
    const params = ["review_main-emo_type"];
    const listEnums = await getEnums(params);
    return (
        <div>
            <EnumBlock data={listEnums || []} lang={lang} />
        </div>
    );
}
