import homeImage from "../../images/pngwing.com.png"
import "./home.css"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()
    const loginUser=()=>{
        navigate('/signin')
    }
    const SignupUser=()=>{
        navigate('/signup')
    }
    const RegisterRest=()=>{
        navigate('/registerRestaurant')
    }
    return(
        <div className="container-fluid" class="gradient">
          
            <div class="nav">
            <nav className="navbar navbar-expand-lg "  >
                
                    <div className="container-fluid">
                     <ul  className='navbar-nav me-auto mb-2 mb-lg-0'>
                     {/* <li className='nav-item' > <button className="btn"
                     onClick={RegisterRest}>
                        Add Restaurants
                       </button></li> */}
                       <li className='nav-item '> 
                        <button className="btn" onClick={loginUser} >
                        Login
                        </button>
                       </li>
                       <li className='nav-item' class="d">
                         <button  className="btn" onClick={SignupUser} >
                         Sign Up
                         </button>
                         </li>
                    </ul>
                    </div>
                  </nav>
                 
            </div>
      
           <div class="p">
           <div className="row">
            <div className="col col-7" >
            <div class="foodi">Welcome to <b>PIZZA PURSUIT</b></div>
               {/* <form>
               <div className="row">
                    <div className="col">
                        <div className="mb-3" class="a">
                        <input className="form-control" placeholder="Enter your location"/>
                        </div>
                    </div>
                    <div className="col">
                        <div class="b">
                        <button className="btn" type="submit" ><span>search</span></button>
                        </div>
                    </div>
                </div>
               </form> */}
                
            </div>
            <div className="col col-5">
            <img alt='Home' src={homeImage} style={{
                height: 400, width: 400, marginleft: 70
                }}/>
            </div>
        </div>
           </div>
            <div style={{textAlign:"center",marginTop:40}}>
                
                <h5><b style={{fontSize:80,color:'#5C41A8'}}>Pizza Pursuit</b></h5>
                <div className="container" style={{textAlign:"justify",
                fontFamily:"sans-serif",
                textIndent:30,
                fontStyle:"italic"}}>
                    <p>This website can primarily be used for ordering pizza and other food items from the restaurant at nearby location . This is achieved through an easy to use graphical
interface menu options. It is managed by the admin. Restaurants can list their available food menus. Users can add
number of items to the cart. Different payment options are available to continue the order.Deliveryboy can view the order assigned and its corresponding address of delivery.</p>
                </div>
                <hr/>
                <div className="container" style={{margin:30,marginLeft:140}}>
                    <h4 style={{marginLeft:-140}}>Contact Us</h4>
                    <div className="row" style={{height:50,marginTop:30,marginRight:100}}>
                        <div className="col" >
                        {/* <img src={Kalpesh} className="card-img-top" style={{ height: 250,
                                width: 200,
                               boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                                display: "block",
                                 borderRadius: 5,}} alt="..."/> */}
                                 <div style={{marginLeft:-110,marginTop:10}}> <h5 style={{textAlign:"center"}}>ANIRUDHA CHAVAN</h5></div>
                                 <div style={{marginLeft:-40,marginTop:10,marginBottom:20, color:"blue"}}> <h7 style={{textAlign:"center"}}>anirudhchavan123@gmail.com</h7></div>

                        </div>
                        <div className="col">
                        {/* <img src={Pankaj} className="card-img-top" style={{ height: 250,
                                width: 200,
                                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                                display: "block",
                                 borderRadius: 5,}} alt="..."/> */}
                                 <div style={{marginLeft:-100,marginTop:10}}> <h5 style={{textAlign:"center"}}></h5></div>
                                 <div style={{marginLeft:-60,marginTop:10,marginBottom:20, color:"blue"}}> <h7 style={{textAlign:"center"}}></h7></div>

                        </div>
                        <div className="col">
                        {/* <img src={Raviraj} className="card-img-top" style={{ height: 250,
                                width: 200,
                                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                                display: "block",
                                 borderRadius: 5,}} alt="..."/> */}
                                 <div style={{marginLeft:-110,marginTop:10}}> <h5 style={{textAlign:"center"}}>HARSHITA AHIRWAR</h5></div>
                                 <div style={{marginLeft:-60,marginTop:10,marginBottom:20, color:"blue"}}> <h7 style={{textAlign:"center"}}>harshitaahirwar989@gmail.com</h7></div>

                        </div>
                        <div className="col">
                        {/* <img src={Omkar} className="card-img-top" style={{ height: 250,
                                width: 200,
                                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                                display: "block",
                                 borderRadius: 5,}} alt="..."/> */}
                                 <div style={{marginLeft:-110,marginTop:10}}> <h5 style={{textAlign:"center"}}></h5></div>
                                 <div style={{marginLeft:-60,marginTop:10,marginBottom:20, color:"blue"}}> <h7 style={{textAlign:"center"}}></h7></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
   
 
    );
}

export default Home;