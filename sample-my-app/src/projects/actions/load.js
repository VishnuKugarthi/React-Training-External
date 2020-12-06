import projectsApi from "../services/projectsApi";
export async function load() {
  const projects = await projectsApi.getAll();
  const action = { type: "PROJECT_INIT", payload: projects };
  return action;
}

// import bugApi from '../services/bugApi';
// export async function load(){
//     const bugs = await bugApi.getAll();
//     const action = { type : 'BUG_INIT', payload : bugs } ;
//     return action;
// } 
