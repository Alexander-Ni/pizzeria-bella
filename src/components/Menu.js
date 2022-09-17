import React, { useState } from "react";
import { BrowserRouter as  Switch, Route, Link } from 'react-router-dom';
import { Card } from '@mui/material';
import Products from "./Data";
import "./Menu.css";
import Button from '@mui/material/Button';
import Checkout from './Checkout';
import Categories from "./Categories";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const allCategories = ["Alt", ...new Set(Products.map((item) => item.category))];

function MenuApp() {
  const [cart, setCart] = useState(Products);

  const [show, setShow] = useState(false);

  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);


  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const filterItems = (category) => {
    setActiveCategory(category);
    if(category === "Alt") {
      setCart(Products)
      return;
    }
    const newItems = Products.filter((item) => item.category === category);
    setCart(newItems);
  }


  const addToCart = i => {
    setCart(prevState =>
      prevState.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            inCart: true,
            count: item.counterVal
          };
        }
        return item;
      })
    );
  };

  const increaseQuantity = i => {
    setCart(prevCart =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 9) {
            return item;
          } else return { ...item, count: item.count + 1 };
        } else if (i === o) {
          if (item.counterVal > 9) {
            return item;
          } else
            return {
              ...item,
              counterVal: item.counterVal + 1
            };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = i => {
    setCart(prevCart =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        } else if (i === o && item.counterVal > 1) {
          return {
            ...item,
            counterVal: item.counterVal - 1
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = i => {
    setCart(prevCart =>
      prevCart.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            count: 0,
            counterVal: 1,
            inCart: false
          };
        }
        return item;
      })
    );
  };

  const cartCountTotal = cart.reduce((acc, item) => acc + item.count, 0);
  const cartPriceTotal = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const cartTotals = () => 
    cartCountTotal === 0 ? (
      <div>
    <Categories 
      categories={categories} 
      activeCategory={activeCategory} 
      filterItems={filterItems} 
    />
      </div>
    ) : ( 
      <> 
        <div className="shoppingCart">
          <b>
            <Card id="order-card">
              <div className="order-card-header">
                <Button variant="contained" size="large" onClick={handleClickOpen}>Totalt</Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                      {"Handlekurven"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <b style={{color: '#0B090A'}}>Antall retter: {cartCountTotal}</b>
                        <br/>
                        <b style={{color: '#0B090A'}}>Total pris: {Number.isInteger(cartPriceTotal)
                            ? cartPriceTotal
                            : cartPriceTotal.toFixed(2)}
                            kr 
                        </b>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button variant="contained" size="large" onClick={handleClose}>Lukk</Button>
                      <Switch>
                        <Route path='/Checkout' component={Checkout} />
                      </Switch>
                      <Button variant="contained" size="large" style={{backgroundColor: '#A4161A'}}>
                        <Link to={'./Checkout'} style={{color: '#f5f3f4', textDecoration: 'none'}} price={cartPriceTotal}>Bestill</Link>
                      </Button>
                    </DialogActions>
                  </Dialog>     
              </div>
            </Card>
          </b>
        </div>
      </>
    );

    const topFunction = () => {
      window.scrollTo(0, 0)
    }

    const cartItems = cart.map((item, i) => (
      <React.Fragment key={item.name}>
        {item.inCart && (
          <>
            <Card id="cart-card">
              <b> Navn: {item.name}</b>
              <p>
                <button className="input-button" onClick={() => decreaseQuantity(i)}>-</button>{" "}
                {item.count} <button className="input-button" onClick={() => increaseQuantity(i)}>+</button>
              </p>
              <b>
                Pris: {Number.isInteger(item.count * item.price)
                  ? item.count * item.price
                  : `${(item.count * item.price).toFixed(2)}`}
                  kr
              </b>
              <button className="product-remove-button" onClick={() => removeFromCart(i)}>Ta bort</button>
            </Card>
            <Card id="footerCartCard">
              <Button variant="contained" size="large" onClick={topFunction}>
                Vis varer
              </Button>
            </Card>
          </>
        )}
      </React.Fragment>
    ));

  const cartProducts = () => (  
        <div className="flexParent">
          {cart.map((item, i) => (
            <Card key={item.name} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
            <div style={{display: 'flex'}}>
              <img className="product-image" src={item.image} alt={item.name} />
              <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                  <div>
                  <Button style={{marginLeft: '5vh', marginTop: '1vh'}} variant="contained" {...bindTrigger(popupState)}>
                    info
                  </Button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                   }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                   }}
                    >
                  <Typography sx={{ p: 2 }}>{item.ingredients}</Typography>
                  <Typography sx={{ p: 2 }}>{item.allergens}</Typography>
                  </Popover>
                  </div>
                  )}
              </PopupState> 
            </div>
              <h3>{item.name}</h3>
              <p className="product-price">{item.price}kr</p>    
              {!item.inCart ? (
                <>
                  <button className="input-button" onClick={() => decreaseQuantity(i)}>-</button>
                  <input id="counter" readOnly type="text" value={item.counterVal} />
                  <button className="input-button" onClick={() => increaseQuantity(i)}>+</button>
                  <br />
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <button className="product-add-button" onClick={() => addToCart(i)} >Legg til</button>
                  </div>
                  </>
                    ) : (
                    <p>
                     <b>Produktet ble lagt til!</b>
                     <button className="product-remove-button" onClick={() => removeFromCart(i)}>Ta bort</button>
                    </p>
                   )}
                  </Card>
                  ))}
                </div>
              );



  return (
    <div>
      {cartItems}
      {cartTotals()}
      {cartProducts()}
    </div>
  )
};

export default MenuApp;