import React, { useContext } from 'react';
import { MyContext } from './contextApi/ProviderContext';

const Home = () => {
  const { Datas } = useContext(MyContext);
  console.log(Datas);

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-300 px-4 py-2">Id</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">City</th>
              <th className="border border-gray-300 px-4 py-2">PinCode</th>
            </tr>
          </thead>
          <tbody>
            {Datas.slice(0, 9).map((item) => (
              <tr key={item.id} className="text-center bg-white odd:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">{item.Name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.Age}</td>
                <td className="border border-gray-300 px-4 py-2">{item.City}</td>
                <td className="border border-gray-300 px-4 py-2">{item.PinCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
