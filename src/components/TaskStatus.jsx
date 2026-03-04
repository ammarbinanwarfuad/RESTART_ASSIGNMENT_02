import React from "react";

const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 sticky top-20 sm:top-24">
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
        Task Status
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
        Select a ticket to add to Task Status
      </p>

      {tasks.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400 text-sm">No tasks in progress</p>
        </div>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="space-y-2">
              {/* Task Title */}
              <div className="bg-green-50 border border-green-200 rounded-md p-2 sm:p-3">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
                  {task.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-600">
                  {task.customer}
                </p>
              </div>

              {/* Complete Button */}
              <button
                onClick={() => onComplete(task)}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition"
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatus;
