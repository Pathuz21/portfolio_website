import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Easy', solved: 120, total: 150 },
  { name: 'Medium', solved: 65, total: 100 },
  { name: 'Hard', solved: 15, total: 30 },
];

export function ProblemSolvingStats() {
  return (
    <div className="w-full h-[300px] bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">LeetCode Progress</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="solved" fill="#3B82F6" />
          <Bar dataKey="total" fill="#93C5FD" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}