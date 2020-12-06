import bugApi from "../services/bugApi";

// export function toggle(bugToToggle) {
//   const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
//   const action = { type: "BUG_REPLACE", payload: toggledBug };
//   return action;
// }

export async function toggle(bugToToggle) {
   await bugApi.get(bugToToggle);
   const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
  // return response.data;
  const action = { type: "BUG_REPLACE", payload: toggledBug };
  return action;
}
