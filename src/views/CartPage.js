import { Layout } from "antd";

import "./styles/HomePage.css";
const { Header, Content } = Layout;

const CartPage = ({ cart }) => {

  return (
    <Layout>

      <Content style={{ padding: "60px 60px", height: "100vw" }}>
        <h1>Cart items</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {/* {console.log(item)} */}
            {/* {Object.entries(cart).map()} */}
            {Object.entries(cart).map(([key, item]) => (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Layout>
  );
};

export default CartPage;
