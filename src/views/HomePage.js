import { Layout } from "antd";

import "./styles/HomePage.css";
import Button from "@cloudscape-design/components/button";

const { Header, Content } = Layout;

const HomePage = ({ cart, setCart, setPage }) => {

  const handleAddClick = (item) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      if (prevCart.hasOwnProperty(item.id)) {
        // If yes, increase its quantity
        return {
          ...prevCart,
          [item.id]: { ...item, quantity: prevCart[item.id].quantity + 1 },
        };
      }
      // If not, add the item with quantity 1
      return {
        ...prevCart,
        [item.id]: { ...item, quantity: 1 },
      };
    });
  };

  // Function to delete an item to the cart
    const handleDeleteClick = (itemId) => {
      setCart((prevCart) => {
        // Check if the item already exists in the cart
        const currentItem = prevCart[itemId];
        if (currentItem) {
          // Check the item's quantity
          if (currentItem.quantity === 1) {
            // If quantity is 1, delete the item from the cart
            const { [itemId]: deletedItem, ...rest } = prevCart;
            return rest;
          } else {
            // If quantity is more than 1, decrease its quantity
            return {
              ...prevCart,
              [itemId]: { ...currentItem, quantity: currentItem.quantity - 1 },
            };
          }
        }
        // Return the original cart if the item doesn't exist
        return prevCart;
      });
    };

  console.log(cart);

  const items = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Orange", price: 200 },
    { id: 3, name: "Grapes", price: 700 },
    { id: 4, name: "Guava", price: 290 },
    { id: 5, name: "Pineapple", price: 890 },
    { id: 6, name: "Avocado", price: 120 },
    { id: 7, name: "Kiwi", price: 269 },
    { id: 8, name: "Banana", price: 20 },
  ];

  return (
    <Layout>


      <Content style={{ padding: "60px 60px", height: "100vw" }}>
        <h1>Available items</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  
                  <Button onClick={() => handleAddClick(item)}>Add</Button>
                  <Button onClick={() => handleDeleteClick(item.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Layout>
  );
};

export default HomePage;
