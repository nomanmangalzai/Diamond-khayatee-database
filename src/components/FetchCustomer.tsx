import { useEffect, useState } from "react";
const FetchCustomer = () => {
  const [customerData, setCustomerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const phoneNo = "3849849384"; // Replace with your actual telephone number
    const url = `http://localhost:5003/customers/details-user?phoneNo=${encodeURIComponent(
      phoneNo
    )}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const parsedData = await response.json();
        console.log(parsedData.data);
        setCustomerData(parsedData.data);
      } catch (error) {
        console.error("Error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <p>Loading...</p>
      ) : customerData ? (
        <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md w-96">
          <h2 className="mb-4 text-2xl font-bold">Customer Details</h2>
          <p>
            <strong>Name:</strong> {customerData.nameOfCustomer}
          </p>
          <p>
            <strong>Telephone Number:</strong> {customerData.telephoneNo}
          </p>
          <p>
            <strong>Address:</strong> {customerData.address}
          </p>
        </div>
      ) : (
        <p>Error fetching data</p>
      )}
    </div>
  );
};

export default FetchCustomer;
