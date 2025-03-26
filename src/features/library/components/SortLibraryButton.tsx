import { Check, SlidersHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function SortLibraryButton() {
	const [dropdown, setDropdown] = useState(false);
	const [sortBy, setSortBy] = useState("title");

	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setDropdown(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleDropdown = () => {
		setDropdown(!dropdown);
	};

	const sortOptions = [
		{ value: "title", label: "By Title" },
		{ value: "dateAdded", label: "By Date Added" },
		{ value: "lastRead", label: "By Last Read" },
	];

	return (
		<div
			className="relative"
			ref={dropdownRef}>
			<button
				onClick={toggleDropdown}
				className="flex flex-row justify-center items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
				<span className="text-sm text-gray-500">Sort by</span>
				<SlidersHorizontal className="w-4 h-4" />
			</button>

			{dropdown && (
				<div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-10">
					<div className="py-1">
						{sortOptions.map((option) => (
							<button
								key={option.value}
								onClick={() => {
									setSortBy(option.value);
									toggleDropdown();
								}}
								className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center text-nowrap cursor-pointer">
								{option.label}
								{sortBy === option.value && <Check className="w-4 h-4" />}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
