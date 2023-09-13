import {
    Checkbox,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";

export default function CheckboxList() {
    const category = [
        "Food",
        "Drink",
        "Life Style",
        "Electronic",
        "Fashion",
        "Sport",
    ];

    return (
        <div className="flex flex-col">
            {category.map((item) => (
                <div className="my-2">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 mr-2" />
                        <span className="ml-2 text-gray-700">{item}</span>
                    </label>
                </div>
            ))}
        </div>
    );
}
