import React from 'react';

const EditShuttlePage = (props) => {
  return (
    <div>
      Editing shuttle with id of {props.match.params.id}
    </div>
  );
};

export default EditShuttlePage;
