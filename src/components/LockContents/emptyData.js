import React from "react";

const EmptyData = () => {
  return (
    <div className="bg-light my-4 text-center d-flex flex-column p-3">
      <i className="fas fa-folder-open fa-3x"></i>
      <h4 className="py-2">
        You are not a member of any organizations. To create one, click Start a new
        Organization.
      </h4>
    </div>
  );
};
export default EmptyData;
