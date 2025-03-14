const Table = () => {
  return (
    <>
      <div className="relative overflow-hidden shadow-md rounded-lg">
        <table className="table-fixed w-full text-left">
          <thead
            className="uppercase bg-[#6b7280] text-[#e5e7eb]"
            style={{ backgroundColor: '#6b7280', color: '#e5e7eb' }}
          >
            <tr>
              <td className="py-1 border border-gray-200 text-center  p-4">Product-ID</td>
              <td className="py-1 border border-gray-200 text-center  p-4">Description</td>
              <td className="py-1 border border-gray-200 text-center  p-4">Price</td>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-500" style={{ backgroundColor: '#FFFFFF', color: '#6b7280' }}>
            <tr className=" py-5">
              <td className=" py-5 border border-gray-200 text-center  p-4">YY-853581</td>
              <td className=" py-5 border border-gray-200 text-center  p-4">Notebook Basic</td>
              <td className=" py-5 border border-gray-200 text-center  p-4">$ 299</td>
            </tr>
            <tr className=" py-5">
              <td className=" py-5 border border-gray-200 text-center  p-4">YY-853599</td>
              <td className=" py-5 border border-gray-200 text-center  p-4">Notebook Pro</td>
              <td className=" py-5 border border-gray-200 text-center  p-4">$ 849</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
