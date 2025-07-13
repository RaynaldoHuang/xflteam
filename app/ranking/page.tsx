import RankingTable from "@/components/RankingTable";
import Link from "next/link";

export default function ranking() {
    return (
        <>
            <div className="pt-26">
                <div className="mx-4">
                    <div className="flex justify-between mb-3 items-center">
                        <h1 className="font-[family-name:var(--space-grotesk)] font-bold text-lg">Klasemen League</h1>
                        <Link
                            href={""}
                            className="font-[family-name:var(--space-grotesk)] font-medium text-sm text-gray-500"
                        >
                        </Link>
                    </div>
                </div>

                <div>
                    <RankingTable />
                </div>
            </div>
        </>
    )
}