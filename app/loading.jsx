import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-screen">
                <Skeleton className="w-[200px] h-[200px]" />
                <Skeleton className="w-[200px] h-[200px]" />
                <Skeleton className="w-[200px] h-[200px]" />
            </div>
        </div>
    )
}

export default Loading