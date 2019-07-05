import React from "react";

const filters = [
  {name: "all", label: "All"},
  {name: "active", label: "Active"},
  {name: "completed", label: "Completed"},
];


export default function Filter(props) {
  
 // passing filter and selectFilter functions through props
    const {filter, selectFilter} = props;
    return(
      <ul className="filters qa-filters">
          {filters.map(({name, label}) => (
            <li key={name}>
              <a
                className={filter === name && "selected"}
                href="#"
                onClick={(e) => {e.preventDefault(); filter !== name ? selectFilter(name) : null;}}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
    )
  
}