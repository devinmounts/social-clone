import React from 'react';
import Status from './Status'

function StatusBox (){
  let outerBoxStyle = {
    paddingBottom:"2rem"

  }
  return(
    <div style={outerBoxStyle}>
      {Statuses.map((status, index) =>
        <Status
          name = {status.name}
          status = {status.status}/>
      )}
    </div>
  );
}

const Statuses = [
  {name: "Devin Mounts", status: "Last Thursday I went for Ice cream and now I am telling all of my friends"},
  {name: "Ryan Putman", status: "I went to Winco and purchased a new Toothbrush."},
  {name: "Devin Mounts", status: "Last Thursday I went for Ice cream and now I am telling all of my friends"},
  {name: "Ryan Putman", status: "I went to Winco and purchased a new Toothbrush."},
  {name: "Devin Mounts", status: "Last Thursday I went for Ice cream and now I am telling all of my friends"},
  {name: "Ryan Putman", status: "I went to Winco and purchased a new Toothbrush."}
];

export default StatusBox;
