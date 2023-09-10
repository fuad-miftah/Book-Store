import React from "react";

function Breadcrumb({ routes }) {
  return (
    <div class="h-[86px] left-0 right-0 top-[104px] absolute bg-green-100">
      <div class="flex flex-row flex-wrap left-[104px] top-[32px] absolute text-green-700 text-lg text-[18px] font-normal leading-snug tracking-tight">
        {routes.map((route, index) => (
          <span key={route}>
            {index > 0 && " > "}
            {route}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;