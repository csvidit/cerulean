export enum Priority {
  LOW = "Low Priority",
  MEDIUM = "Medium Priority",
  HIGH = "High Priority",
  CRITICAL = "Critical Priority",
}

const PriorityTag = (props: { priority: Priority }) => {
  let color;
  switch (props.priority) {
    case Priority.LOW:
      color = "sky";
      break;
    case Priority.MEDIUM:
      color = "amber";
      break;
    case Priority.HIGH:
      color = "rose";
      break;
    case Priority.CRITICAL:
      color = "red";
      break;
  }

  if (props.priority == Priority.LOW) {
    return (
      <div
        className={`w-fit px-4 rounded-full bg-sky-600 text-sky-100 border border-sky-300 border-opacity-60 `}
      >
        {props.priority}
      </div>
    );
  }
  else if(props.priority == Priority.MEDIUM)
  {
    return (
      <div
      className={`w-fit px-4 rounded-full bg-amber-600 text-amber-100 border border-amber-300 border-opacity-60 `}
      >
        {props.priority}
      </div>
    );
  }
  else if(props.priority == Priority.HIGH)
  {
    return (
      <div
      className={`w-fit px-4 rounded-full bg-red-600 text-red-100 border border-red-300 border-opacity-60 `}
      >
        {props.priority}
      </div>
    );
  }
  else
  {
    return (
      <div
      className={`w-fit px-4 rounded-full bg-violet-600 text-violet-100 border border-violet-300 border-opacity-60 `}
      >
        {props.priority}
      </div>
    );
  }

  // return (
  //   <div
  //   //   className={`w-fit px-4 py-1 rounded-full bg-${color}-600 text-${color}-100 border border-${color}-300 `}
  //   className={`w-fit px-4 rounded-full bg-amber-600 text-amber-100 border border-amber-300 border-opacity-60 `}
  //   >
  //     {props.priority}
  //   </div>
  // );
};

export default PriorityTag;
