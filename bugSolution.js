import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data.someValue}</Text>
    </View>
  );
};

export default MyComponent;