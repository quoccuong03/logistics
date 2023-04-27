import { getEnums } from "@/lib/get-enum";
import EnumBlock from "./EnumBlock";
type Props = {
    id: string;
};
export default async function Reviews({ id }: Props) {
    const params = ["review_main-emo_type"];
    const listEnums = await getEnums(params);
    return (
        <div>
            <EnumBlock data={listEnums || []} />
        </div>
    );
}
