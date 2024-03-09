import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import apiUrlFunction from "../../utils/apiLogic";

// Define the Project interface
interface Project {
  id: string;
  name: string;
  // Add other properties as needed
}

const TaskManager = () => {
  // Get the API URL from the utility function
  const apiURL = apiUrlFunction();

  // State to store projects
  const [data, setData] = useState<any>([]);

  // State to store tasks
  const [tasks, setTasks] = useState<any>([]);

  // State for creating a new project
  const [newProjectName, setNewProjectName] = useState('');

  // State for creating a new task
  const [newTaskName, setNewTaskName] = useState('');

  // State to control the creation of a new project
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  // State to store the selected project
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Fetch projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${apiURL}/core/task_manager/projects`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchProjects();
  }, []);

  // Fetch tasks for a specific project
  const fetchTasks = async (project_id: string) => {
    try {
      const response = await axios.post(`${apiURL}/core/task_manager/projects`, {
        project_id: project_id,
      });
      setTasks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // Create a new project
  const createNewProject = async (projectName: string) => {
    try {
      await axios.post(`${apiURL}/core/task_manager/projects`, {
        project_name: projectName,
      });
    } catch (error) {
      console.error("Error fetching data", error);
    }
    newSubmitForm();
    const response = await axios.get(`${apiURL}/core/task_manager/projects`);
    setData(response.data);
  };

  // Create a new task
  const createNewTask = async (task_content: string, project_id: string) => {
    try {
      await axios.post(`${apiURL}/core/task_manager/projects`, {
        project_id: project_id,
        task_content: task_content,
      });
      fetchTasks(project_id);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setNewTaskName('');
  };

  // Delete a task
  const deleteTask = async (task_id: string, project_id: string) => {
    try {
      await axios.delete(`${apiURL}/core/task_manager/projects/${task_id}/`);
    } catch (error) {
      console.error("Error deleting data", error);
    }
    fetchTasks(project_id);
  };

  // Complete a task
  const completeTask = async (task_id: string, project_id: string) => {
    try {
      await axios.put(`${apiURL}/core/task_manager/projects`, {
        task_id: task_id,
      });
    } catch (error) {
      console.error("Error updating the task", error);
    }
    fetchTasks(project_id);
  };

  // Toggle the state for creating a new project
  const newSubmitForm = () => {
    setIsCreatingProject((prevState) => !prevState);
  };

  // Set the selected project
  const selectProject = (project_id: string) => {
    setSelectedProject(project_id);
  };

  return (
    <div className="TaskManager flex-col bg-componentBg border-r-2 border-slate-500 h-svh z-40">
      <div className="flex justify-center font-bold text-textColor text-xl py-2 ">
        Task Manager
      </div>
      <div className="text-white pl-5">
        <div className="font-medium text-xl text-textColor mb-3">
          Projects
          <div className="font-light text-sm text-emerald-200">
            (Max Projects - 5)
          </div>
        </div>
        <div className="flex flex-row w-fit">
          <div className="">
            <div className="px-2 mb-5">
              {/* Display existing projects */}
              {data.map((project: any, i: number) => (
                <div key={i}>
                  <div
                    className="cursor-pointer text-emerald-500 border p-2 my-1"
                    onClick={() => {
                      fetchTasks(project.id);
                      selectProject(project.id);
                    }}
                  >
                    {project.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Create a new project section */}
            <div
              className="cursor-pointer w-fit font-medium underline"
              onClick={() => newSubmitForm()}
            >
              Create a new Project
            </div>
            {isCreatingProject ? (
              <div className="">
                <input
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="Enter Project Name"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                />
                <button
                  onClick={() => createNewProject(newProjectName)}
                  className="p-2.5 my-2 text-sm font-medium h-full text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {/* Display tasks for the selected project */}
        {selectedProject !== null ? (
          <div className="w-11/12 mt-10">
            <div className="mb-5 ml-5">
              <div className="text-md text-emerald-500">
                {/* Display the name of the selected project */}
                {data.find((project: Project) => project.id === selectedProject)
                  ?.name}
              </div>
              <div className="top-20 left-20 w-300 min-h-96 h-200 border-1 border-solid overflow-y-auto z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">
                <div className="mx-4">
                  <div className="text-center font-semibold text-base text-gray-300">
                    Your Tasks
                  </div>
                  {/* Display tasks for the selected project with the filter of showing not showing the completed tasks. */}
                  {tasks
                    .filter((task: any) => !task.is_completed)
                    .map((task: any, i: number) => (
                      <div key={i}>
                        <div className="border p-2 my-1 cursor-pointer flex">
                          <div className="flex-grow">{task.content}</div>
                          <div className="px-1.5">
                            <button
                              className=""
                              onClick={() => completeTask(task.id, task.project_id)}
                            >
                              Complete
                            </button>
                          </div>
                          <button
                            className="text-xl ml-2"
                            onClick={() => deleteTask(task.id, task.project_id)}
                          >
                            <MdDeleteOutline />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex ml-5 flex-row">
              {/* Input for creating a new task */}
              <input
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="Add a new Task"
                className="mr-5 text-center justify-items-center block w-full z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              />
              {/* Button for submitting a new task */}
              <button
                onClick={() => createNewTask(newTaskName, selectedProject)}
                className="p-2.5 text-sm font-medium h-full text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TaskManager;
