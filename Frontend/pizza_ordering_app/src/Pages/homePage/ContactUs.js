 import SUDHANSHU from "../../images/Anirudh.JPG";
import SHIVENDRA from "../../images/harsh.jpg";
import RASIKA from "../../images/RASIKA.jpg";
import POOJA from "../../images/POOJA.jpg";

const ContactUs = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h5>
        <b style={{ fontSize: 80, color: "#5C41A8" }}>Pizza Hut</b>
      </h5>
      <div
        className="container"
        style={{
          textAlign: "justify",
          fontFamily: "sans-serif",
          textIndent: 30,
          fontStyle: "italic",
        }}
      >
        <p>
        This website can primarily be used for ordering pizza and other food items from the restaurant at nearby location . 
        This is achieved through an easy to use graphical interface menu options. 
        It is managed by the admin. Restaurants can list their available food menus. Users can add number of items to the cart. 
        Different payment options are available to continue the order.Deliveryboy can view the order assigned and its corresponding address of delivery.
        </p>
      </div>
      <hr />
      <div className="container" style={{ margin: 30, marginLeft: 140 }}>
        <h4 style={{ marginLeft: -140 }}>Contact Us</h4>
        <div
          className="row"
          style={{ height: 50, marginTop: 30, marginRight: 100 }}
        >
          <div className="col">
            <img
              src={SUDHANSHU}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            />
            <div style={{ marginLeft: -110, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>ANIRUDHA CHAVAN</h5>
            </div>
            <div
              style={{
                marginLeft: -40,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>anirudhchavan123@gmail.com</h7>
            </div>
            <div
              style={{
                marginLeft: -40,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}> +919309948212</h7>
            </div>
          </div>
          <div className="col">
            <img
              src={SHIVENDRA}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            />
            <div style={{ marginLeft: -100, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>HARSHITA AHIRWAR</h5>
            </div>
            <div
              style={{
                marginLeft: -60,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>harshitaahirwar989@gmail.com</h7>
            </div>
            <div
              style={{
                marginLeft: -40,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}> +918965952826</h7>
            </div>
          </div>
          {/* <div className="col">
            <img
              src={RASIKA}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            />



            <div style={{ marginLeft: -110, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>RASIKA KARDILE</h5>
            </div>
            <div
              style={{
                marginLeft: -60,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>rasikakardile44@gmail.com</h7>
            </div>
            <div
              style={{
                marginLeft: -40,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}> +919665285108</h7>
            </div>
          </div> */}
          {/* <div className="col">
            <img
              src={POOJA}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            />
            <div style={{ marginLeft: -110, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>POOJA NEMADE</h5>
            </div>
            <div
              style={{
                marginLeft: -60,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>poojanemade1998@gmail.com</h7>
            </div>
            <div
              style={{
                marginLeft: -40,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}> +919404027890</h7>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
