export default function Title({
	titile,
	className,
}: {
	titile: string;
	className?: string;
}) {
	return <h1 className={`text-4xl font-bold ${className || ""}`}>{titile}</h1>;
}
