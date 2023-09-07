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
                // <ListItem className="p-0" key={item}>
                //     <label
                //         htmlFor="vertical-list-react"
                //         className="flex w-full cursor-pointer items-center px-3 py-2"
                //     >
                //         <ListItemPrefix className="mr-3">
                //             <Checkbox
                //                 id="vertical-list-react"
                //                 ripple={false}
                //                 className="hover:before:opacity-0"
                //                 containerProps={{
                //                     className: "p-0",
                //                 }}
                //             />
                //         </ListItemPrefix>
                //         <Typography color="blue-gray" className="font-medium">
                //             {item}
                //         </Typography>
                //     </label>
                // </ListItem>
            ))}
        </div>
    );
}
