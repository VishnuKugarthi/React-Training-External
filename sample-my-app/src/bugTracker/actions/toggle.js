import bugApi from "../services/bugApi";

// export function toggle(bugToToggle) {
//   const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
//   const action = { type: "BUG_REPLACE", payload: toggledBug };
//   return action;
// }

export async function toggle(bugToToggle) {
  const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
  const toggledBug = await bugApi.get(toggledBugData);
  const action = { type: "BUG_REPLACE", payload: toggledBug };
  return action;
}
