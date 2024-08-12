import React, { Profiler } from "react";

type ProfilerWrapperProps = {
  id: string;
  children: React.ReactNode;
};

const callback = (
  id,
  phase,
  actualDuration,
  startTime,
  baseDuration,
  commitTime,
  interactions
) => {
  console.log(
    "Profiler: " +
      "id " +
      id +
      " startTime " +
      startTime +
      " actualDuration " +
      actualDuration +
      " baseDuration " +
      baseDuration +
      " commitTime " +
      commitTime +
      " phase " +
      phase +
      " interactions " +
      interactions
  );
};

const ProfilerWrapper = ({ id, children }: ProfilerWrapperProps) => {
  return (
    <Profiler id={id} onRender={callback}>
      {children}
    </Profiler>
  );
};

export default ProfilerWrapper;
